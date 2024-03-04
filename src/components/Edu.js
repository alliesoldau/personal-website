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
          <p>{eduDetails.program}</p>
          <p className="divider">⸻</p>
          <a
            className="institution"
            href={`${eduDetails.url}`}
            target="_blank"
            rel="noreferrer"
            style={{ display: "table-cell" }}
          >
            <p className="institution">{eduDetails.institution}</p>
          </a>
          {/* <p className="years">
            {eduDetails.startYear} - {eduDetails.endYear}
          </p> */}
        </div>
        <p className="edu-blurb subtle">{eduDetails.blurb}</p>
      </div>
    </Grid>
  );
}

export default Edu;
