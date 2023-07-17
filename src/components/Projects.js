import ProjectBlock from './ProjectBlock';

function Projects({ projectsArray }) {

    const projects = projectsArray.map((projectDetails, index) => {
        return(
            <ProjectBlock
                key={index}
                projectDetails={projectDetails}
            />
        )
    })

    return (
        <div className="projects">
            {projects}
        </div>
    )
}

export default Projects;