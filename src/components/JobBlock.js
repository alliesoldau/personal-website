import JobSkills from "./JobSkills";
import JobBullets from "./JobBullets";
import { Grid, Hidden } from "@mui/material";

function JobBlock({ jobDetails, profExpRef }) {
  let refName = null;
  if (jobDetails.employer === "Flatiron School") {
    refName = profExpRef;
  }
  return (
    <Grid container className="job-block" ref={refName}>
      <Grid item xs={12} sm={9} className="job">
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
      </Grid>
      <Hidden smDown>
        <Grid item xs={3}>
          {/* images */}
        </Grid>
      </Hidden>
      <Grid container spacing={2} id="job-blurb">
        <Grid item xs={12} sm={9} className="text">
          <JobSkills jobSkills={jobDetails.skills} />
          <JobBullets jobBullets={jobDetails.bullets} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default JobBlock;
