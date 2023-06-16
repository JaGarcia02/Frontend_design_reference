import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainModal from "./pages/MainModal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainModal />} />
      </Routes>
    </>
  );
}

export default App;
