function NavBar() {

    function handleClickAbout()  {
        window.scrollTo({
            top: 700,
            behavior: "smooth"
          });
        };

    function handleClickProjects() {
        window.scrollTo({
            top: 1400,
            behavior: "smooth"
          });
        };

    function handleClickSkills() {
        window.scrollTo({
            top: 2350,
            behavior: "smooth"
          });
        };

    function handleClickExperience() {
        window.scrollTo({
            top: 2900,
            behavior: "smooth"
            });
        };

    return (
        <>
            <div className="navbar-container">
                    <p className="navlink" onClick={handleClickAbout}>About Me</p>
                    <p className="navlink" onClick={handleClickProjects}>Projects</p>
                    <p className="navlink" onClick={handleClickSkills}>Skills</p>
                    <p className="navlink" onClick={handleClickExperience}>Experience</p>
            </div> 
        </>
    )

}

export default NavBar;