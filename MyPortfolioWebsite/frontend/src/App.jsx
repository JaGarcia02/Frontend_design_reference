import "./App.css";
import { useState, useEffect } from "react";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-screen h-scree">
      <h1 className="text-indigo-400 text-2xl">Hello</h1>
    </div>
  );
}

export default App;
