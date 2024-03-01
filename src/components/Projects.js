import ProjectBlock from "./ProjectBlock";
import { Grid } from "@mui/material";

function Projects({ projectsArray }) {
  const projects = projectsArray.map((projectDetails, index) => {
    return <ProjectBlock key={index} projectDetails={projectDetails} />;
  });

  return (
    <div id="Projects">
      <h4>Projects</h4>
      <Grid container className="projects">
        {projects}
      </Grid>
    </div>
  );
}

export default Projects;
