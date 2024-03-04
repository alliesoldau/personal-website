import Edu from "./Edu";
import { Grid } from "@mui/material";

function Education({ educationArray }) {
  const education = educationArray.map((eduDetails, index) => {
    return <Edu key={index} eduDetails={eduDetails} />;
  });
  return (
    <div id="Education">
      <h4>Education</h4>
      <div className="education">{education}</div>
    </div>
  );
}

export default Education;
