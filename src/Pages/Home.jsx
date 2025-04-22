import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import roomImg from "../assets/hom1.jpg"; // Adjust the path as necessary
import Clients from "../Components/Clients";
import Alsaif from "../Components/Alsaif";
import HomeProjects from "../Components/HomeProjects";
import Highlight from "../Components/Highlight";
import Footer from "../Components/Footer";
import excellence from "../assets/excelence.jpg"
import Services from "../Components/Services";

// /assets/interior3.jpg
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
     <Navbar />
     <div className=" min-h-screen flex items-center justify-center px-4 md:px-20 py-16 md:-mt-16">
        <div className="grid md:grid-cols-2 items-center gap-10 ">
          {/* Left Content */}
          <div>
            <p className=" tracking-widest text-sm text-gray-500 mt-4">
              Offer for best interior
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-gray-900 mt-4">
              An aesthetic room is <br />
              given <span className="text-black font-bold">harmony</span>
            </h1>
            <p className="text-gray-600 mt-6 text-lg md:w-3/4">
              Change your view to realize a neat and aesthetic corner of the house
              and amaze everyone, especially your nuclear family. Make every
              moment of your home equipment a valuable item.
            </p>
          

            <Link to="/contact">
  <button className="relative overflow-hidden px-4 py-2 mt-5 rounded-md text-sm tracking-widest flex items-center gap-2 group border">
    <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">EXPLORE NOW</span>
    <span className="text-2xl relative z-10 text-black group-hover:text-white transition-colors duration-300">↗</span>

    {/* Animated background */}
    <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
  </button>
</Link>
<img
  src={excellence} className="animate-pulse " />
          </div>

          {/* Right Image */}
          <div className="relative ">
          <img
    src={roomImg}
    alt="modern kitchen"
    // style={{
    //   clipPath: "polygon(113px 100%, 18% calc(100% - 40px), 0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    // }}
    className="md:w-[850px] md:h-[550px] object-contain md:object-cover md:-mt-16 md:ml-20 clip-bottom-left-triangle"
  />

          </div>
        </div>
      </div>
      <Clients />
      <Alsaif />
      <HomeProjects />
      <Highlight />
      <Services />
      <Footer />
    </>
  );
};

export default Home