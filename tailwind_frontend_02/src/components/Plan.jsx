import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Right Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="../../public/images/Plans/pexels-asad-photo-maldives-1021074.jpg"
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="../../public/images/Plans/pexels-asad-photo-maldives-3601422.jpg"
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="../../public/images/Plans/pexels-david-bartus-2825237.jpg"
          alt=""
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="../../public/images/Plans/pexels-tomáš-malík-1998439.jpg"
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="../../public/images/Plans/pexels-humphrey-muleba-1665725.jpg"
          alt=""
        />
      </div>
      {/* Left Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id impedit,
          in explicabo rerum nemo cum quae atque eum aliquid reiciendis?
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          reiciendis perspiciatis dolorum labore velit eum illum, cum hic,
          aspernatur at officiis, expedita illo! Amet exercitationem vel porro
          neque libero vitae? Omnis voluptatibus voluptates earum consectetur
          sequi eum quam ex velit culpa veritatis, deleniti voluptatem quaerat
          praesentium, consequuntur inventore hic tenetur.
        </p>
      </div>
      <div>
        <button className="border-black mr-4 hover:shadow-xl">
          Learn More
        </button>
        <button className="bg-black text-white hover:shadow-xl">
          Book Your Trip
        </button>
      </div>
    </div>
  );
};

export default Plan;
