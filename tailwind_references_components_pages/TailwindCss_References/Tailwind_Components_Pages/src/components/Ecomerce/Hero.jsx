import React from "react";
import EcomercePicture from "../../images/Ecomerce/pexels-cottonbro-studio-10679171.jpg";

const Hero = () => {
  return (
    <section className="bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-center bg-cover py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex">
          <div>
            <div>New Trend</div>
          </div>
          <h1>
            AUTUMN SALE STYLISH <br />
          </h1>
        </div>
        <div className="hidden lg:block">
          <img src={EcomercePicture} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// https://github.com/cristianmihai01/ecommerce-shop-starter/blob/main/tailwind.config.js
