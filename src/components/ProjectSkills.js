import Skill from './Skill'

function ProjectSkills({ projectSkills }) {

    const skills = projectSkills.map((skill, index) => {
        return(
            <Skill
                key={index}
                skill={skill}
            />
            )
        })

    return(
        <div className="project-skills">
            {skills}
        </div>
    )
}

export default ProjectSkills;