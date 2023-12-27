import React from "react";
import { FaSearch, FaBell, FaEnvelope } from "react-icons/fa";
import ProfilePicture from "../../assets/images/346626277_741698167699643_6570512822969901207_n.jpg";

const AD_DashboardView = () => {
  return (
    <div className="flex justify-between items-center h-[70px] shadow-lg px-[25px]">
      <div className="flex items-center rounded-[5px]">
        <input
          type="text"
          className="bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal"
          placeholder="Search for. . ."
        />
        <span className="bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
          <FaSearch className="text-white" />
        </span>
      </div>
      <div className="flex items-center gap-[15px] relative">
        <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
          <FaBell />
          <FaEnvelope />
        </div>
        <div className="flex items-center gap-[15px] relative">
          <p>Ja Garcia</p>
          <div className="h-[50px] w-[50px] rounded-full bg-[#4E73DF] flex justify-center items-center">
            <img
              src={ProfilePicture}
              alt=""
              className="h-[3.5rem] w-[3.5rem] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AD_DashboardView;
