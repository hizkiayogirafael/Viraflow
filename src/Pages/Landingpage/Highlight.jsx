import React from "react";

const Highlight = () => {
  return (
    <>
      <div className="w-full h-[fit] bg-black text-white flex lg:flex-row flex-col px-[23px] lg:px-[170px] gap-6 pb-6 lg:pb-[80px] lg:justify-between justify-start lg:items-center">
        <div>
          <h1 className="text-[28px] lg:font-medium font-semibold lg:text-[55px]">
            30+ Student Project
          </h1>
          <h1 className="lg:text-[26px]">
            Guided by Viraflow Professional Mentor
          </h1>
        </div>
        <div>
          <h1 className="text-[26px] font-semibold lg:text-[55px]">
            Digital Class with Critical Thinking Focused
          </h1>
          <h1 className="lg:text-[26px]">
            helping students sharpen their skills by enhance critical thinking
            in problem-solving.
          </h1>
        </div>
        <div className="flex lg:text-right text-left  flex-col">
          <h1 className="text-[28px] lg:font-medium font-semibold lg:text-[55px]">
            10+ Industries Project
          </h1>
          <h1 className="lg:text-[26px]">
            Developed by the Viraflow Technical Team
          </h1>
        </div>
      </div>
    </>
  );
};

export default Highlight;
