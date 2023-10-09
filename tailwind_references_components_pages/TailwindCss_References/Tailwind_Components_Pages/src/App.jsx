import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar_Page from "./pages/Navbar/NavBar_Page";
import SideBar_Page from "./pages/Sidebar/SideBar_Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar_Page />} />
        <Route path="/1" element={<SideBar_Page />} />
      </Routes>
    </>
  );
}

export default App;

// https://www.youtube.com/watch?v=aMjou4yXWdU&t=403s&ab_channel=CodeAProgram
