import React from "react";
import MyPicture from "../../assets/my_portfolio/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={MyPicture} alt="" className="home__img" />
        <h1 className="home__name">John Timothy Garcia</h1>
        <span className="home__education">I am a Fullstack developer.</span>
        <HeaderSocials />

        <a href="#contact" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
