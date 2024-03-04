import ProfExperience from "./ProfExperience";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";

function Experience({ jobsArray, projectsArray, educationArray }) {
  return (
    <div id="Experience">
      <Skills />
      <Projects projectsArray={projectsArray} />
      <ProfExperience jobsArray={jobsArray} />
      <Education educationArray={educationArray} />
    </div>
  );
}

export default Experience;
