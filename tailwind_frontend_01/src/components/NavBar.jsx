import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">React</h1>
      <ul className="hidden md:flex">
        <li className="p-4">HOME</li>
        <li className="p-4">COMPANY</li>
        <li className="p-4">RESOURCES</li>
        <li className="p-4">ABOUT</li>
        <li className="p-4">CONTACT</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose className="cursor-pointer" size={20} />
        ) : (
          <AiOutlineMenu className="cursor-pointer" size={20} />
        )}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4 text-[#00df9a]">React</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">HOME</li>
          <li className="p-4 border-b border-gray-600">COMPANY</li>
          <li className="p-4 border-b border-gray-600">RESOURCES</li>
          <li className="p-4 border-b border-gray-600">ABOUT</li>
          <li className="p-4">CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
