"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">

        <a
          href="#"
          className="text-cyan-400 font-bold text-2xl"
        >
          NB
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col items-center py-5 gap-5 text-white">
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
            
            <li>
              <a href="#certificates" onClick={() => setMenuOpen(false)}>
                Certifications
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}