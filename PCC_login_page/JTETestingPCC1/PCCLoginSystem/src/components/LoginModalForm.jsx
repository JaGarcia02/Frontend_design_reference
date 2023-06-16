import React, { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import SuccessModal from "./SuccessModal";

const LoginModalForm = ({ setOpenModal }) => {
  // input data
  const [user, setUser] = useState({ email: "", password: "" });
  // input data

  // Success Modal Trigger
  const [successModal, setSuccessModal] = useState(false);
  // Success Modal Trigger

  //   function of when login is clicked
  const Login = () => {
    if (user.email == "" || user.email == "") {
      alert("Input Fields Are Empty!");
    } else {
      setSuccessModal(true);
      setTimeout(window.location.reload(), 5000);
    }
  };
  //   function of when login is clicked
  return (
    <div className="bg-black/80 h-full w-full absolute top-0 left-0">
      <div className="w-[30rem] h-[23rem] absolute top-[15rem] left-[41rem] bg-white">
        <div className="bg-cyan-400 w-full h-[4rem]">
          <div className="py-2 px-2 flex justify-end">
            <FaTimesCircle
              onClick={() => setOpenModal(false)}
              size={30}
              className="cursor-pointer text-red-600 hover:scale-110 duration-500 bg-white rounded-full border-none"
            />
          </div>
          <div className="">
            <img
              src="../../public/images/Logo/download (1).png"
              alt=""
              className="w-[15rem] h-[3rem] absolute top-0 left-0 mt-2 ml-2 rounded-md bg-cover bg-center bg-no-repeat"
            />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div>
            <div className="flex justify-center items-center mt-[3.5rem]">
              <input
                id="username"
                type="email"
                className="border-[2px] h-[40px] w-[25rem] border-gray-300 px-2"
                placeholder="Email. . . ."
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="flex justify-center items-center mt-[2rem]">
              <input
                id="password"
                type="password"
                className="border-[2px] h-[40px] w-[25rem] border-gray-300 px-2"
                placeholder="Password. . . ."
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>

            <button
              onClick={Login}
              className="ml-[3rem] mt-[3rem] w-[20rem] h-[2.5rem] bg-blue-500 font-semibold text-white hover:bg-blue-700 hover:rounded-md duration-200"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      {successModal && <SuccessModal />}
    </div>
  );
};

export default LoginModalForm;
