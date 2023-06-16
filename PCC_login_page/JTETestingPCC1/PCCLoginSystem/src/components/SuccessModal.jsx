import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const SuccessModal = () => {
  return (
    <div className="bg-black/70 h-full w-full absolute top-0 left-0">
      <div className="bg-white w-[35rem] h-[25rem] flex absolute top-[15rem] left-[39rem] ">
        {/* top background */}
        <span className="w-full h-[2rem] bg-cyan-400 flex"></span>
        <div className="absolute top-[5rem] left-[12rem] block items-center justify-center">
          <AiFillCheckCircle size={150} className="text-green-500" />
        </div>
        <span className="font-bold text-[16px] absolute top-[15rem] left-[10.5rem] ">
          User Successfully Loggedin
        </span>
        <span className="absolute w-full bg-cyan-400 top-[23rem] h-[2rem]"></span>
        {/* top background */}
      </div>
    </div>
  );
};

export default SuccessModal;
