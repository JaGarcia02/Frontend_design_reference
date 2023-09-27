import React from "react";

const Modal_Test2_Page = ({ setNewModal }) => {
  return (
    <div className=" flex justify-center items-center">
      <div className="flex justify-center items-center w-[500px] h-[500px] bg-red-100">
        <button className="bg-yellow-500" onClick={() => setNewModal(false)}>
          Close Me
        </button>
      </div>
    </div>
  );
};

export default Modal_Test2_Page;
