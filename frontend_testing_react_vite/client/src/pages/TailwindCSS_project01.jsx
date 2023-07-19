import React from "react";
import NavLinks from "../components/TailwindCSS_project01/NavLinks";
import HeroTextContent from "../components/TailwindCSS_project01/HeroTextContent";
import LeftFooter from "../components/TailwindCSS_project01/LeftFooter";
import NavIcons from "../components/TailwindCSS_project01/NavIcons";
import ImageContainer from "../components/TailwindCSS_project01/ImageContainer";
import PageCount from "../components/TailwindCSS_project01/PageCount";
import RightFooter from "../components/TailwindCSS_project01/RightFooter";

const TailwindCSS_project01 = () => {
  return (
    <div className="w-screen h-screen font-alata flex overflow-hidden">
      <div className="h-full flex-1 pl-40 pr-24 pb-8 flex flex-col justify-between">
        <NavLinks />
        <HeroTextContent />

        <LeftFooter />
      </div>
      <div className="h-full flex-1 bg-[#FFF0C8] pr-40 pb-8 flex flex-col justify-between relative">
        <NavIcons />
        <ImageContainer />
        <PageCount />
        <RightFooter />
      </div>
    </div>
  );
};

export default TailwindCSS_project01;
