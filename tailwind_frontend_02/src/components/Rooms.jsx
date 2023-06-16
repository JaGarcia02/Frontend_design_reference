import React from "react";

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-28 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          praesentium mollitia officia ullam dolores quibusdam inventore
          molestias non eveniet eligendi placeat deserunt libero explicabo
          facere rem aut tenetur, architecto perferendis! Aliquam vero accusamus
          quis, minima dolore, perferendis eum illum doloribus quibusdam maiores
          consequatur nostrum, deleniti incidunt autem debitis neque
          reprehenderit!
        </p>
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          src="../../public/images/Rooms/pexels-jean-van-der-meulen-1457842.jpg"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="../../public/images/Rooms/pexels-medhat-ayad-439227.jpg"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="../../public/images/Rooms/pexels-pixabay-262048.jpg"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Rooms;
