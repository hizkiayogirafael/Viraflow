import React from "react";
import Logo from "../../Assets/Logo.png";
import promo from "../../Assets/promo.png";
import { FaArrowDownLong } from "react-icons/fa6";
import { MdOutlineContactless } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full h-fit pb-8 lg:pb-[120px] bg-black box-border lg:px-[170px] px-[23px] lg:pt-[200px] flex lg:flex-row flex-col pt-[120px] gap-8">
        {/* Description 1 - Side kiri */}
        <div className="lg:w-1/2 w-full h-fit lg:h-[601px] flex flex-col text-white lg:justify-between">
          <img src={Logo} className="lg:w-[380px] w-[220px]" alt="Website" />
          <h1 className="text-[31px] font-semibold lg:text-[81px]">
            Empowering Digital
          </h1>
          <h1 className="text-[31px] font-semibold lg:text-[74px]">
            Skills for The Future.
          </h1>
          <p className="text-[14px] text-justify font-normal lg:text-[24px] lg:pr-[40px]">
            Viraflow adalah digital agency yang berfokus pada pengembangan skill
            digital, media edukasi, produktivitas, dan persiapan karier bagi
            generasi muda dan profesional. Kami menghadirkan solusi inovatif
            dalam bentuk kursus digital, layanan desain & pengembangan web,
            serta media edukatif yang membantu individu dan bisnis berkembang di
            era digital.
          </p>
          <div className="w-full flex flex-row gap-2 lg:gap-4 lg:pt-6 pt-4 font-manrope lg:font-semibold lg:pr-[40px]">
            <Link
              className="text-[12px] lg:text-[20px] lg:px-7 lg:rounded-2xl 
                bg-[#7B00FF] hover:bg-[#cd9fff] px-2 py-3 rounded-lg font-medium 
                  flex flex-row items-center gap-1 transition-all duration-300 
                  transform hover:scale-105"
            >
              <span className="transition-all duration-300">
                Digital Services
              </span>
              <FaArrowDownLong className="transition-transform duration-300 hover:translate-y-1" />
            </Link>
            <Link
              className="text-[12px] lg:text-[20px] lg:px-7 lg:rounded-2xl 
                bg-[#00FF44] hover:bg-[#86e7a0] px-2 py-3 rounded-lg font-medium 
                  flex flex-row items-center gap-1 transition-all duration-300 
                  transform hover:scale-105 text-[#3D453F]"
            >
              <span className="transition-all duration-300">
                Digital Course
              </span>
              <FaArrowDownLong className="transition-transform duration-300 hover:translate-y-1" />
            </Link>
            <Link
              className="text-[12px] lg:text-[20px] lg:px-7 lg:rounded-2xl 
                bg-[#FE1A1A] hover:bg-[#ff6b6b] px-2 py-3 rounded-lg font-medium 
                  flex flex-row items-center gap-1 transition-all duration-300 
                  transform hover:scale-105"
            >
              <span className="transition-all duration-300">Contact Us</span>
              <MdOutlineContactless className="text-[12px] lg:text-[30px] transition-transform duration-300 hover:translate-y-1" />
            </Link>
          </div>
        </div>
        {/* Description 2 - Side kanan */}
        <div className="lg:w-1/2 h-fit lg:h-[601px] flex items-center justify-center">
          <img
            src={promo}
            className="w-full h-full object-contain"
            alt="joki website"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
