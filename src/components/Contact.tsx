import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@alexjohnson.com",
      href: "mailto:hello@alexjohnson.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-purple-950/20 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach
              out. I'm always open to discussing new opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="mb-6 text-purple-300">Contact Information</h3>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/30 p-4 rounded-2xl backdrop-blur-sm hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 transform hover:-translate-x-2"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-300 hover:text-purple-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-300">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.6)] transform hover:scale-[1.02] transition-all duration-300">
                <h4 className="mb-2 text-white">Let's Work Together</h4>
                <p className="text-purple-100 text-sm">
                  I'm currently available for freelance work and new project
                  opportunities. Let's create something amazing together!
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/30 p-8 rounded-2xl backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]">
              <h3 className="mb-6 text-purple-300">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-300">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-black/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-black/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-black/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/50"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)]"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
