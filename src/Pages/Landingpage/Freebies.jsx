import React from "react";
import sub from "../../Assets/sub.png";
import { Link } from "react-router-dom";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Freebies = () => {
  return (
    <div className="w-full h-fit bg-[#F4F4F4] flex flex-col font-manrope px-[23px] lg:px-[170px] gap-4 py-3 lg:py-[70px]">
      <div className="w-full h-fit flex flex-col lg:flex-row justify-between">
        {/* lOGO freebies */}
        <div className="flex flex-row gap-2 lg:gap-4 items-center">
          <img src={sub} className="h-[20px] lg:h-[70px]" alt="joki web" />
          <h1 className="text-[#3F6836] text-[22px] lg:text-[75px] font-manrope font-bold">
            FREEBIES.
          </h1>
        </div>
        {/* Nav Freebies */}
        <div className="flex flex-row items-center justify-between gap-4">
          <h1 className="text-[15px] lg:text-[30px] lg:w-full w-[200px] font-semibold">
            Available until [ 3 March 2024 - 4 March 2024 ]
          </h1>
          <Link className="text-white bg-[#3F6836] h-fit rounded-lg lg:rounded-[20px] px-2 lg:px-6 py-2 flex flex-row items-center gap-1 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#4C7F40] active:scale-95">
            <span className="hidden lg:block lg:text-[30px] font-medium">
              Download
            </span>
            <FaArrowDownLong className="lg:hidden transition-transform duration-300 ease-in-out hover:translate-y-1" />
          </Link>
        </div>
      </div>
      {/* Freebies Item */}
      <div
        className="w-full h-fit py-4 lg:py-6
       rounded-2xl lg: bg-black lg:rounded-[30px] flex flex-row px-6 lg:px-8 items-center"
      >
        <h1 className="text-white text-[16px] lg:text-[50px] font-medium flex flex-row lg:justify-between w-full items-center lg:gap-6">
          Front End Template Personal Site - Click to View
          <FaArrowUpRightFromSquare className="lg:text-[30px]" />
        </h1>
      </div>
    </div>
  );
};

export default Freebies;
