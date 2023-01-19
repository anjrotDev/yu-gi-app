import React from "react";
import "./App.css";
import { CardsViews } from "./components/CardsViews/CardsViews";
import { MainCarousel } from "./components/Carousel/Carousel";
import { MyNavbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <MyNavbar />
      <MainCarousel />
      <CardsViews />
    </>
  );
}

export default App;
