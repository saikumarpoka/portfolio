import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="nav-container" style={{position:'sticky'}}>
        <div>
          <h2
            style={{
              color: "white",
              textAlign: "center",
              padding: "5px",
              marginLeft: "5px",
            }}
          >
            SK
          </h2>
        </div>
        <ul className="d-none d-md-inline-flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#exp">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <button>Resume</button>
        </ul>
        <div className="menu-icon d-md-none">
          <i className="fa-solid fa-bars fa-xl" onClick={toggleMenu}></i>
        </div>
      </div>
      <div className={isActive ? "hidden" : ""}>
        <div className="mobile-menu d-md-none">
          <ul className="menu-list">
            <li>
              <a href="#about" onClick={toggleMenu}>About</a>
            </li>
            <li>
              <a href="#exp" onClick={toggleMenu}>Experience</a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>Contact</a>
            </li>
            <button>Resume</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
