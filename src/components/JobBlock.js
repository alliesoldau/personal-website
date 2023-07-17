import JobSkills from './JobSkills';
import JobBullets from './JobBullets';

function JobBlock({ jobDetails }) {

    return(
        <div className="job-block" >
            <div className="job">
                <p className="position">{jobDetails.position}</p>
                <p>⸻</p>
                <a className="employeer" href={`${jobDetails.employerLink}`} target="_blank" style={{display: "table-cell"}}>
                    <p>{jobDetails.employer}</p>
                </a>
            </div>
            <div id='job-blurb' >
                <JobSkills jobSkills={jobDetails.skills} />
                <JobBullets jobBullets={jobDetails.bullets}/>
            </div>
        </div>
    )
}

export default JobBlock;