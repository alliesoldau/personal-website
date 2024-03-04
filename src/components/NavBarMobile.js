// OffCanvasNav.js

import React, { useState } from "react";

const NavBarMobile = ({ isOpen, setIsOpen }) => {
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="off-canvas-nav">
      <div className="mobile-top-bar">
        <a className="name" href="#HomePage" onClick={closeNav}>
          Allie Soldau
        </a>
        <div className="menu-toggle" onClick={toggleNav}>
          ☰
        </div>
      </div>
      <nav className={isOpen ? "open" : ""}>
        <div className="mobile-navbar-container">
          <a href="#AboutMe" className="navlink" onClick={toggleNav}>
            About Me
          </a>
          <a href="#Skills" className="navlink" onClick={toggleNav}>
            Skills
          </a>
          <a href="#Projects" className="navlink" onClick={toggleNav}>
            Projects
          </a>
          <a href="#ProfExperience" className="navlink" onClick={toggleNav}>
            Experience
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBarMobile;
