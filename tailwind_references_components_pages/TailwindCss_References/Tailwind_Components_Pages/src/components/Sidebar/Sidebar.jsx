import React, { useState } from "react";
import { SiIonic } from "react-icons/si";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Sidebar = () => {
  const [sideOpen, setSideOpen] = useState(true);
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
              className={`cursor-pointer duration-500 text-white text-[25px]`}
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
      </div>

      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  );
};

export default Sidebar;
