import React from "react";
import "./exp.css";
import html5 from "./images/HTML5logo.png";
import css3 from "./images/CSS3logo.png";
import js from "./images/JavaScript-logo.png";
import python from "./images/python_logo.jpg";
import bootstrap from "./images/Bootstrap_logo.png";
import react from "./images/React-logo.png";

const Experience = () => {

  const styles = {
    html: {
     maxWidth: "125px",
    },
    css: {
      maxWidth:'90px'
    },
    js: {
      maxWidth:'95px'
    },
    python: {
      maxWidth:'120px', height:'120px'
    },
    bootstrap: {
      maxWidth:'110px'
    },
    react: {
      height:'110px', maxWidth:'125px'
    }
  }

  return (
    <>
      <div id="exp" className="exp-container my-5 my-md-none">
        <h1>Experience</h1>
        <p>
          I've been learning web developmment with a passion, and I'm
          always eager to
          <br /> learn more in this fast paced industry.
        </p>
        <div className="skill-container mx-auto">
          <div className="row">
            <h3 className="mx-auto">SOME TECHNOLOGIES I'M FAMILIAR WITH:</h3>
            <IconContainer imgSrc ={html5} title="HTML5" styling = {styles.html}/>
            <IconContainer imgSrc ={css3} title="css3" styling = {styles.css}/>
            <IconContainer imgSrc ={js} title="javascript" styling = {styles.js}/>
            <IconContainer imgSrc ={python} title="python" styling = {styles.python}/>
            <IconContainer imgSrc ={bootstrap} title="bootstrap" styling = {styles.bootstrap}/>
            <IconContainer imgSrc ={react} title="react" styling = {styles.react}/>
          </div>
        </div>
      </div>
    </>
  );
};

const IconContainer = ({imgSrc, styling, title}) => {

  return (
    <>
      <div className="col-6 col-md-4">
        <img src={imgSrc} alt={title} style={styling}></img>
      </div>
    </>
  );
};

export default Experience;
