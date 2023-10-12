import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { SidebarContext } from "../../contexts/Ecomerce/SidebarContext";
import { useContext } from "react";
import { CartContext } from "../../contexts/Ecomerce/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose, setIsOpen } = useContext(SidebarContext);
  const { cart, setCart, clearCart, total } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[30px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b  ">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      {/* Side bar bottom */}
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className=" flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span> ${" "}
            {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
// import React from "react";
// import { Link } from "react-router-dom";
// import { IoMdArrowForward } from "react-icons/io";
// import { FiTrash2 } from "react-icons/fi";
// import CartItem from "./CartItem";
// import { SidebarContext } from "../../contexts/Ecomerce/SidebarContext";
// import { useContext } from "react";
// import { CartContext } from "../../contexts/Ecomerce/CartContext";

// const Sidebar = () => {
//   const { isOpen, handleClose, setIsOpen } = useContext(SidebarContext);
//   const { cart, setCart } = useContext(CartContext);
//   return (
//     <div
//       className={`${
//         isOpen ? "right-0" : "-right-full"
//       } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[30px]`}
//     >
//       <div className="flex justify-between items-center py-6 border-b">
//         <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
//         <div
//           onClick={handleClose}
//           className="cursor-pointer w-8 h-8 flex justify-center items-center"
//         >
//           <IoMdArrowForward className="text-2xl" />
//         </div>
//       </div>
//       <div>
//         {cart.map((item) => {
//           return <CartItem item={item} key={item.id} />;
//         })}
//       </div>

//     </div>
//   );
// };

// export default Sidebar;
