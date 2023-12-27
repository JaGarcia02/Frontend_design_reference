import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../contexts/Ecomerce/CartContext";
import { ProductContext } from "../../contexts/Ecomerce/ProductContext";
import Header from "../../components/Ecomerce/Header";
import Footer from "../../components/Ecomerce/Footer";
import Hero from "../../components/Ecomerce/Hero";

const ProductDetails_Page = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  const { title, price, description, image } = product;

  return (
    <>
      <div>
        <section className="pt-32 pb-12 xl:py-32 h-screen flex items-center">
          <div className="container mx-auto">
            {/* Img Wrapper */}
            <div className="flex flex-col xl:flex-row items-center">
              {/* Image */}
              <div className="flex flex-1 justify-center items-center mb-8 xl:mb-0">
                <img className="max-w-[200px] xl:max-w-sm" src={image} alt="" />
              </div>
              <div className="flex-1 text-center xl:text-left">
                <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto xl:mx-0">
                  {title}
                </h1>
                <div className="text-xl text-red-500 font-medium mb-6">
                  $ {price}
                </div>
                <p className="mb-8">{description}</p>
                <button
                  onClick={() => addToCart(product.id, product)}
                  className="bg-primary py-4 px-8 text-white"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetails_Page;
