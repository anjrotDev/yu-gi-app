import React from "react";
import "./App.css";
import { MainCarousel } from "./components/Carousel/Carousel";
import { MyNavbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <MyNavbar />
      <MainCarousel />
    </>
  );
}

export default App;
