import React from "react";
import About from "../components/about/About";
import Blog from "../components/blog/Blog";
import Contact from "../components/contact/Contact";
import Home from "../components/home/Home";
import Portfolio from "../components/portfolio/Portfolio";
import Pricing from "../components/pricing/Pricing";
import Resume from "../components/resume/Resume";
import Services from "../components/services/Services";
import Sidebar from "../components/sidebar/Sidebar";
import Testimonials from "../components/testimonials/Testimonials";

const Main_Portfolio = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Blog />
        <Contact />
        <Portfolio />
        <Pricing />
        <Resume />
        <Services />
        <Testimonials />
      </main>
    </>
  );
};

export default Main_Portfolio;
