import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar_Page from "./pages/Navbar/NavBar_Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar_Page />} />
      </Routes>
    </>
  );
}

export default App;
