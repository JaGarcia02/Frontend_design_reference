import { useState } from "react";
import "./App.css";
import LoginPage1 from "./components/LoginPage1";
import Login2 from "./components/Login2";
import Login3 from "./components/Login3";

function App() {
  return (
    <div>
      <LoginPage1 />
      <Login2 />
      <Login3 />
    </div>
  );
}

export default App;
