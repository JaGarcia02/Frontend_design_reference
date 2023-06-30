import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./pages/Login";
import ChangeColor from "./components/ChangeColor";

function App() {
  return (
    <>
      <Profile />
      <Login />
      <ChangeColor />
    </>
  );
}

export default App;
