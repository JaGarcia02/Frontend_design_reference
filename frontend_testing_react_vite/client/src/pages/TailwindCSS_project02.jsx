import React from "react";
import BeeLogo from "../assets/images/TailwindCSS_project02/logoBee.png";
import BeeBg from "../assets/images/TailwindCSS_project02/5397533.jpg";
import BeeAds from "../assets/images/TailwindCSS_project02/adssssss.png";

const TailwindCSS_project02 = () => {
  return (
    <div
      className="h-[88rem] w-screen bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.9)) ,url(${BeeBg})`,
        overflow: "hidden",
      }}
    >
      <nav className="flex items-center justify-between h-[70px] bg-yellow-500 overflow-hidden">
        <img
          src={BeeLogo}
          alt=""
          className="w-[120px] h-[100px] cursor-pointer"
        />
        <ul className="flex text-center">
          <li className="px-5">
            <a href="" className="text-white px-2 no-underline">
              Home
            </a>
          </li>
          <li className="px-5">
            <a href="" className="text-white px-2 no-underline">
              About
            </a>
          </li>
          <li className="px-5">
            <a href="" className="text-white px-2 no-underline">
              Features
            </a>
          </li>
          <li className="px-5">
            <a href="" className="text-white px-2 no-underline">
              Contact
            </a>
          </li>
        </ul>
        <div className="px-5 cursor-pointer  overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[60px] h-[80px] text-white"
          >
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
        </div>
      </nav>

      <div className="text-white mt-48 max-w-xl ml-[5rem]  overflow-hidden">
        <h1 className="text-6xl font-semibold leading-normal">
          Groceries <br /> delivery in 15 mins
        </h1>
        <p className="font-extralight">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur,
          nulla ipsum id, cum veritatis enim dignissimos quaerat totam
          perspiciatis impedit, vitae repellat nisi eos vel.
        </p>

        <div className="mt-10  overflow-hidden">
          <a
            href="#"
            className=" bg-yellow-500 rounded-3xl py-3 px-8 font-medium inline-block m-4 hover:bg-transparent hover:border-yellow-500 hover:border duration-300 border border-transparent"
          >
            Order Now
          </a>
          <a href="#">Download App</a>
        </div>
      </div>
      <div className="w-[100%] flex justify-center items-center">
        <img
          src={BeeAds}
          alt=""
          className="rounded-lg h-auto w-[55rem] mt-[10rem]"
        />
      </div>
    </div>
  );
};

export default TailwindCSS_project02;
