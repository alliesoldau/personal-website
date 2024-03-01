import allSkills from "./AllSkills";
import SkillContainer from "./SkillContainer";
import SkillList from "./SkillList";

function PMSkills({ activeNavItem }) {
  const skillsLogos = allSkills.PMSkills.skillsLogos;
  const skillsText = allSkills.PMSkills.skillsText;

  const skillsList = skillsText.map((skill) => (
    <SkillList key={skill} skill={skill} />
  ));
  const skillBadges = skillsLogos.map((skill) => (
    <SkillContainer key={skill.name} name={skill.name} url={skill.url} />
  ));

  return (
    <div className={`PM-skills-container ${activeNavItem == 2 ? "" : "hide"}`}>
      <div class="skills-list-container">{skillsList}</div>
      {skillBadges}
    </div>
  );
}

export default PMSkills;
