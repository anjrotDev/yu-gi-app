import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

export const MainCarousel = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/yugioh.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/yugioh2.jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/yugioh3.jpeg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
