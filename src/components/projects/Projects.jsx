import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div id="projects">
        <div className="projects-container container-fluid">
          <div className="row">
            <h1>My Projects</h1>
            <div className="project1 col-12 col-md-6 col-lg-4 mb-3 p-5 p-md-3">
              <p></p>
              <a style={{ textDecoration: "none" }} href="https://github.com/saikumarpoka/vr">
                <h2>Virtual Reality</h2>
              </a>
            </div>
            <div className="project2 col-12 col-md-6 col-lg-4 mb-3 p-5 p-md-3">
              <p></p>
              <a style={{ textDecoration: "none" }} href="https://github.com/saikumarpoka/Todo">
                <h2>Todo</h2>
              </a>
            </div>
            <div className="project3 col-12 col-md-6 col-lg-4 mb-3 p-5 p-md-3">
              <p></p>
              <a style={{ textDecoration: "none" }} href="https://github.com/saikumarpoka/Guess-Number">
                <h2>Guess Number</h2>
              </a>
            </div>
            <div className="project4 col-12 col-md-6 col-lg-4 mb-3 p-5 p-md-3">
              <p></p>
              <a
                href="https://github.com/saikumarpoka/drum-kit"
                style={{ textDecoration: "none" }}
              >
                <h2>Drum Kit</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// const Project = () => {
//   // const mouseOver = () => {
//   //   return (
//   //     (document.getElementById("projectDiv").style.visibility = "visible"),
//   //     (document.getElementById("projectH3").style.visibility = "visible")
//   //   );
//   // };
//   // const mouseOut = () => {
//   //   return (
//   //     (document.getElementById("projectDiv").style.visibility = "hidden"),
//   //     (document.getElementById("projectH3").style.visibility = "hidden")
//   //   );
//   // };

//   return (
//     <>
//       <div className="project">
//         <div className="project-shadow"></div>
//         <h3 className="project-name">Virtual Reality</h3>
//       </div>
//     </>
//   );
// };

export default Projects;
