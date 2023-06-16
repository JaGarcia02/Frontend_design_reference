import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import NewsLetter from "./components/NewsLetter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
