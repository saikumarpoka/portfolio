import React from "react";
import "./About.css";
import myImage from "./myphoto.jpg";

const About = () => {
  return (
    <>
      <div className="about-container"  id="about">
        <h1>A LITTLE BIT ABOUT ME</h1>
        <img src={myImage} alt="aboutimg" />
        <p>
          Hey! My name is Sai Kumar and I'm learning{" "}
          <strong>web development</strong> with a passion for{" "}
          <strong>front end</strong> development. I'm an M.Sc. graduate in the
          stream of Mathematics from{" "}
          <strong>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.andhrauniversity.edu.in/college/college-of-science-and-technology/science-departments.html"
            >
              Andhra University
            </a>
          </strong>
          . I aspire toward a career that will allow me to channel my
          knowledge through crafting web applications, also provides an
          opportunity to learn new skills and engaging experiences.
        </p>
        
      </div>
    </>
  );
};

export default About;
