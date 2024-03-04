import { Grid, Hidden } from "@mui/material";

function Edu({ eduDetails }) {
  return (
    <Grid container className="edu-block" spacing={2}>
      <Hidden mdDown>
        {eduDetails.logo ? (
          <div class="logo-container">
            <img
              src={process.env.PUBLIC_URL + `/Logos/${eduDetails.logo}`}
              alt={`${eduDetails.employer} logo`}
            />
          </div>
        ) : null}
      </Hidden>
      <div className="edu">
        <div className="edu-header">
          <a
            className="institution"
            href={`${eduDetails.url}`}
            target="_blank"
            rel="noreferrer"
            style={{ display: "table-cell" }}
          >
            <p className="institution">{eduDetails.institution}</p>
          </a>
          <p>⸻</p>
          <p className="years subtle">
            {eduDetails.startYear} - {eduDetails.endYear}
          </p>
        </div>
        <p>{eduDetails.program}</p>
        {/* <div className="text"> */}
        {/* <JobSkills jobSkills={jobDetails.skills} /> */}
        {/* <JobBullets jobBullets={jobDetails.bullets} /> */}
        {/* </div> */}
      </div>
    </Grid>
  );
}

export default Edu;
