import React from "react";
import img from "../assets/interior4.jpg";
const Alsaif = () => {
  return (
    <div className="bg-white py-10 px-6 md:px-10 md:py-10 overflow-hidden relative">
      <h1 className="text-xl font-mono py-8">
        We Are happy to see the transformation
      </h1>

      <div className="flex md:flex-row flex-col items-center gap-4">
        <img
          src={img}
          alt="Alsaif"
          className="md:w-[650px] md:h-[450px] mask-radial-[100%_110%] mask-radial-from-75% mask-radial-at-left ... "
        />
        {/* <img
        className="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-left ..." src={"img"} /> */}
        <div class="font-mono">
          
          <p class="mt-2 text-3xl text-gray-700 dark:text-gray-300  ">
            17 Years of Excellence
          </p>
          <p className="mt-1 text-sm leading-relaxed text-balance text-gray-500 max-h-[200px] overflow-hidden md:max-h-none">
            Founded in 2006, Al Saif Decor has proudly established itself as a
            trusted name in the United Arab Emirates’ contracting and interior
            solutions industry. With over 17 years of dedicated service, we’ve
            contributed to the architectural and commercial landscape across the
            Emirates, delivering high-quality, tailored solutions that reflect
            both local culture and modern design standards. From government
            projects to luxury residences and commercial developments, our
            portfolio reflects the depth of our expertise and the trust we’ve
            built with our clients. Our strength lies in precise engineering,
            creative execution, and a commitment to on-time delivery—core values
            that align with the UAE’s fast-paced, high-standard development
            vision. At Al Saif Decor, our people are our foundation. Our
            carefully selected team brings professionalism, innovation, and deep
            industry knowledge to every project. With cutting-edge project
            management, clear communication, and transparent progress tracking,
            we continue to raise the bar in quality and customer satisfaction.
            We don’t just build spaces—we build lasting relationships, shaped by
            trust, performance, and a shared pursuit of excellence in the UAE.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Alsaif;
