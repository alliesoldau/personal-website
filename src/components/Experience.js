import ProfExperience from "./ProfExperience";
import Projects from "./Projects";
import Resume from "../images/Resume.pdf";
import C from "../images/C.png";
import CSS from "../images/CSS.png";
import Git from "../images/Git.png";
import HTML5 from "../images/HTML5.png";
import JS from "../images/JS.png";
import PostgreSQL from "../images/PostgreSQL.png";
import Python from "../images/Python.png";
import Rails from "../images/Rails.png";
import ReactJS from "../images/React.png";
import Ruby from "../images/Ruby.png";
import SQL from "../images/SQL.png";

function Experience({
  jobsArray,
  projectsArray,
  projectsRef,
  skillsRef,
  profExpRef,
}) {
  return (
    <div className="Experience">
      <h2>Projects</h2>
      <Projects projectsArray={projectsArray} projectsRef={projectsRef} />
      <h2>Skills</h2>
      <div className="skills-container" ref={skillsRef}>
        <img className="skill-badge" src={ReactJS} />
        <img className="skill-badge" src={JS} />
        <img className="skill-badge" src={HTML5} />
        <img className="skill-badge" src={CSS} />
        <img className="skill-badge" src={Git} />
        <img className="skill-badge" src={PostgreSQL} />
        <img className="skill-badge" src={Rails} />
        <img className="skill-badge" src={Ruby} />
        <img className="skill-badge" src={SQL} />
        <img className="skill-badge" src={Python} />
        <img className="skill-badge" src={C} />
      </div>
      <h2>Professional Experience</h2>
      <ProfExperience jobsArray={jobsArray} profExpRef={profExpRef} />
      <div className="resume">
        <a className="resume" href={Resume} target="_blank">
          View full resume
        </a>
      </div>
    </div>
  );
}

export default Experience;
