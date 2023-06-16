import { Route, Routes } from "react-router-dom";
import DynamicAddRemove from "./pages/DynamicAddRemove";
import DynamicAddRemove2 from "./pages/DynamicAddRemove2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DynamicAddRemove />} />
        <Route path="/2" element={<DynamicAddRemove2 />} />
      </Routes>
    </>
  );
}

export default App;
