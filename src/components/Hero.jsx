import React from "react";
import image from "../assets/image.jpg";
import HeroPost from "../components/HeroPost";

const Hero = () => {
  return (
    <>
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div>
          <div className="welcome">VELVET BEAUTY</div>
          <div className="writings">
            <p>The latest trends, the boldest looks, all in one place</p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#FAE3D9", padding: "20px", textAlign: "center" }}>
        <p className="ChooseProduct">Choose your Products</p>
      </div>
      <div>
        <HeroPost />
      </div>
    </>
  );
};

export default Hero;
