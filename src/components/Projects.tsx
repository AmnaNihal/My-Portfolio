import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "AuctionsTable",
      description:
        "AuctionsTable is a web-based auction platform that allows users to browse auction categories, view item details, and place bids through a simulated bidding system. The platform includes features such as user account creation, categorized auctions, current and completed auctions, and responsive navigation to provide a smooth user experience.",
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://amnanihal.github.io/Auctions-Table/",
      githubUrl: "https://github.com/AmnaNihal/Auctions-Table",
    }, 


    {
      title: "Travel Booking Website",
      description:
        "Karnel Travel Guide is a full-stack web application built with ASP.NET Core MVC, Entity Framework Core, and SQL Server that allows users to explore tourist spots, hotels, resorts, and travel packages",
      image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server"],
      liveUrl: "#",
      githubUrl: "https://github.com/AmnaNihal/Karnel-Travel",
    },



    {
      title: "Fitness Tracker App",
      description:
        "Cross-platform mobile app for tracking workouts, nutrition, and fitness goals with social features and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["React Js", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "https://fitness-tracker-gamma-coral.vercel.app/",
      githubUrl: "https://github.com/AmnaNihal/Fitness-Tracker",
    },
    
    {
      title: "Currency Converter App",
      description:
        "Real-time currency converter app with support for 150+ currencies, historical exchange rates, and a sleek user interface.",
      image: "https://plus.unsplash.com/premium_photo-1677452023370-1a6c81b3ef81?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Flutter", "Dart","Firebase", "REST API"],
      liveUrl: "#",
      githubUrl: "https://github.com/AmnaNihal/Curren-See",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-purple-950/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A collection of my recent work showcasing various skills and
              technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-gradient-to-br from-purple-900/30 via-black to-purple-900/20 border border-purple-500/30 rounded-2xl overflow-hidden  transform hover:-translate-y-4 transition-all duration-500 group hover:shadow-[0_0_50px_rgba(168,85,247,0.5)]"
                style={{ 
                  transform: `perspective(1000px) rotateY(${index % 2 === 0 ? '-3deg' : '3deg'})`,
                  transformStyle: "preserve-3d"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg) translateY(-16px) scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateY(${index % 2 === 0 ? '-3deg' : '3deg'}) translateY(0) scale(1)`;
                }}
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-purple-300">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      asChild
                      className="bg-purple-600 hover:bg-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
