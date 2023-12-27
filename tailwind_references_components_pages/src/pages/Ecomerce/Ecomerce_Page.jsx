import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/Ecomerce/ProductContext";
import Product from "../../components/Ecomerce/Product";
import Hero from "../../components/Ecomerce/Hero";
import Header from "../../components/Ecomerce/Header";
import Sidebar from "../../components/Ecomerce/Sidebar";
import Footer from "../../components/Ecomerce/Footer";

const Ecomerce_Page = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <>
      <div>
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:p-[25px] lg:p-[35px] gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {filteredProducts.map((product) => {
                return (
                  <>
                    <Product product={product} key={product.id} />
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Ecomerce_Page;
