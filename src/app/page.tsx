'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Effect to toggle dark mode on the <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <main className="bg-cyan-50 dark:bg-zinc-800 text-gray-800 dark:text-white flex justify-center">
      <div className="w-4/5 max-w-screen-xl">
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <section id="hero">
          <Hero />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="skills" className="section">
          <Skills />
        </section>
        <section id="experience" className="section">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact/>
        </section>
        <section id="contact">
          <Footer />
        </section>
      </div>
    </main>
  );
}
