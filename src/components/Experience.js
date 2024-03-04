import ProfExperience from "./ProfExperience";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "../images/Resume.pdf";

function Experience({ jobsArray, projectsArray }) {
  return (
    <div id="Experience">
      <Skills />
      <Projects projectsArray={projectsArray} />
      <ProfExperience jobsArray={jobsArray} />
      <div className="resume">
        <a className="resume" href={Resume} target="_blank" rel="noreferrer">
          Open resume
        </a>
      </div>
    </div>
  );
}

export default Experience;
