import React, { useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import LoginModalForm from "./LoginModalForm";

const Login = () => {
  // image array
  const slides = [
    {
      url: "../../public/images/pexels-anna-shvets-3845810.jpg",
      title: "random",
    },
    {
      url: "../../public/images/pexels-klaus-nielsen-6303759.jpg",
      title: "random",
    },
    {
      url: "../../public/images/pexels-rfstudio-3825527.jpg",
      title: "random",
    },
    {
      url: "../../public/images/pexels-thirdman-5327584.jpg",
      title: "random",
    },
  ];
  // image array

  //   functions for arrows
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSilide = currentIndex === 0;
    const newIndex = isFirstSilide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  //   functions for arrows

  //   Modal
  const [openModal, setOpenModal] = useState(false);
  //   Modal

  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src="../../public/images/pexels-thirdman-5327584.jpg"
        alt="/"
      />

      <div className="flex justify-center items-center h-full">
        <div className="bg-white w-[750px] h-[660px]">
          <div className="flex flex-col-2 justify-start items-center">
            <img
              className="h-[10rem] w-[11rem] relative"
              src="../../public/images/Logo/1535532856961.jpeg"
              alt=""
            />
            <h1 className="text-[2rem] font-bold text-sky-500 relative">
              PATIENT CARE CORPORATION
            </h1>
          </div>
          {/* Image Slider */}
          <div className="w-[500px] h-[50px] m-auto mt-2 relative group">
            <div
              className="w-full h-[20rem] rounded-2xl bg-cover bg-center duration-500  "
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            ></div>
            {/* Left Arrow */}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full group-hover:bg-black/20 text-white cursor-pointer mt-[9rem]">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full group-hover:bg-black/20 text-white cursor-pointer mt-[9rem]">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            <div className="flex top-4 justify-center py-2">
              {slides.map((slide, slideIndex) => (
                <div
                  className="text-2xl cursor-pointer"
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
          {/* Image Slider */}
          <div className="mt-[20rem] flex w-full justify-center">
            <button
              // this event onclick is to set modal stat to true, which mean the modal will open
              onClick={() => setOpenModal(true)}
              className="w-[25rem] py-3 rounded-lg mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white font-semibold text-[16px]"
            >
              Login
            </button>
          </div>
          <div className="px-2 py-2 mt-[3rem] flex justify-center items-center">
            <span className="text-[12px]">
              Copyright © 1973 - PATIENT CARE CORPORATION's BLOG
            </span>
          </div>
          {/* ternary opperator to togge modal which modal state is set to false */}
          {openModal && <LoginModalForm setOpenModal={setOpenModal} />}
        </div>
      </div>
    </div>
  );
};

export default Login;
