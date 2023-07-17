import Skill from './Skill'

function JobSkills({ jobSkills }) {

    const skills = jobSkills.map((skill, index) => {
        return(
            <Skill
                key={index}
                skill={skill}
            />
            )
        })

    return(
        <div className="job-skills">
            {skills}
        </div>
    )
}

export default JobSkills;