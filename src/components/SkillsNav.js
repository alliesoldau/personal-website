function SkillsNav({ activeNavItem, setActiveNavItem, setTopLeftRadius }) {
  const handleClick = (index) => {
    setActiveNavItem(index);
    if (index !== 1) {
      setTopLeftRadius(true);
    } else {
      setTopLeftRadius(false);
    }
  };
  return (
    <div class="skills-nav">
      <div
        className={`nav-plus-box far-left ${
          activeNavItem === 1 ? "active" : ""
        }`}
      >
        <a className="nav-item" onClick={() => handleClick(1)}>
          <h5>Fullstack Development</h5>
        </a>
        <div class="box right">
          <div class="circle"></div>
        </div>
        <div class="radius-filler"></div>
      </div>
      <div
        className={`nav-plus-box center ${activeNavItem === 2 ? "active" : ""}`}
      >
        <div class="box left">
          <div class="circle"></div>
        </div>
        <a className="nav-item" onClick={() => handleClick(2)}>
          <h5>Project Management</h5>
        </a>
        <div class="box right">
          <div class="circle"></div>
        </div>
      </div>
      <div
        className={`nav-plus-box far-right ${
          activeNavItem === 3 ? "active" : ""
        }`}
      >
        <div class="box left">
          <div class="circle"></div>
        </div>
        <a className="nav-item" onClick={() => handleClick(3)}>
          <h5>Mechanical Engineering</h5>
        </a>
        <div class="box right">
          <div class="circle"></div>
        </div>
        <div class="radius-filler"></div>
      </div>
    </div>
  );
}

export default SkillsNav;
