import React from "react";
import { SiIonic } from "react-icons/si";

const NavBar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex justify-between items-center bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800 ">
          <span className=" text-3xl text-indigo-600 mr-1">
            <SiIonic />
          </span>
          Designer
        </div>
        <ul className="md:flex">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
