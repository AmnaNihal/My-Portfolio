import React, { useEffect, useState, useRef } from "react";

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React Js", level: 99 },
        { name: "Vite", level: 99 },
        { name: "TypeScript", level: 90 },
        { name: "Flutter", level: 75 },
        { name: "C#", level: 84 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 99 },
        { name: "ASP .Net Core", level: 82 },
        { name: "MongoDB", level: 92 },
        { name: "my Sql", level: 90 },
        { name: "Sql", level: 80 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Figma", level: 85 },
        { name: "Visual Studio", level: 100 }, 
        { name: "Visual Studio Code", level: 100 }, 
        { name: "Postman", level: 90 }, 
        { name: "Docker", level: 70 }, 
      ],
    }, 

    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "Tailwind", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Vuejs", level: 100 }, 
        { name: "Express.js", level: 95 },
        { name: "Restful API", level: 99 },
      ],
    },

  ];

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency
              levels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.category}
                className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/30 p-8 rounded-2xl backdrop-blur-sm transform hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
                style={{ 
                  transform: `perspective(1000px) rotateX(${index === 1 ? '0deg' : index === 0 ? '5deg' : '-5deg'})`,
                  transformStyle: "preserve-3d"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${index === 1 ? '0deg' : index === 0 ? '5deg' : '-5deg'}) translateY(0)`;
                }}
              >
                <h3 className="mb-6 text-purple-300">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-sm text-purple-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-purple-950/50 rounded-full overflow-hidden border border-purple-500/20">
                        <div
                          className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(168,85,247,0.6)]"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transition: 'width 1.5s ease-out'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Always learning and exploring new technologies to stay at the
              forefront of web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}