import ProjectBlock from "./ProjectBlock";

function Projects({ projectsArray, projectsRef }) {
  const projects = projectsArray.map((projectDetails, index) => {
    return (
      <ProjectBlock
        key={index}
        projectDetails={projectDetails}
        projectsRef={projectsRef}
      />
    );
  });

  return <div className="projects">{projects}</div>;
}

export default Projects;
