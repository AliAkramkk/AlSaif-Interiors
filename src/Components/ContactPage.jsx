import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactPage = () => {

    const handleClick = () => {
        const phoneNumber = '971588742991';
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
        window.open(url, "_blank");
      };
  return (
    <>
    <Navbar />
    <div className="min-h-screen px-6 py-12 md:px-20 bg-white text-black">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Contact us.</h2>
          <p className="text-gray-700 font-mono">
            If you have any questions, projects or requests, <br />please do not hesitate to contact us.
          </p>
         
          <div className="space-y-1 text-sm text-gray-600 font-mono">
            <p>  Office 307, Al Faisal Building 1,<br />King Faisal Street,<br />Sharjah, U.A.E</p>
            <p className="text-blue-600 underline mt-2">contact@anitaskyrta.com</p>
          
            <p className='font-mono'>+971 (0) 58 874 29 91</p>
          </div>
          <button onClick={handleClick} className="relative overflow-hidden px-4 py-2 rounded-md text-sm tracking-widest flex items-center gap-2 group border">
    <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">Whats App</span>
    <span className="text-2xl relative z-10 text-black group-hover:text-white transition-colors duration-300 ">↗</span>

    {/* Animated background */}
    <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
  </button>
        </div>

        {/* Right Side Form */}
        <form className="space-y-6 w-full">
          {/* Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="block text-xs mb-1 font-medium">First Name <span className="text-red-500">*</span></label>
              <input type="text" className="border border-black w-full px-3 py-2" required />
            </div>
            <div className="w-full">
              <label className="block text-xs mb-1 font-medium">Last Name</label>
              <input type="text" className="border border-black w-full px-3 py-2" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs mb-1 font-medium">E-mail <span className="text-red-500">*</span></label>
            <input type="email" className="border border-black w-full px-3 py-2" required />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs mb-1 font-medium">Phone <span className="text-red-500">*</span></label>
            <div className="flex gap-4">
              <select className="border border-black px-3 py-2 w-1/3" defaultValue="France">
                
                <option>UAE</option>
              
              </select>
              <input type="tel" className="border border-black w-2/3 px-3 py-2" placeholder="+971" required />
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label className="block text-xs mb-1 font-medium">Describe your project <span className="text-red-500">*</span></label>
            <textarea className="border border-black w-full px-3 py-2 h-24 resize-none" required></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="border border-black px-6 py-2 hover:bg-black hover:text-white transition-all">
            SEND
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactPage;
