import React from "react";

const Login3 = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img
            className="w-full h-full"
            src="../../public/images/Login/pexels-jorge-fakhouri-filho-2531025.jpg"
            alt=""
          />
        </div>
        <div className="p-4 flex flex-col justify-around sm:justify-center sm:items-center">
          <form>
            <h2 className="text-4xl font-bold text-center mb-8">BRAND.</h2>
            <div className="w-full">
              <input
                className="border p-2 sm:px-[5rem] sm:flex"
                type="text"
                placeholder="Username"
              />
              <input
                className="border p-2 sm:px-[5rem] sm:mt-[1rem]"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="w-full py-2 my-4 bg-green-600 hover:bg-green-500">
              Sign In
            </button>
            <p className="text-center">Forgot Username or Password?</p>
          </form>
          <p className="text-center">Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default Login3;
