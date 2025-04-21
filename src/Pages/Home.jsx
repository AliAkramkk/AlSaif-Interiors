import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import roomImg from "../assets/hom1.jpg"; // Adjust the path as necessary
import Clients from "../Components/Clients";
import Alsaif from "../Components/Alsaif";
import HomeProjects from "../Components/HomeProjects";
import Highlight from "../Components/Highlight";


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
            <p className=" tracking-widest text-sm text-gray-500 ">
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
            <button className="mt-8 px-6 py-3 bg-black text-white rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
              EXPLORE NOW
              <span className="text-2xl">↗</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="relative ">
          <img
    src={roomImg}
    alt="modern kitchen"
    // style={{
    //   clipPath: "polygon(113px 100%, 18% calc(100% - 40px), 0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    // }}
    className="md:w-[850px] md:h-[550px] object-contain md:object-cover md:ml-20 clip-bottom-left-triangle"
  />

          </div>
        </div>
      </div>
      <Clients />
      <Alsaif />
      <HomeProjects />
      <Highlight />
    </>
  );
};

export default Home