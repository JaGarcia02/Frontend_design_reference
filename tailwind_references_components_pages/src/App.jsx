import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar_Page from "./pages/Navbar/NavBar_Page";
import SideBar_Page from "./pages/Sidebar/SideBar_Page";
import Ecomerce_Page from "./pages/Ecomerce/Ecomerce_Page";
import Header from "./components/Ecomerce/Header";
import Footer from "./components/Ecomerce/Footer";
import Sidebar from "./components/Ecomerce/Sidebar";
import ProductDetails_Page from "./pages/Ecomerce/ProductDetails_Page";
import Test_Page from "./pages/Test/Test_Page";
import UserDashboard_Page from "./pages/Dashboards/UserDashboard_Page";
import AdminDashboard_Page from "./pages/Dashboards/AdminDashboard_Page";

function App() {
  return (
    <>
      {/* Basic Components */}
      <Routes>
        <Route path="/" element={<Test_Page />} />
        <Route path="/user-dashboard" element={<UserDashboard_Page />} />
        <Route path="/admin-dashboard" element={<AdminDashboard_Page />} />
      </Routes>

      {/* Ecomerece Website */}
      <div>
        <Routes>
          {/* <Header /> */}
          <Route path="/ecomerce" element={<Ecomerce_Page />} />
          <Route path="/product/:id" element={<ProductDetails_Page />} />
          {/* <Footer /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;

// https://www.youtube.com/watch?v=aMjou4yXWdU&t=403s&ab_channel=CodeAProgram

// Ecomerce https://www.youtube.com/watch?v=lGnuiAZCjuM&ab_channel=CristianMihai

// Tailwindcss Admin Dashboard https://www.youtube.com/watch?v=yQCsnQw420Y 28:21
