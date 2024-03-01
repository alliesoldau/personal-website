import allSkills from "./AllSkills";
import SkillContainer from "./SkillContainer";
import SkillList from "./SkillList";

function MESkills({ activeNavItem }) {
  const skillsLogos = allSkills.MESkills.skillsLogos;
  const skillsText = allSkills.MESkills.skillsText;

  const skillsList = skillsText.map((skill) => (
    <SkillList key={skill} skill={skill} />
  ));
  const skillBadges = skillsLogos.map((skill) => (
    <SkillContainer key={skill.name} name={skill.name} url={skill.url} />
  ));

  return (
    <div className={`ME-skills-container ${activeNavItem == 3 ? "" : "hide"}`}>
      <div class="skills-list-container">{skillsList}</div>
      {skillBadges}
    </div>
  );
}

export default MESkills;
