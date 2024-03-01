function SkillContainer({ name, url }) {
  return (
    <div className="skill-badge-container">
      <img className="skill-badge" alt={`${name}-logo`} src={url} />
    </div>
  );
}

export default SkillContainer;
