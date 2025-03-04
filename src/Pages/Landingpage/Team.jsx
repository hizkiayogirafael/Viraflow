import React from "react";
import team1 from "../../Assets/team1.png";
import team2 from "../../Assets/team2.png";
import team3 from "../../Assets/team3.png";

const Team = () => {
  return (
    <div className="w-full h-fit bg-[#F4F4F4] flex flex-col lg:flex-row font-manrope px-[23px] lg:px-[170px] py-4 ">
      {/* Team desc */}
      <div className="flex flex-col lg:w-[40%] justify-start">
        <h1 className="font-semibold text-[22px] lg:text-[50px]">
          a Man Behind Viraflow Team!
        </h1>
        <h1 className="text-[17px] lg:text-[30px]">
          These are Some of Viraflow Super Team!
        </h1>
        <button className="px-4 lg:px-8 my-2 lg:my-6 py-2 bg-black text-white w-fit rounded-xl lg:text-[30px]">
          Contact Us!
        </button>
      </div>

      {/* Team Card */}
      <div className="w-full h-fit flex flex-col lg:flex-row justify-end gap-3 py-4">
        {/* Mode Mobile: Scrollable Row */}
        <div className="w-full flex flex-row gap-3 overflow-x-auto scrollbar-hide lg:hidden">
          <img
            src={team1}
            className="rounded-2xl min-w-[300px] max-w-[340px] object-cover"
            alt="Team Member 1"
          />
          <img
            src={team3}
            className="rounded-2xl min-w-[300px] max-w-[340px] object-cover"
            alt="Team Member 2"
          />
          <img
            src={team2}
            className="rounded-2xl min-w-[300px] max-w-[340px] object-cover"
            alt="Team Member 3"
          />
        </div>

        {/* Mode Large Screen */}
        <div className="hidden lg:flex flex-row flex-nowrap justify-end gap-3">
          <img
            src={team1}
            className="rounded-2xl w-full max-w-[340px] object-cover"
            alt="Team Member 1"
          />
          <img
            src={team3}
            className="rounded-2xl w-full max-w-[340px] object-cover"
            alt="Team Member 2"
          />
          <img
            src={team2}
            className="rounded-2xl w-full max-w-[340px] object-cover"
            alt="Team Member 3"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
