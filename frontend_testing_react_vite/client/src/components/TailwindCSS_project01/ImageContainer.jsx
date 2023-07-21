import React from "react";
import sofaImg from "../../assets/images/TailwindCSS_project01/noBg.png";

const ImageContainer = () => {
  return (
    <div className="absolute top-[8%] left-[-100px]">
      <img src={sofaImg} alt="" className="w-[700px] h-[700px]" />
    </div>
  );
};

export default ImageContainer;
