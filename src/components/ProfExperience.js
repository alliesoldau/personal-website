import JobBlock from "./JobBlock";

function ProfExperience({ jobsArray, profExpRef }) {
  const jobs = jobsArray.map((jobDetails, index) => {
    return (
      <JobBlock key={index} jobDetails={jobDetails} profExpRef={profExpRef} />
    );
  });

  return <div className="jobs">{jobs}</div>;
}

export default ProfExperience;
