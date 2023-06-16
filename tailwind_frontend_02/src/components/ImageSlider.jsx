import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = () => {
  const slides = [
    {
      url: "../../public/images/Slideshow/pexels-pnw-production-8995682.jpg",
      title: "Food 2",
    },
    {
      url: "../../public/images/Slideshow/pexels-surawitch-atsaradorn-1368043.jpg",
      title: "Food 3",
    },
    {
      url: "../../public/images/Dishes/pexels-ashish-sharma-904089.jpg",
      title: "Omelette with egg and sandwitch.",
    },
    {
      url: "../../public/images/Dishes/pexels-nici-gottstein-11722942.jpg",
      title: "Assorted Sushi",
    },
    {
      url: "../../public/images/Dishes/pexels-sebastian-arie-voortman-583880.jpg",
      title: "Spicy Dipped Shrimps",
    },
    {
      url: "../../public/images/Dishes/pexels-sebastian-coman-photography-3655916.jpg",
      title: "Sliced Tuna Gourmet",
    },
    {
      url: "../../public/images/Dishes/pexels-suzukii-xingfu-872835.jpg",
      title: "Lovers Dish Bundle",
    },
    {
      url: "../../public/images/Dishes/pexels-vincent-rivaud-3838632.jpg",
      title: "Eggs and Bacons",
    },
  ];

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

  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-cover bg-center duration-500  lg:bg-[length:1400px_900px] lg:h-[55rem]"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* Left Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer lg:mt-[16rem]">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer lg:mt-[16rem]">
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
  );
};

export default ImageSlider;
