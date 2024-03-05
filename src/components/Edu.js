import { Grid, Hidden } from "@mui/material";

function Edu({ eduDetails }) {
  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="edu-contents">
      {/* <Hidden mdDown> */}
      {eduDetails.logo ? (
        <div class="logo-container">
          <img
            src={process.env.PUBLIC_URL + `/Logos/${eduDetails.logo}`}
            alt={`${eduDetails.employer} logo`}
          />
        </div>
      ) : null}
      {/* </Hidden> */}
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
          <p className="program">{eduDetails.program}</p>
          <p className="edu-blurb subtle">{eduDetails.blurb}</p>
          <p className="years subtle">
            {eduDetails.startYear} - {eduDetails.endYear}
          </p>
        </div>
      </div>
    </Grid>
  );
}

export default Edu;
