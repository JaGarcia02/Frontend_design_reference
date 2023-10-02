import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Test01 from "./pages/Test_Page/Test01";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Test01 />} />
      </Routes>
    </>
  );
}

export default App;
