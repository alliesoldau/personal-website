import React, { useState } from "react";
import SkillsNav from "./SkillsNav";
import TechnicalSkills from "./TechnicalSkills";
import PMSkills from "./PMSkills";
import MESkills from "./MESkills";

function Skills() {
  const [activeNavItem, setActiveNavItem] = useState(1);
  const [topLeftRadius, setTopLeftRadius] = useState(false);

  return (
    <div id="Skills">
      <h4>Technical Skills</h4>
      <SkillsNav
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
        setTopLeftRadius={setTopLeftRadius}
      />
      <div class={`skills-container ${topLeftRadius ? "top-left-radius" : ""}`}>
        <TechnicalSkills activeNavItem={activeNavItem} />
        <PMSkills activeNavItem={activeNavItem} />
        <MESkills activeNavItem={activeNavItem} />
      </div>
    </div>
  );
}

export default Skills;
