import React from "react";
import about from "../assets/about.png";

const About = () => {
  return (
    <section id="about" class="about">
      <img class="about-img" src={about} alt="About Me" />
      <div class="about-text">
        <h1>About Me</h1>
        <p>Hi, My name is Surya Prakash M. I am a Full stack web developer.</p>
        <p>I am proficient in Frontend skills like React.js, Css3.</p>
        <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose.</p>
      </div>
    </section>
  );
};

export default About;
