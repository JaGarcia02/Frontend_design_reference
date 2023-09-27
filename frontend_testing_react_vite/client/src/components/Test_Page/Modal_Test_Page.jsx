import React from "react";

const Modal_Test_Page = ({ setOpenModal }) => {
  return (
    <div className=" flex justify-center items-center">
      <div className="flex justify-center items-center w-[500px] h-[500px] bg-red-100">
        <button className="bg-red-500" onClick={() => setOpenModal(false)}>
          Close Me
        </button>
      </div>
    </div>
  );
};

export default Modal_Test_Page;
