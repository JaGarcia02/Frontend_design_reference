import React from "react";

const NavLinks = () => {
  return (
    <div className="flex gap-32 justify-between text-[#999999]">
      <a href="#" className="py-4">
        Types
      </a>
      <a
        href="#"
        className="py-4 bg-[#FFE8A9] px-16 font-semibold text-[#343434]"
      >
        Price
      </a>
      <a href="#" className="py-4">
        Connect
      </a>
    </div>
  );
};

export default NavLinks;
