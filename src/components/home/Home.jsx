import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="intro" className="container-fluid background d-flex flex-column justify-content-center">
      <div >
        <h1 className="name">HI, I'M SAI KUMAR</h1>
        <p className="occupation">FrontEnd Web Developer</p>
      </div>
      <a href="#about">
        <i className="fa fa-angle-down" aria-hidden="true"></i>
      </a>
    </section>
  );
};

export default Home;
