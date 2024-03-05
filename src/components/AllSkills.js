// Import images for MESkills
import Solidworks from "../images/MESkills/Solidworks.png";
import MATLAB from "../images/MESkills/MATLAB.png";
import Minitab from "../images/MESkills/Minitab.png";
import Arduino from "../images/MESkills/Arduino.png";

// Import images for PMSkills
import Figma from "../images/PMSkills/Figma.png";
import Smartsheet from "../images/PMSkills/Smartsheet.png";
import Visio from "../images/PMSkills/Visio.png";
import Asana from "../images/PMSkills/Asana.png";

// Import images for TechnicalSkills
import C from "../images/TechnicalSkills/C.png";
import CSS from "../images/TechnicalSkills/CSS.png";
import Git from "../images/TechnicalSkills/Git.png";
import HTML5 from "../images/TechnicalSkills/HTML5.png";
import JS from "../images/TechnicalSkills/JS.png";
import PostgreSQL from "../images/TechnicalSkills/PostgreSQL.png";
import Python from "../images/TechnicalSkills/Python.png";
import Rails from "../images/TechnicalSkills/Rails.png";
import ReactJS from "../images/TechnicalSkills/React.png";
import Ruby from "../images/TechnicalSkills/Ruby.png";
import SQL from "../images/TechnicalSkills/SQL.png";
import PHP from "../images/TechnicalSkills/PHP.png";
import WP from "../images/TechnicalSkills/WP.png";

// Create object for MESkills
const MESkills = {
  skillsText: [
    "Rapid Prototyping",
    "CAD",
    "Finite Element Analysis",
    "GD&T",
    "SOP Development",
    "Product Data Management",
  ],
  skillsLogos: [
    { name: "Solidworks", url: Solidworks },
    { name: "MATLAB", url: MATLAB },
    { name: "Minitab", url: Minitab },
    { name: "Arduino", url: Arduino },
  ],
};

// Create object for PMSkills
const PMSkills = {
  skillsText: [
    "Agile Methodology",
    "Cross-functional Collaboration",
    "Resource Management",
    "Documentation Systems Development",
  ],
  skillsLogos: [
    { name: "Figma", url: Figma },
    { name: "Smartsheet", url: Smartsheet },
    { name: "Visio", url: Visio },
    { name: "Asana", url: Asana },
  ],
};

// Create object for TechnicalSkills
const TechnicalSkills = {
  skillsText: [
    "RESTful API Development",
    "Cross-platform Development",
    "DevOps Practices",
    "Scalable Systems",
    "Impactful Optimizations",
    "Source Control Management",
  ],
  skillsLogos: [
    { name: "JS", url: JS },
    { name: "HTML5", url: HTML5 },
    { name: "CSS", url: CSS },
    { name: "ReactJS", url: ReactJS },
    { name: "Python", url: Python },
    { name: "C", url: C },
    { name: "PostgreSQL", url: PostgreSQL },
    { name: "Rails", url: Rails },
    { name: "Ruby", url: Ruby },
    { name: "SQL", url: SQL },
    { name: "PHP", url: PHP },
    { name: "WP", url: WP },
    { name: "Git", url: Git },
  ],
};

// Combine MESkills, PMSkills, and TechnicalSkills into a single object
const allSkills = {
  MESkills: MESkills,
  PMSkills: PMSkills,
  TechnicalSkills: TechnicalSkills,
  //   key: "value",
};

export default allSkills;
