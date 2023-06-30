import { NavLink } from 'react-router-dom'

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
            </div>
        </>
    )

}

export default NavBar;