"use client";
import { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="py-10 mb-12 flex justify-between items-center">
      <h1 className="text-xl font-burtons">Anas Khan</h1>
      <ul className={`md:flex md:items-center ${isOpen ? "block" : "hidden"} md:block`}>
        <li>
          <a href="#about" className="ml-8" onClick={handleToggle}>About</a>
        </li>
        <li>
          <a href="#experience" className="ml-8" onClick={handleToggle}>Experience</a>
        </li>
        <li>
          <a href="#projects" className="ml-8" onClick={handleToggle}>Projects</a>
        </li>
        <li>
          <a href="#contact" className="ml-8 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md">
            Contact
          </a>
        </li>
      </ul>
      <div className="md:hidden flex items-center">
        <button onClick={handleToggle}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </nav>
  );
}
