import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black pt-16 relative overflow-hidden"
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full text-sm shadow-[0_0_20px_rgba(168,85,247,0.6)]">
              Available for Work
            </span>
          </div>
          
          <h1 className="mb-6 text-white" style={{ fontSize: '4rem' }}>
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Amna Nihal
            </span>
            
          </h1>
          
          <p className="mb-8 text-gray-400 max-w-2xl mx-auto">
            I craft beautiful, user-centric digital experiences that blend
            aesthetic design with cutting-edge technology. Specializing in web
            development, UI/UX design, and creative problem-solving.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
            <Button 
              onClick={scrollToContact} 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] transition-all duration-300"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 hover:border-purple-400"
            >
              <a href="#projects">View Work</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/AmnaNihal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 transform"
            >
              <Github className="w-6 h-6" /> 
            </a>
            <a
              href="www.linkedin.com/in/amna-nehal-744a70222"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:amnanihal2002@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-purple-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
