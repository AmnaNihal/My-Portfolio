import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home",     href: "#home" },
    { label: "About",    href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills",   href: "#skills" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div style={{ position: "fixed", top: 24, left: 0, right: 0, zIndex: 50, display: "flex", flexDirection: "column", alignItems: "center" }}>

      {/* Pill */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "40px",
        padding: "14px 40px",
        borderRadius: "9999px",
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(168,85,247,0.25)",
        boxShadow: "0 0 30px rgba(168,85,247,0.15)",
      }}>

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            background: "linear-gradient(to right, #c084fc, #9333ea)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textDecoration: "none",
            whiteSpace: "nowrap",
            letterSpacing: "-0.02em",
          }}
        >
          Portfolio
        </a>

        {/* Divider */}
        <div style={{ width: 1, height: 24, background: "rgba(168,85,247,0.3)", flexShrink: 0 }} />

        {/* Nav links — desktop */}
        <div className="hidden md:flex" style={{ gap: "36px", alignItems: "center" }}>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#d1d5db",
                fontSize: "1rem",
                fontWeight: 500,
                padding: 0,
                position: "relative",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#d1d5db")}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          style={{ color: "#a855f7" }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div style={{
          marginTop: 8,
          width: 220,
          borderRadius: 16,
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(168,85,247,0.25)",
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#d1d5db",
                fontSize: "0.95rem",
                textAlign: "left",
                padding: "6px 8px",
                borderRadius: 8,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#d1d5db")}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}