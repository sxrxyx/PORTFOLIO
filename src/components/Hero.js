import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section id="hero" class="hero">
      <div class="hero-content">
        <h1>
          Hi, <br />
          I'm <span class="highlight">MS</span> Prakash
        </h1>
        <p>I'm a Full-stack developer and Designer</p>
      </div>
      <img class="hero-img" src={hero} alt="Hero Image" />
    </section>
  );
};

export default Hero;
