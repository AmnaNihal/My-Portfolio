import React from "react";
import { Github, Linkedin, Mail, Twitter, Frame } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-purple-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Amna
              </h4>
              <p className="text-gray-400 text-sm">
                Creative Developer & Designer crafting beautiful digital
                experiences.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-purple-300">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-purple-300">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/AmnaNihal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-purple-900/30 border border-purple-500/30 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-500/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/amna-nihal-744a70222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-purple-900/30 border border-purple-500/30 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-500/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.behance.net/amnanihal-projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-purple-900/30 border border-purple-500/30 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-500/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                >
                  <Frame className="w-5 h-5" />
                </a>
                <a
                  href="mailto:amnanihal21@gmail.com"
                  className="w-10 h-10 bg-purple-900/30 border border-purple-500/30 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-500/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-500/20 pt-8 text-center text-sm text-gray-400">
            <p>© {currentYear} Amna Nihal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
