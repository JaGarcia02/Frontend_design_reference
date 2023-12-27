import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../contexts/Ecomerce/SidebarContext";
import { BsBag } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
import { CartContext } from "../../contexts/Ecomerce/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { setIsOpen, isOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);
  return (
    <header
      className={`${
        isActive ? "bg-white py-[1rem] shadow-md" : "bg-none"
      } fixed w-full z-10 transition-all px-[35px] py-[4.5px] mdsm:px-[1px] xlsm:px-[1px] xsm:px-[1px] xxsm:px-[1px] lgmd:px-[40px] lg:px-[20px]`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/2"}>
          <div>
            <GiClothes className="text-[2.5rem]" />
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
