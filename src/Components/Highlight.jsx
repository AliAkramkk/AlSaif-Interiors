import React from "react";
import img1 from "../assets/proj1.jpg";
import img2 from "../assets/proj2.webp";
const Highlight = () => {
  return (
    <>
    <div className="flex md:flex-row flex-col gap-3 py-6 px-6">
      <div className="text-xl md:text-3xl font-mono md:w-1/3">
        We Convert It as per Your Dream
      </div>
      <div className="text-xl md:text-3xl font-mono md:w-2/3 flex flex-col">
        <h1>
          From Structure to Design We are here to help you with your dream
          project.
        </h1>
        <div className="flex md:flex-row items-center justify-between mt-4 font-light">
          <p className="text-xs md:text-sm font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            corrupti a repudiandae enim magni odio?
          </p>
          <p className="text-xs md:text-sm font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            corrupti a repudiandae enim magni odio?
          </p>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-3 py-6 px-6">
        <div>
<img src={img1} alt="" className="md:w-[450px] h-full object-cover" />
</div>
        <div>
<img src={img2} alt="" className="md:w-[950px] object-cover" />
</div>
    </div>
    </>
  );
};

export default Highlight;
