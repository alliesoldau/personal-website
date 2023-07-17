import JobBlock from './JobBlock';

function ProfExperience({ jobsArray }) {

    const jobs = jobsArray.map((jobDetails, index) => {
        return(
            <JobBlock
                key={index}
                jobDetails={jobDetails}
            />
        )
    })

    return (
        <div className="jobs">
            {jobs}
        </div>
    )
}

export default ProfExperience;