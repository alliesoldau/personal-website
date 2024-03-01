import JobBlock from "./JobBlock";

function ProfExperience({ jobsArray, profExpRef }) {
  const jobs = jobsArray.map((jobDetails, index) => {
    return (
      <JobBlock key={index} jobDetails={jobDetails} profExpRef={profExpRef} />
    );
  });
  return (
    <div id="ProfExperience">
      <h4>Professional Experience</h4>
      <div className="jobs">{jobs}</div>
    </div>
  );
}

export default ProfExperience;
