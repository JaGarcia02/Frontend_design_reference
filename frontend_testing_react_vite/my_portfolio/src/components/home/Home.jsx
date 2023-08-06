import React from "react";
import "./Home.css";
import Me from "../../assets/images/Ja.jpg";
import HeaderSocials from "./HeaderSocials";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="">John Timothy Yap Garcia</h1>
        <span className="home__education">I'm a Fullstack Developer</span>

        <HeaderSocials />
      </div>
    </section>
  );
};

export default Home;
