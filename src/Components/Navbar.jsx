import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiPlus, FiX } from "react-icons/fi";
import { FaLinkedinIn,FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path
      ? `border-b-2 ${isScrolled ? 'border-gray-700 text-black' : 'border-gray-700 text-black'}`
      : '';

  const textColor = isScrolled ? 'text-black' : 'text-black';
 
const handleClick = () => {
  const phoneNumber = '971588742991';
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  window.open(url, "_blank");
};

  return (
    <>
      {/* Navbar */}
      <nav className="sticky w-full px-6 py-4  items-center justify-between border-b  z-20 bg-white md:mt-10">
        {/* Left - Socials */}
        <div className=" md:flex-none max-sm:flex justify-between items-center ">
        <div className="text-lg md:text-3xl tracking-widest font-thin text-left md:text-center ">
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
          <a onClick={handleClick} className="cursor-pointer">
  <FaWhatsapp className="hover:text-black transition-all animate-bounce" />
</a>
        </div>

        {/* Center - Logo */}
       

        {/* Right - Button & Menu Toggle */}
        <div className="hidden md:flex">
        <Link to="/contact">
  <button className="relative overflow-hidden px-4 py-2 rounded-md text-sm tracking-widest flex items-center gap-2 group border">
    <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">CONTACT</span>
    <span className="text-2xl relative z-10 text-black group-hover:text-white transition-colors duration-300">↗</span>

    {/* Animated background */}
    <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
  </button>
</Link>
        </div>
        </div>
        <ul className="space-y-6 text-lg hidden md:flex md:space-x-8 md:space-y-0 justify-center items-center font-thin">
            <li className={` text-lg hover:scale-110 transition-all ease-in-out ${isActive('/')}`}><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
            <li className={` text-lg hover:scale-110 transition-all ease-in-out ${isActive('/portfolio')}`}><Link to="/portfolio" onClick={() => setMenuOpen(false)}>PORTFOLIO</Link></li>
            {/* <li><Link to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link></li> */}
            <li className={` text-lg hover:scale-110 transition-all ease-in-out ${isActive('/about')}`}><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
            
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
          <div className="text-lg font-light tracking-widest mb-10">
            A L &nbsp; S A I F &nbsp; I N T E R I O R S
          </div>
          <ul className="space-y-6 text-xl">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
            <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>PORTFOLIO</Link></li>
            {/* <li><Link to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link></li> */}
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
