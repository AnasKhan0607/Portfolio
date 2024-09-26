// src/components/Navbar.jsx
'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="navbar bg-base-100 shadow-lg">
      {/* Navbar logo on the left */}
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Anas Khan</a>
      </div>

      {/* Hamburger menu button (shown on mobile) */}
      <div className="navbar-end lg:hidden">
        <button className="btn btn-square btn-ghost" onClick={handleToggle}>
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu items, horizontally on desktop, vertically as a popup on mobile */}
      <div
        className={`${
          navOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full bg-base-100 lg:bg-transparent lg:static lg:flex lg:items-center lg:justify-end`}
      >
        <div className="flex flex-col lg:flex-row lg:space-x-4 p-4 lg:p-0 lg:mr-4">
          <a href="#about" className="btn btn-ghost normal-case">About</a>
          <a href="#experience" className="btn btn-ghost normal-case">Experience</a>
          <a href="#projects" className="btn btn-ghost normal-case">Projects</a>
          <a href="#contact" className="btn btn-ghost normal-case">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
