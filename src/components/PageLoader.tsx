import React, { useEffect, useRef, useState } from "react";

// Phase timeline:
//  "amna"  → brackets appear around "Amna"    (0 – 1300ms)
//  "nihal" → brackets slide over to "Nihal"   (1300 – 2500ms)
//  "exit"  → whole overlay fades out          (2500ms+)

type Phase = "amna" | "nihal" | "exit";

interface PageLoaderProps {
  onComplete?: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [phase, setPhase] = useState<Phase>("amna");
  const amnaRef  = useRef<HTMLSpanElement | null>(null);
  const nihalRef = useRef<HTMLSpanElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [frameStyle, setFrameStyle] = useState({
    left: 0, top: 0, width: 0, height: 0, opacity: 0,
  });

  const focusOn = (ref: React.RefObject<HTMLSpanElement | null>) => {
    if (!ref.current || !containerRef.current) return;
    const pad = 14;
    const word = ref.current.getBoundingClientRect();
    const wrap = containerRef.current.getBoundingClientRect();
    setFrameStyle({
      left:    word.left - wrap.left - pad,
      top:     word.top  - wrap.top  - pad,
      width:   word.width  + pad * 2,
      height:  word.height + pad * 2,
      opacity: 1,
    });
  };

  useEffect(() => {
    // Initial focus on "Amna" after paint
    const t0 = setTimeout(() => focusOn(amnaRef), 100);

    // Slide to "Nihal"
    const t1 = setTimeout(() => {
      setPhase("nihal");
      focusOn(nihalRef);
    }, 1400);

    // Fade out
    const t2 = setTimeout(() => {
      setPhase("exit");
      setTimeout(() => onComplete?.(), 700);
    }, 2700);

    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  // Keep frame accurate on resize
  useEffect(() => {
    const handleResize = () => {
      focusOn(phase === "amna" ? amnaRef : nihalRef);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [phase]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap');

        .pl-overlay {
          position: fixed; inset: 0;
          background: #0a0a0f;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: opacity 0.7s ease;
        }
        .pl-overlay.exit {
          opacity: 0;
          pointer-events: none;
        }

        /* Ambient purple glow */
        .pl-glow {
          position: fixed; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 55% 35% at 50% 50%,
            rgba(168,85,247,0.07) 0%, transparent 70%);
        }

        /* Name row */
        .pl-inner {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.24em;
          animation: pl-fadein 0.5s ease forwards;
        }
        @keyframes pl-fadein {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .pl-word {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 6vw, 3.6rem);
          letter-spacing: 0.05em;
          white-space: nowrap;
          user-select: none;
          transition: opacity 0.4s ease;
        }
        .pl-amna  { color: #a855f7; }
        .pl-nihal { color: #ffffff; }

        /* Dim the unfocused word */
        .phase-amna  .pl-nihal { opacity: 0.25; }
        .phase-nihal .pl-amna  { opacity: 0.25; }

        /* Sliding bracket frame — positioned absolutely over the inner div */
        .pl-frame {
          position: absolute;
          pointer-events: none;
          transition:
            left    0.5s cubic-bezier(0.77, 0, 0.18, 1),
            top     0.5s cubic-bezier(0.77, 0, 0.18, 1),
            width   0.5s cubic-bezier(0.77, 0, 0.18, 1),
            height  0.5s cubic-bezier(0.77, 0, 0.18, 1),
            opacity 0.3s ease;
        }

        /* Corner bracket pieces */
        .pl-c {
          position: absolute;
          width: 13px; height: 13px;
          border-color: #a855f7;
          border-style: solid;
          box-shadow: 0 0 7px rgba(168, 85, 247, 0.55);
        }
        .pl-c.tl { top: 0; left: 0;   border-width: 2px 0 0 2px; }
        .pl-c.tr { top: 0; right: 0;  border-width: 2px 2px 0 0; }
        .pl-c.br { bottom: 0; right: 0; border-width: 0 2px 2px 0; }
        .pl-c.bl { bottom: 0; left: 0;  border-width: 0 0 2px 2px; }


      `}</style>

      <div className={`pl-overlay${phase === "exit" ? " exit" : ""}`}>
        <div className="pl-glow" />

        <div className={`pl-inner phase-${phase}`} ref={containerRef}>

          {/* Bracket frame — moves via JS-measured position */}
          <div
            className="pl-frame"
            style={{
              left:    frameStyle.left,
              top:     frameStyle.top,
              width:   frameStyle.width,
              height:  frameStyle.height,
              opacity: frameStyle.opacity,
            }}
          >
            <span className="pl-c tl" />
            <span className="pl-c tr" />
            <span className="pl-c br" />
            <span className="pl-c bl" />
          </div>

          <span className="pl-word pl-amna"  ref={amnaRef}>Amna</span>
          <span className="pl-word pl-nihal" ref={nihalRef}>Nihal</span>


        </div>
      </div>
    </>
  );
}