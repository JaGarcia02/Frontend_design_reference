import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Tutorial1 from "./pages/tutorial1";
import Sx from "./pages/sx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/tutorial1" element={<Tutorial1 />} />
        <Route path="/tutorial2" element={<Sx />} />
      </Routes>
    </>
  );
}

export default App;
