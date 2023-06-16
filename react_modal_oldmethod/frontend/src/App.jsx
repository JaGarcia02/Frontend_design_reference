import "./App.css";
import TestPage from "./pages/TestPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;
