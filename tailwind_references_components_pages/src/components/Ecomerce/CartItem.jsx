import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../../contexts/Ecomerce/CartContext";
import { FiTrash2 } from "react-icons/fi";

const CartItem = ({ item }) => {
  const { removeFromCart, decreaseAmount, increaseAmount } =
    useContext(CartContext);
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title */}
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            /
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font font-medium">
              {/* Remove */}
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer "
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                {/* Add */}
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">
              $ {price}
            </div>
            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

// import React from "react";
// import { Link } from "react-router-dom";

// const CartItem = ({ item }) => {
//   const { id, title, image, price, amount } = item;
//   return (
//     <div className="flex">
//       <div className="w-full min-h-[150px] flex items-center gap-x-4">
//         {/* image */}
//         <Link to={`/product/${id}`}>
//           <img className="max-w-[80px]" src={image} alt="" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CartItem;
