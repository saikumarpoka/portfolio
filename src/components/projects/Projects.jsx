import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="projects-container">
          <div className="row">
            <h2>WHAT I'VE DONE</h2>
            <Project />
            
          </div>
        </div>
      </section>
    </>
  );
};

const Project = () => {
  const mouseOver = () => {
    return (
      (document.getElementById("projectDiv").style.visibility = "visible"),
      (document.getElementById("projectH3").style.visibility = "visible")
    );
  };
  const mouseOut = () => {
    return (
      (document.getElementById("projectDiv").style.visibility = "hidden"),
      (document.getElementById("projectH3").style.visibility = "hidden")
    );
  };

  return (
    <>
      <div className="project" onMouseOver={mouseOver} onMouseOut={mouseOut}>
        <div id="projectDiv"></div>
        <h3 id="projectH3">VR Web Page</h3>
      </div>
    </>
  );
};

export default Projects;
