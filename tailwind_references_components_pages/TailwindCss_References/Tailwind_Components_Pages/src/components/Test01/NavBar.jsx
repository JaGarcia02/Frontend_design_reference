import React, { useState } from "react";
import { SiIonic } from "react-icons/si";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaTimesCircle } from "react-icons/fa";
import Button from "./Button";

const NavBar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex justify-between items-center bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800 ">
          <span className=" text-3xl text-indigo-600 mr-1">
            <SiIonic />
          </span>
          Designer
        </div>
        <div className="text-3xl absolute right-8 top-[1.05rem] cursor-pointer md:hidden">
          {openMenu === true && (
            <FaTimesCircle onClick={() => setOpenMenu(false)} />
          )}
          {openMenu === false && (
            <BsFillMenuButtonWideFill onClick={() => setOpenMenu(true)} />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${
            openMenu === true ? "top-[4rem]" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl  md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Get Started</Button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
