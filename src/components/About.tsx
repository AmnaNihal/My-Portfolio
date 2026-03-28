import React from "react";
import { Award, Code, Palette, Zap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: Palette,
      title: "Design First",
      description: "Creating intuitive and beautiful user interfaces",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and user experience",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Delivering high-quality solutions on time",
    },
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
            I’m a MERN Stack Developer focused on building scalable, full-stack applications. I specialize in clean APIs, secure authentication, and responsive UIs, with a strong emphasis on maintainable code and real-world problem solving.

            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              style={{ 
                transform: "perspective(1000px) rotateY(-2deg)",
                transformStyle: "preserve-3d"
              }}
            >
              <h3 className="mb-4 text-purple-300">My Story</h3>
              <p className="text-gray-400 mb-4">
                I started my journey in web development with a curiosity for how
                things work on the internet. That curiosity turned into a
                passion for creating meaningful digital experiences.
              </p>
              
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              style={{ 
                transform: "perspective(1000px) rotateY(2deg)",
                transformStyle: "preserve-3d"
              }}
            >
              <h3 className="mb-4 text-purple-300">What I Do</h3>
              <p className="text-gray-400 mb-4">
                I specialize in full-stack and MERN development with React and modern web
                technologies, but I'm also experienced in front-end development
                and UI/UX design.
              </p>
              <p className="text-gray-400">
                My approach is always user-first, ensuring that every project
                not only looks great but also provides an exceptional user
                experience.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/30 p-6 rounded-2xl text-center backdrop-blur-sm transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] group"
                style={{ 
                  transform: `perspective(1000px) rotateX(${index % 2 === 0 ? '5deg' : '-5deg'})`,
                  transformStyle: "preserve-3d",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${index % 2 === 0 ? '5deg' : '-5deg'}) translateY(0)`;
                }}
              >
                <highlight.icon className="w-10 h-10 mx-auto mb-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <h4 className="mb-2 text-white">{highlight.title}</h4>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
