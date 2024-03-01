import allSkills from "./AllSkills";
import SkillContainer from "./SkillContainer";
import SkillList from "./SkillList";

function TechnicalSkills({ activeNavItem }) {
  const skillsLogos = allSkills.TechnicalSkills.skillsLogos;
  const skillsText = allSkills.TechnicalSkills.skillsText;

  const skillsList = skillsText.map((skill) => (
    <SkillList key={skill} skill={skill} />
  ));
  const skillBadges = skillsLogos.map((skill) => (
    <SkillContainer key={skill.name} name={skill.name} url={skill.url} />
  ));

  return (
    <div
      className={`technical-skills-container ${
        activeNavItem === 1 ? "" : "hide"
      }`}
    >
      <div class="skills-list-container">{skillsList}</div>
      {skillBadges}
    </div>
  );
}

export default TechnicalSkills;
