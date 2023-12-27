import React, { useState } from "react";
import { SiIonic } from "react-icons/si";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineSchedule,
  AiFillSetting,
} from "react-icons/ai";
import {
  MdOutlineDashboard,
  MdManageAccounts,
  MdOutlineAnalytics,
} from "react-icons/md";
import { BsFillInboxesFill, BsFiles } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

const Sidebar = () => {
  const [sideOpen, setSideOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", icon: <MdOutlineDashboard /> },
    { title: "Inbox", icon: <BsFillInboxesFill /> },
    { title: "Accounts", icon: <MdManageAccounts />, gap: true },
    { title: "Schedule", icon: <AiOutlineSchedule /> },
    { title: "Search", icon: <BiSearchAlt /> },
    { title: "Analytics", icon: <MdOutlineAnalytics /> },
    { title: "Files", icon: <BsFiles />, gap: true },
    { title: "Setting", icon: <AiFillSetting /> },
  ];
  return (
    <div className="flex">
      <div
        className={`${
          sideOpen ? "w-72" : "w-20"
        } p-5 pt-8 h-screen bg-dark-purple relative transition-all duration-500 ease-in`}
      >
        {sideOpen === true && (
          <button
            onClick={() => setSideOpen(false)}
            className="text-[12px] w-[25px] h-[25px] bg-white absolute cursor-pointer -right-3 top-9 border-2 border-dark-purple  rounded-full flex justify-center items-center "
          >
            <AiOutlineArrowLeft className=" text-[14px]" />
          </button>
        )}
        {sideOpen === false && (
          <button
            onClick={() => setSideOpen(true)}
            className="text-[12px] w-[25px] h-[25px] bg-white absolute cursor-pointer -right-3 top-9 border-2 border-dark-purple  rounded-full flex justify-center items-center "
          >
            <AiOutlineArrowRight className=" text-[14px]" />
          </button>
        )}

        <div className="flex gap-x-4 items-center ">
          <div>
            <SiIonic
              className={`cursor-pointer duration-500 text-white text-[25px] ml-[5px] ${
                sideOpen && "rotate-[360deg]"
              }`}
            />
          </div>
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              sideOpen === false && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-white text-lg h-[35px] flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "bg-light-white"}`}
            >
              <span className="text-[20px]">{menu.icon}</span>
              <span
                className={`${
                  !sideOpen && "scale-0"
                } origin-left duration-500 ease-in-out text-lg `}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  );
};

export default Sidebar;
