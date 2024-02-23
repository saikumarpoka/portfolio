import React from "react";
import "./About.css";
import myImage from "./myphoto.jpg";

const About = () => {
  return (
    <>
      <div className="about-container" id="about">
        <h1>A LITTLE BIT ABOUT ME</h1>
        <img src={myImage} alt="aboutimg" />
        <p>
          Hello there! I am Sai Kumar, a dedicated learner of{" "}
          <strong>web development</strong> with a strong inclination towards{" "}
          <strong>front end</strong> development. I hold a postgraduate degree
          in Mathematics from{" "}
          <strong>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.andhrauniversity.edu.in/college/college-of-science-and-technology/science-departments.html"
            >
              Andhra University
            </a>
          </strong>
          . My ultimate goal is to pursue a career where I can utilize my
          expertise in creating web applications, while also continuously
          expanding my skill set and engaging in enriching experiences.
        </p>
      </div>
    </>
  );
};

export default About;
