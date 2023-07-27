function NavBar({
  scrollToAboutMe,
  scrollToProjects,
  scrollToSkills,
  scrollToProfExp,
}) {
  return (
    <>
      <div className="navbar-container">
        <p className="navlink" onClick={scrollToAboutMe}>
          About Me
        </p>
        <p className="navlink" onClick={scrollToProjects}>
          Projects
        </p>
        <p className="navlink" onClick={scrollToSkills}>
          Skills
        </p>
        <p className="navlink" onClick={scrollToProfExp}>
          Experience
        </p>
      </div>
    </>
  );
}

export default NavBar;
