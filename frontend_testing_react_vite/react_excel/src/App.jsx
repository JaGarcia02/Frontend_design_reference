import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ReactExcelRenderer_01 from "./pages/ReactExcelRenderer_01";
import ReactExcelRenderer_02 from "./pages/ReactExcelRenderer_02";

function App() {
  return (
    <>
      <Routes>
        <Route path="/01" element={<ReactExcelRenderer_01 />} />
        <Route path="/02" element={<ReactExcelRenderer_02 />} />
      </Routes>
    </>
  );
}

export default App;
