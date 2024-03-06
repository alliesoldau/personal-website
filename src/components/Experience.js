import ProfExperience from "./ProfExperience";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";

function Experience({ jobsArray, projectsArray, educationArray }) {
  return (
    <div id="Experience">
      <Skills />
      <ProfExperience jobsArray={jobsArray} />
      <Education educationArray={educationArray} />
      <Projects projectsArray={projectsArray} />
    </div>
  );
}

export default Experience;
