import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import PageLoader from "./components/PageLoader";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <PageLoader onComplete={() => setLoading(false)} />
      )}

      <div className="min-h-screen" style={{ visibility: loading ? "hidden" : "visible" }}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}
