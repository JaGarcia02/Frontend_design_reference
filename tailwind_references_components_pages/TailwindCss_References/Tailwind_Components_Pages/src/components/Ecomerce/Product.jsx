import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../../contexts/Ecomerce/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border borer-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition-all">
        <div className="w-full h-full flex justify-center items-center">
          {/* Image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all">
            {/* Button */}
            <button onClick={() => addToCart(id, product)}>
              <div className="flex justify-center items-center text-white w-12 h-12">
                <BsPlus className="text-3xl bg-red-500" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="test-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold ">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
