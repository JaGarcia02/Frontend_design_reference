import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Recipe_Page from "./pages/Recipe_Page";
import DynamicAddRemove_Page from "./pages/DynamicAddRemove_Page";
import DnDTodo_Page from "./pages/DnDTodo_Page";
import IdleTime from "./pages/IdleTime";
import TailwindCSS_project01 from "./pages/TailwindCSS_project01";
import TailwindCSS_project02 from "./pages/TailwindCSS_project02";
import Timekeeping from "./pages/Timekeeping";
import { Test_Page } from "./pages/Test_Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Timekeeping />} />
        <Route path="/honey_page" element={<TailwindCSS_project02 />} />
        <Route path="/project01" element={<TailwindCSS_project01 />} />
        <Route path="/test" element={<Recipe_Page />} />
        <Route path="/test2" element={<DynamicAddRemove_Page />} />
        <Route path="/test3" element={<DnDTodo_Page />} />
        <Route path="/test4" element={<IdleTime />} />
        <Route path="/test5" element={<Test_Page />} />
      </Routes>
    </>
  );
}

export default App;

// https://www.youtube.com/watch?v=K3L8J0DbuT8&ab_channel=GorkCoder
