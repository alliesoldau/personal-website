import ProjectSkills from "./ProjectSkills";

function ProjectBlock({ projectDetails, projectsRef }) {
  let refName = null;
  if (projectDetails.title === "CampNYS") {
    refName = projectsRef;
  }
  return (
    <div className="project" ref={refName}>
      <p className="project-title">
        <a href={`${projectDetails.GitHubLink}`} target="_blank">
          {projectDetails.title}
        </a>{" "}
      </p>
      <p className="project-desc">{projectDetails.description}</p>
      <iframe
        src={`${projectDetails.YouTubeLink}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write"
        allowfullscreen
        title="video"
      />
      <ProjectSkills projectSkills={projectDetails.skills} />
    </div>
  );
}

export default ProjectBlock;
