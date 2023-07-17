import JobBlock from './JobBlock';

function ProfExperience() {

    const jobs = jobsArray.map((jobDetails, index) => {
        return(
            <JobBlock
                key={index}
                jobDetails={jobsArray.jobDetails}
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