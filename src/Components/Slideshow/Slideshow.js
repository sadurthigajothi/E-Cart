import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import mens_banner from "../assets/Mens.png";
import womens_banner from "../assets/Womens.png";
import kids_banner from "../assets/Kids.png";

const Slider = () => {
  const images = [mens_banner, womens_banner, kids_banner];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="slider">
      <img src={images[index]} alt="slide" className="slide-img" />
    </div>
  );
};

export default Slider;
