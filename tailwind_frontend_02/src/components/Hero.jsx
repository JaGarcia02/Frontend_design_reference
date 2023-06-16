import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="../../public/images/pexels-chedi-tanabene-1710795.jpg"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 lef-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max:w-[1100px] m-auto absolute p-4">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:7xl drop-shadow-2xl">
            Private Beaches & Gateaways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae, sit perspiciatis esse accusamus sint neque ex dolorem
            omnis laudantium. Adipisci quasi ratione dolorum tenetur quam
            quaerat fuga asperiores quisquam qui laboriosam? Commodi molestias
            nisi voluptatibus est architecto laboriosam cum quia nostrum omnis
            earum rem, ad suscipit sequi? Qui, iure est!
          </p>
          <button className="bg-white text-black">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
