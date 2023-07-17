import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Recipe_Page from "./pages/Recipe_Page";
import DynamicAddRemove_Page from "./pages/DynamicAddRemove_Page";
import DnDTodo_Page from "./pages/DnDTodo_Page";
import IdleTime from "./pages/IdleTime";

function App() {
  return (
    <>
      <Routes>
        <Route path="/test" element={<Recipe_Page />} />
        <Route path="/test2" element={<DynamicAddRemove_Page />} />
        <Route path="/test3" element={<DnDTodo_Page />} />
        <Route path="/test4" element={<IdleTime />} />
      </Routes>
    </>
  );
}

export default App;
