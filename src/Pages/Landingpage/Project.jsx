import React from "react";
import sub from "../../Assets/sub.png";
import { FaArrowDownLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import card from "../../Assets/Card.png";
import cardd from "../../Assets/cardweb.png";
import carddd from "../../Assets/cardesign.png";
import compa from "../../Assets/Compa.png";
import web from "../../Assets/web.png";

const Project = () => {
  return (
    <div className="w-full h-fit bg-[#F4F4F4] flex flex-col font-manrope px-[23px] lg:px-[170px] gap-4 py-2 lg:py-2">
      {/* judul project */}
      <div className="w-full h-fit flex flex-col lg:flex-row lg:justify-between">
        {/* lOGO freebies */}
        <div className="flex flex-row w-fit gap-2 lg:gap-4 items-center">
          <img src={sub} className="h-[20px] lg:h-[70px]" alt="joki web" />
          <h1 className="text-[#3F6836] text-[22px] lg:text-[60px] font-manrope font-bold">
            SERVICES & PROJECT.
          </h1>
        </div>
        {/* Nav Project */}
        <div className="flex flex-row items-center justify-between lg:text-right gap-4">
          <h1 className="text-[15px] lg:text-[30px] font-semibold w-[50%] lg:w-fit">
            Download Project and Service Archive [pdf].
          </h1>
          <Link className="text-white bg-[#3F6836] h-fit rounded-lg lg:rounded-[20px] px-2 lg:px-6 py-2 flex flex-row items-center gap-1 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#4C7F40] active:scale-95">
            <span className="hidden lg:block lg:text-[30px] font-medium">
              Archive
            </span>
            <FaArrowDownLong className="lg:hidden transition-transform duration-300 ease-in-out hover:translate-y-1" />
          </Link>
        </div>
      </div>
      {/* Card Project & Services */}
      <div className="w-full h-fit flex flex-wrap justify-center lg:justify-between gap-4 lg:gap-4 pb-4 lg:pb-12  ">
        <img
          src={card}
          className="w-full min-w-[150px] lg:max-w-[32%] rounded-[21px] lg:rounded-[41px] object-cover transition-all duration-300 hover:opacity-80 "
          alt="joki web"
        />
        <img
          src={cardd}
          className="w-full min-w-[150px] lg:max-w-[32%] rounded-[21px] lg:rounded-[41px] object-cover transition-all duration-300 hover:opacity-80 "
          alt="joki web"
        />
        <img
          src={carddd}
          className="w-full min-w-[150px] lg:max-w-[32%] rounded-[21px] lg:rounded-[41px] object-cover transition-all duration-300 hover:opacity-80"
          alt="joki web"
        />
      </div>
    </div>
  );
};

export default Project;
