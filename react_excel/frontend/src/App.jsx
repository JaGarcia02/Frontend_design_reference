import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ParseExcel from "./components/ParseExcel";
import { React } from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excel" element={<ParseExcel />} />
      </Routes>
    </>
  );
}

export default App;
