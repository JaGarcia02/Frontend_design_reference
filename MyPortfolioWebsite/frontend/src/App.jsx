import "./App.css";
import { useState, useEffect } from "react";
import Aos from "aos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Service from "./components/UI/Service";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Service />
      </main>
      <Footer />
    </>
  );
}

export default App;

// https://www.youtube.com/watch?v=FjBJJepT6Ts&list=PLaaIOhrtglx7pv3XDtw5kCOgWM7xGRqdf&index=4&t=288s
// 53:47
