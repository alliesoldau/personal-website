import ProjectSkills from "./ProjectSkills";
import { Grid } from "@mui/material";

function ProjectBlock({ projectDetails, projectsRef }) {
  let refName = null;
  if (projectDetails.title === "CampNYS") {
    refName = projectsRef;
  }
  return (
    <Grid item xs={12} sm={6} md={6}>
      <div className="project" ref={refName}>
        <p className="project-title">
          <a
            href={`${projectDetails.GitHubLink}`}
            target="_blank"
            rel="noreferrer"
          >
            {projectDetails.title}
          </a>{" "}
        </p>
        <p className="project-desc">{projectDetails.description}</p>
        <div className="youtube">
          <div className="video">
            <iframe
              src={`${projectDetails.YouTubeLink}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write"
              allowFullScreen
              title="video"
            />
          </div>
        </div>
        <ProjectSkills projectSkills={projectDetails.skills} />
      </div>
    </Grid>
  );
}

export default ProjectBlock;
