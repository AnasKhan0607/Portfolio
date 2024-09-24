import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about" className="section">
      <About />
      </section>
      <section id="experience" className="section">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
