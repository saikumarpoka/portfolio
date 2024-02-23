import React from "react";
import "./resume.css";
import resume from "./Resume.pdf";

const Resume = () => {
  return (
    <>
      <section id="resume">
        <div className="resume-container">
          <div>
            <h2>CHECK OUT MY RESUME!</h2>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <button>Grab A Copy</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
