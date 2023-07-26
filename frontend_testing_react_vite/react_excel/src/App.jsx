import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ReactExcelRenderer_01 from "./pages/ReactExcelRenderer_01";

function App() {
  return (
    <>
      <Routes>
        <Route path="/01" element={<ReactExcelRenderer_01 />} />
      </Routes>
    </>
  );
}

export default App;
