import React from "react";
import image from "../assets/image.jpg";

const Hero = () => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="welcome">VELVET 
        BEAUTY</div>
    </div>
  );
};

export default Hero;
