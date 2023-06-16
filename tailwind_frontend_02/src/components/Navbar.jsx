import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNavOpen = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const handleNavClose = () => {
    setNav(!nav);
    if (nav) {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-bold text-2xl z-20">Experiences</h1>
      {!nav ? (
        <HiMenuAlt3
          onClick={handleNavOpen}
          className="z-20 text-white cursor-pointer ease-in-out duration-500"
        />
      ) : (
        <HiOutlineX
          onClick={handleNavClose}
          className="z-20 text-white cursor-pointer ease-in-out duration-500"
        />
      )}

      <div
        className={
          nav
            ? "ease-in duration-500 fixed text-gray-300 right-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen right-[-100%] ease-out z-10 hidden"
        }
      >
        <ul className="flex flex-col w-full h-full items-center justify-center">
          <li className="font-bold text-3xl p-8">Home</li>
          <li className="font-bold text-3xl p-8">Destinations</li>
          <li className="font-bold text-3xl p-8">Reservations</li>
          <li className="font-bold text-3xl p-8">Amenities</li>
          <li className="font-bold text-3xl p-8">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
