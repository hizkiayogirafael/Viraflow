import React from "react";
import Class from "../../Assets/class.png";
import class2 from "../../Assets/class2.png";

const Course = () => {
  return (
    <div className="w-full h-fit bg-black flex flex-col font-manrope px-[23px] lg:px-[170px] py-8">
      {/* class */}
      <div className="w-full h-fit flex flex-col">
        {/* text */}
        <div className="w-full h-fit py-4 lg:pt-[40px] flex flex-col lg:flex-row lg:justify-between">
          <h1 className="text-white lg:font-medium font-semibold text-[20px] lg:text-[45px]">
            Viraflow Online Course.
          </h1>
          <h1 className="text-white text-[12px] lg:text-[40px] italic">
            This is how we help Each Other.
          </h1>
        </div>
        {/* Course */}
        <img
          src={Class}
          className="lg:rounded-[40px] rounded-xl"
          alt="joki web"
        />
        {/* description and purchase */}
        <div className="w-full h-fit flex flex-col lg:flex-row py-4 lg:py-8">
          {/* Class */}
          <h1 className="text-white text-[17px] lg:text-[30px] lg:w-full">
            [NEW] Front-End Blueprint: Cara Berpikir & Merancang UI dengan Kuat!
            - HTML, CSS & TailwindCSS.
          </h1>
          {/* Button */}
          <div className="text-white flex flex-row w-full h-fit gap-2 lg:gap-4 justify-end">
            <button className="py-1 px-4 bg-[#3F6836] rounded-lg lg:rounded-2xl lg:text-[25px] font-medium lg:px-8 lg:py-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#4C7F40] active:scale-95">
              Overview
            </button>
            <button className="py-1 px-4 bg-[#3F6836] rounded-lg lg:rounded-2xl lg:text-[25px] font-semibold lg:px-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#4C7F40] active:scale-95">
              Purchase
            </button>
          </div>
        </div>
      </div>
      {/* Other class */}
      <div className="w-full h-fit flex flex-col">
        <img
          src={class2}
          className="lg:rounded-[40px] rounded-xl"
          alt="joki web"
        />
        {/* Button */}
        <div className="text-white flex flex-col lg:flex-row w-full h-fit gap-2 lg:gap-4 justify-end pt-4 pb-6 lg:py-8">
          {/* Class */}
          <h1 className="text-white text-[17px] lg:text-[30px] lg:w-full">
            [NEW] Front-End Blueprint: Cara Berpikir & Merancang UI dengan Kuat!
            - HTML, CSS & TailwindCSS.
          </h1>
          {/* Button */}
          <div className="text-white flex flex-row w-full h-fit gap-2 lg:gap-4 justify-end">
            <button className="py-1 px-4 bg-[#3F6836] rounded-lg lg:rounded-2xl lg:text-[25px] font-medium lg:px-8 lg:py-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#4C7F40] active:scale-95">
              Overview
            </button>
            <button className="py-1 px-4 bg-[#3F6836] rounded-lg lg:rounded-2xl lg:text-[25px] font-semibold lg:px-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#4C7F40] active:scale-95">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
