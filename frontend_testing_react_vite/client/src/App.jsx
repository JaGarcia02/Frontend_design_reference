import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Recipe_Page from "./pages/Recipe_Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/test" element={<Recipe_Page />} />
      </Routes>
    </>
  );
}

export default App;
