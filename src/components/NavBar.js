function NavBar() {

    function handleClickAbout()  {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        };

    function handleClickExperience() {
        window.scrollTo({
            top: 1150,
            behavior: "smooth"
          });
        };

    function handleClickVolunteerism() {
        window.scrollTo({
            top: 3700,
            behavior: "smooth"
          });
        };

    return (
        <>
            <div className="navbar-container">
                    {/* <p className="navlink" value='About' onClick={handleClickAbout}>About</p>
                    <p className="navlink" onClick={handleClickExperience}>Experience</p> */}
                    {/* <p className="navlink" onClick={handleClickVolunteerism}>Volunteerism</p> */}
            </div> 
        </>
    )

}

export default NavBar;