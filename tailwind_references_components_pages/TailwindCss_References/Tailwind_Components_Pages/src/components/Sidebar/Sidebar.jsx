import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Sidebar = () => {
  const [sideOpen, setSideOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`${
          sideOpen ? "w-72" : "w-20"
        }  h-screen bg-dark-purple relative transition-all duration-500 ease-in`}
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
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  );
};

export default Sidebar;
