import React from "react";
import {
  FaTachometerAlt,
  FaRegSun,
  FaChevronCircleRight,
  FaWrench,
  FaStickyNote,
  FaChartBar,
  FaRegCalendarAlt,
  FaChevronCircleLeft,
  FaBolt,
} from "react-icons/fa";

const AD_Sidebar = () => {
  return (
    <>
      <div className="bg-[#4E73DF] h-screen px-[25px]">
        <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
          <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
            Admin Pannel
          </h1>
        </div>
        <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]">
          <FaTachometerAlt className="text-white" />
          <p className="text-[14px] leading-[20px] font-bold text-white">
            Dashboard
          </p>
        </div>

        {/* 1st Main Button With Content */}
        <div className="pt-[15px] border-b-[1px] border-[EDEDED]/[0.3]">
          <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
            INTERFACE
          </p>
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <div className="flex items-center gap-[10px]">
              <FaRegSun className="text-white" />
              <p className="text-[14px] leading-[20px] font-normal text-white">
                Pages
              </p>
            </div>
            <FaChevronCircleRight className="text-white" />
          </div>

          {/* Button Content */}
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <div className="flex items-center gap-[10px]">
              <FaChartBar className="text-white" />
              <p className="text-[14px] leading-[20px] font-normal text-white">
                Charts
              </p>
            </div>
            <FaChevronCircleRight className="text-white" />
          </div>
        </div>

        {/* 2nd */}
        <div className="pt-[15px] border-b-[1px] border-[EDEDED]/[0.3]">
          <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
            ADDONS
          </p>
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <div className="flex items-center gap-[10px]">
              <FaStickyNote className="text-white" />
              <p className="text-[14px] leading-[20px] font-normal text-white">
                Components
              </p>
            </div>
            <FaChevronCircleRight className="text-white" />
          </div>

          {/* Button Content */}
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <div className="flex items-center gap-[10px]">
              <FaWrench className="text-white" />
              <p className="text-[14px] leading-[20px] font-normal text-white">
                Utilities
              </p>
            </div>
            <FaChevronCircleRight className="text-white" />
          </div>
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <div className="flex items-center gap-[10px]">
              <FaRegCalendarAlt className="text-white" />
              <p className="text-[14px] leading-[20px] font-normal text-white">
                Tables
              </p>
            </div>
          </div>
        </div>

        {/* 3rd */}
        <div className="flex justify-center items-center pt-[15px]">
          <div className="h-[40px] w-[40px] bg-[#3C5EC1] rounded-full flex justify-center items-center cursor-pointer">
            <FaChevronCircleLeft className="text-white" />
          </div>
        </div>

        <div className="bg-[#395CBF] mt-[15px] flex justify-center items-center flex-col py-[15px] px-[15px] gap-[15px] rounded-[3px]">
          <FaBolt className="text-white" />
          <p className="text-[12px] leading-[18px] font-normal text-white/[0.4] text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
            magnam?
          </p>
          <button className="bg-[#17A673] text-white flex items-center justify-center h-[30px] w-full rounded-[3px] text-[14px] leading-[21px] font-normal">
            Upgrade to Pro!
          </button>
        </div>
      </div>
    </>
  );
};

export default AD_Sidebar;
