import JobSkills from "./JobSkills";
import JobBullets from "./JobBullets";
import { Grid, Hidden } from "@mui/material";

function JobBlock({ jobDetails, profExpRef }) {
  let refName = null;
  
  if (jobDetails.employer === "Flatiron School") {
    refName = profExpRef;
  }
  return (
    <Grid container className="job-block" ref={refName} spacing={2}>
      <Hidden mdDown>
        {jobDetails.logo ? (
          <div class="logo-container">
            <img
              src={process.env.PUBLIC_URL + `/Logos/${jobDetails.logo}`}
              alt={`${jobDetails.employer} logo`}
            />
          </div>
        ) : null}
      </Hidden>
      <div className="job">
        <div className="job-header">
          <p className="position">{jobDetails.position}</p>
          <p>⸻</p>
          <a
            className="employeer"
            href={`${jobDetails.employerLink}`}
            target="_blank"
            rel="noreferrer"
            style={{ display: "table-cell" }}
          >
            <p>{jobDetails.employer}</p>
          </a>
        </div>
        <div className="text">
          <JobSkills jobSkills={jobDetails.skills} />
          <JobBullets jobBullets={jobDetails.bullets} />
        </div>
      </div>
    </Grid>
  );
}

export default JobBlock;
