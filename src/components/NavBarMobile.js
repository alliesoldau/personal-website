// OffCanvasNav.js

import React, { useState } from "react";

const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="off-canvas-nav">
      <div className="mobile-top-bar">
        <a className="name" href="#HomePage">
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
