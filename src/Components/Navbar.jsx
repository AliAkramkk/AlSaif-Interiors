import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiPlus, FiX } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky w-full px-6 py-4  items-center justify-between border-b  z-20 bg-white md:mt-10">
        {/* Left - Socials */}
        <div className=" md:flex-none max-sm:flex justify-between items-center ">
        <div className="text-xl md:text-3xl tracking-widest font-thin text-left md:text-center ">
          A L &nbsp; S A I F &nbsp; I N T E R I O R S
          
        </div>
        <div className="md:hidden text-2xl " onClick={() => setMenuOpen(true)}>
          <FiPlus />
        </div>
        </div>
        <div className="hidden md:flex justify-between">
        <div className="hidden md:flex gap-4 text-xl">
          <a href="#" className="hover:text-gray-500"><FiInstagram /></a>
          <a href="#" className="hover:text-gray-500"><FaLinkedinIn /></a>
        </div>

        {/* Center - Logo */}
       

        {/* Right - Button & Menu Toggle */}
        <div className="hidden md:flex">
          <Link to="/contact">
            <button className="border px-4 py-2 rounded-md text-sm tracking-widest flex items-center gap-2 hover:bg-black hover:text-white transition-all">
              CONTACT
              <span className="text-2xl">↗</span>
            </button>
          </Link>
        </div>
        </div>
        <ul className="space-y-6 text-lg hidden md:flex md:space-x-8 md:space-y-0 justify-center items-center font-mono">
            <li><Link to="/projects" onClick={() => setMenuOpen(false)}>PROJECTS</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
            
          </ul>

        {/* Small Screen Toggle */}
      
      </nav>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center text-center px-8">
          <button
            className="absolute top-5 right-5 text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>
          <div className="text-xl font-light tracking-widest mb-10">
            A L &nbsp; S A I F &nbsp; I N T E R I O R S
          </div>
          <ul className="space-y-6 text-xl">
            <li><Link to="/projects" onClick={() => setMenuOpen(false)}>PROJECTS</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
