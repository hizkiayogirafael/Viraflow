import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Navlogo from "../Assets/Navlogo.png";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col fixed z-50">
      <div className="w-full lg:h-[72px] h-[55px] bg-gradient-to-b from-[#91ac8b] to-[#3F6836] font-manrope flex items-center lg:px-[170px] px-[20px] py-4 lg:py-2">
        {/* Ads Class Banner */}
        <Marquee
          speed={50}
          gradient={false}
          direction="right"
          className="text-white lg:text-[30px] overflow-hidden whitespace-nowrap font-light"
        >
          Upcoming Class 2025 | Front-End Blueprint: Cara Berpikir & Merancang
          UI dengan Kuat!
        </Marquee>
      </div>
      {/* Menubar */}
      <div className="w-full lg:h-[52px] h-[35px] bg-[#161616] font-manrope flex items-center flex-row lg:px-[170px] px-[20px] py-4 lg:py-2 gap-3 lg:gap-4">
        <img src={Navlogo} className="w-[40px] lg:block hidden" alt="website" />
        <a className="text-white lg:text-[20px] text-[12px]">
          Digital Services
        </a>
        <a className="text-white lg:text-[20px] text-[11px]">Digital Course</a>
        <a className="text-white lg:text-[20px] text-[11px]">Freebies</a>
        <a className="text-white lg:text-[20px] text-[11px]">
          Media & Community
        </a>
      </div>
    </div>
  );
};

export default Navbar;
