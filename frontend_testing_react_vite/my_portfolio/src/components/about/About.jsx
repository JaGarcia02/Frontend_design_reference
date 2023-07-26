import React from "react";
import AboutMe from "../../assets/my_portfolio/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={AboutMe} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Pariatur, earum. Eos voluptates temporibus optio placeat nesciunt
              a in laudantium, molestias nulla. Ea odio obcaecati est laborum,
              doloribus rem? Neque a ipsum ea consequuntur laborum minima,
              repudiandae ullam molestiae odio aperiam, qui autem rem cum ab
              dignissimos perferendis adipisci pariatur distinctio excepturi.
              Consequuntur incidunt rem recusandae, quia libero obcaecati
              deserunt dolore, dignissimos inventore voluptate dolorem voluptas
              minus voluptatum veritatis laudantium beatae. Nemo aliquid fuga
              fugiat voluptas ea itaque obcaecati recusandae perspiciatis unde
              in numquam quis dolores ducimus laudantium suscipit impedit eaque
              debitis veniam velit, aut repudiandae pariatur veritatis! Fugiat,
              aspernatur maxime.
              <br />
              <br />
              <a href="" className="btn">
                Download CV
              </a>
            </p>
          </div>

          <div className="about__skills grid">
            <div className="skills__data"></div>
            <div className="skills__data"></div>
            <div className="skills__data"></div>
            <div className="skills__titles">
              <h3 className="skills__name">Development</h3>
              <span className="skills__number ">90%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage development"></span>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number design">66%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Backend</h3>
                <span className="skills__number">82%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage backend"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
