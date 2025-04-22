import React from 'react';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {

  const handleClick = () => {
    const phoneNumber = '971588742991';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-gray-100 px-6 py-10 mt-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-lg">Let’s</p>
          <h2 className="text-3xl md:text-5xl font-semibold">Get in touch</h2>
        </div>

        <Link to="/contact">
  <button className="relative overflow-hidden px-4 py-2 rounded-md text-sm tracking-widest flex items-center gap-2 group border">
    <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">CONTACT</span>
    <span className="text-2xl relative z-10 text-black group-hover:text-white transition-colors duration-300">↗</span>

    {/* Animated background */}
    <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
  </button>
</Link>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-300" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} All rights reserved.</p>

        <div className="flex gap-4 mt-4 md:mt-0 text-xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-black transition-all" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="hover:text-black transition-all" />
          </a>
                <a onClick={handleClick} className="cursor-pointer animate-bounce">
            <FaWhatsapp className="hover:text-black transition-all" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
