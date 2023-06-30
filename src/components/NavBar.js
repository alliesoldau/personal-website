import { NavLink } from 'react-router-dom'
import Resume from '../images/Resume.pdf';


function NavBar() {

    return (
        <>
            <div className="navbar-container">
                <NavLink to="/experience" >
                    <p className="navlink">EXPERIENCE</p>
                </NavLink>
                <NavLink to="/projects" >
                    <p className="navlink">PROJECTS</p>
                </NavLink>
                <NavLink to="/volunteerism" >
                    <p className="navlink">VOLUNTEERISM</p>
                </NavLink>
                <NavLink to="/passions" >
                    <p className="navlink">PASSIONS</p>
                </NavLink>
                <a className="resume" href = {Resume} target = "_blank">RESUME</a>
            </div> 
        </>
    )

}

export default NavBar;