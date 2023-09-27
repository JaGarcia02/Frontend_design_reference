import React from "react";

const Modal_Test3_Page = ({ setNewForm }) => {
  return (
    <div className=" flex justify-center items-center">
      <div className="flex justify-center items-center w-[500px] h-[500px] bg-red-100">
        <button className="bg-gray-500" onClick={() => setNewForm(false)}>
          Close Me
        </button>
      </div>
    </div>
  );
};

export default Modal_Test3_Page;
