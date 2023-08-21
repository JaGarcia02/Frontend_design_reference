import React from "react";
import heroImg from "../../assets/images/hero.svg";
import CountUp from "react-countup";
import { AiOutlineMail } from "react-icons/ai";
import { IoAppsOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-center sm:flex-col md:flex-row">
          {/* ==================== hero left ==================== */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[35px]"
            >
              I'm John Timothy Garcia <br /> Fullstack Developer | Computer
              Engineer
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in-out duration-300 py-2 px-4 rounded-[8px]">
                  <AiOutlineMail />
                  Hire Me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] hover:border-b ease-in-out border-solid border-smallTextColor "
              >
                See Portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span className="mt-1">
                <IoAppsOutline />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              laudantium reprehenderit sint debitis illo labore voluptates magni
              molestiae atque ullam nihil dolorem, explicabo sapiente iste,
              voluptatibus voluptas illum officia consequuntur. Harum, non
              saepe, nemo tenetur magnam voluptas vitae nesciunt libero
              reprehenderit aut sequi distinctio eligendi aliquam incidunt
              atque. Exercitationem, accusantium.
            </p>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow me:
              </span>
            </div>
          </div>
          {/* ==================== hero left ==================== */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* https://www.youtube.com/watch?v=FjBJJepT6Ts&list=PLaaIOhrtglx7pv3XDtw5kCOgWM7xGRqdf&index=3&t=288s
   32:02
*/
