import JobSkills from "./JobSkills";
import JobBullets from "./JobBullets";

function JobBlock({ jobDetails, profExpRef }) {
  let refName = null;
  if (jobDetails.employer === "Flatiron School") {
    refName = profExpRef;
  }
  console.log(jobDetails);
  return (
    <div className="job-block" ref={refName}>
      <div className="job">
        <p className="position">{jobDetails.position}</p>
        <p>⸻</p>
        <a
          className="employeer"
          href={`${jobDetails.employerLink}`}
          target="_blank"
          style={{ display: "table-cell" }}
        >
          <p>{jobDetails.employer}</p>
        </a>
      </div>
      <div id="job-blurb">
        <JobSkills jobSkills={jobDetails.skills} />
        <JobBullets jobBullets={jobDetails.bullets} />
      </div>
    </div>
  );
}

export default JobBlock;
