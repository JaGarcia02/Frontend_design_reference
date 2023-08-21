import React from "react";
import { BsSend } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ================== logo ================== */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              Ja
            </span>

            <div className="leading-[20px]">
              <h2 className="text-xl font-[700] text-smallTextColor">
                Ja Garcia
              </h2>
              <p className="text-smallTextColor text-[16px] font-[500]">
                Personal
              </p>
            </div>
          </div>

          {/* ================== logo end ================== */}

          {/* ================== menu ================== */}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#service">
                  Services
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* ================== menu ================== */}

          {/* ================== menu right ================== */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] w-[123px] hover:bg-smallTextColor hover:text-white hover:font-[600] hover:w-[123px] ease-in-out duration-700 ">
              <BsSend />
              Let's Talk
            </button>

            <span className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <AiOutlineMenu />
            </span>
          </div>
          {/* ================== menu right ================== */}
        </div>
      </div>
    </header>
  );
};

export default Header;
