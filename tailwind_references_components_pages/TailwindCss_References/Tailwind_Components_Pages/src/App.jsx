import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar_Page from "./pages/Navbar/NavBar_Page";
import SideBar_Page from "./pages/Sidebar/SideBar_Page";
import Ecomerce_Page from "./pages/Ecomerce/Ecomerce_Page";
import Header from "./components/Ecomerce/Header";
import Footer from "./components/Ecomerce/Footer";
import Sidebar from "./components/Ecomerce/Sidebar";
import ProductDetails_Page from "./pages/Ecomerce/ProductDetails_Page";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<NavBar_Page />} />
        <Route path="/1" element={<SideBar_Page />} />
        <Route path="/2" element={<Ecomerce_Page />} />
        <Route path="/product/:id" element={<ProductDetails_Page />} />
      </Routes>
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;

// https://www.youtube.com/watch?v=aMjou4yXWdU&t=403s&ab_channel=CodeAProgram

// Ecomerce https://www.youtube.com/watch?v=lGnuiAZCjuM&ab_channel=CristianMihai
