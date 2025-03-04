import React from "react";
import media from "../../Assets/Media.png";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";

const Media = () => {
  return (
    <div className="w-full h-fit flex flex-col bg-[#F4F4F4] font-manrope px-[23px] lg:px-[170px] py-8">
      {/* Judul */}
      <div className="flex flex-col lg:flex-row lg:justify-between">
        {/* Judul utama */}
        <div className="text-black flex flex-col lg:pb-10">
          <h1 className="font-bold font-manrope text-[20px] lg:text-[50px]">
            We Also Sharing at Social Media!
          </h1>
          <h1 className="font-manrope text-[15px] lg:text-[30px]">
            Follow Our Page to get More Topic Discussion!
          </h1>
        </div>
        {/* icon */}
        <div className="text-white flex gap-2 items-center pt-2 pb-8">
          <button className="bg-black h-fit rounded-lg lg:rounded-xl px-4 py-2 lg:px-4 lg:py-4 text-[15px] lg:text-[50px]">
            <span className="block lg:hidden">Instagram</span>
            <GrInstagram className="hidden lg:block" />
          </button>
          <button className="bg-black h-fit rounded-lg lg:rounded-xl px-4 py-2 lg:px-4 lg:py-4 text-[15px] lg:text-[50px]">
            <span className="block lg:hidden">Tiktok</span>
            <FaTiktok className="hidden lg:block" />
          </button>
        </div>
      </div>
      {/* gambar */}
      <img src={media} className="w-full lg:pt-8 lg:pb-10" alt="joki web" />
    </div>
  );
};

export default Media;
