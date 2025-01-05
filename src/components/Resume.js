import React from "react";
import resume from "../assets/newResume.jpg";

const Resume = () => {
  return (
    <section id="resume" class="resume">
      <img src={resume} alt="Resume" class="resume-img" />
      <div class="resume-text">
        <h1>Resume</h1>
        <p>
          You can view my resume{" "}
          <a class="btn" href="/Surya_B.pdf" download="SuryaResume.jpg">
            Download
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Resume;
