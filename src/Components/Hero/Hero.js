import React from "react";
import heroImg from "../assets/shopping-girl.png";

const Hero = ({ setSearchTerm }) => {
  const handleSearch = (e) => {
    if (setSearchTerm) {
      setSearchTerm(e.target.value);
    }
  };

  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Trending Now!</h2>

        <div className="hero-hand-icon">
          <p>Modern</p>
          <p>Collections</p>
          <p>for everyone</p>
        </div>

        <div className="hero-btn">
          <input
            type="text"
            placeholder="Search Collection"
            onChange={handleSearch}
          />
          <i className="fa-solid fa-search search-icon"></i>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImg} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
