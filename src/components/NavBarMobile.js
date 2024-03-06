import Resume from "../images/Resume.pdf";

const NavBarMobile = ({ isOpen, setIsOpen }) => {
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="off-canvas-nav">
      <div className="mobile-top-bar">
        <a className="name" href="#HomePage" onClick={closeNav}>
          Allie Soldau
        </a>
        <div className="menu-toggle" onClick={toggleNav}>
          ☰
        </div>
      </div>
      <nav className={isOpen ? "open" : ""}>
        <div className="mobile-navbar-container">
          <a href="#AboutMe" className="navlink" onClick={toggleNav}>
            About Me
          </a>
          <a href="#Skills" className="navlink" onClick={toggleNav}>
            Skills
          </a>

          <a href="#ProfExperience" className="navlink" onClick={toggleNav}>
            Experience
          </a>
          <a href="#Education" className="navlink" onClick={toggleNav}>
            Education
          </a>
          <a href="#Projects" className="navlink" onClick={toggleNav}>
            Projects
          </a>
          <a className="navlink" href={Resume} target="_blank" rel="noreferrer">
            <div className="resume">
              Resume
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#E2E2E2"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / External_Link">
                    {" "}
                    <path
                      id="Vector"
                      d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                      stroke="#E2E2E2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBarMobile;
