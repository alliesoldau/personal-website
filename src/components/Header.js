import NavBar from "./NavBar";

function Header({
  scrollToAboutMe,
  scrollToProjects,
  scrollToSkills,
  scrollToProfExp,
}) {
  function handleClickName() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="header">
      <div className="home-btn">
        <p className="name" onClick={handleClickName}>
          Allie Soldau
        </p>
      </div>
      <NavBar
        scrollToAboutMe={scrollToAboutMe}
        scrollToProjects={scrollToProjects}
        scrollToSkills={scrollToSkills}
        scrollToProfExp={scrollToProfExp}
      />
    </div>
  );
}

export default Header;
