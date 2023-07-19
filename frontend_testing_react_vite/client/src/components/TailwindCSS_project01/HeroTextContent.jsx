import React from "react";

const HeroTextContent = () => {
  return (
    <div className="flex flex-col gap-8 items-start w-[80%]">
      <h1 className="text-7xl font-bold">Wood Candy Sofa</h1>
      <p className="text-[#999999]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum cupiditate
        tempore dolorum! Fugit laborum nemo expedita possimus ullam similique
        aliquid natus saepe, consequuntur delectus dicta, eaque quibusdam,
        beatae cum cumque quae eveniet libero voluptates numquam necessitatibus
        temporibus rerum. Nam odio omnis voluptas modi cupiditate quod ipsam
        soluta? Culpa animi nam blanditiis praesentium? Iste, iure perspiciatis!
      </p>
      <strong className="taxt-2xl font-semibold">$399.00</strong>
      <button className="bg-[#FFE8A9] px-8 py-2">Buy now</button>
    </div>
  );
};

export default HeroTextContent;
