import { NavLink } from 'react-router-dom'

function NavBar() {

    return (
        <>
            <div className="navbar-container">
                <NavLink to="/experience" >
                    <p className="navlink">Experience</p>
                </NavLink>
                <NavLink to="/projects" >
                    <p className="navlink">Projects</p>
                </NavLink>
                <NavLink to="/volunteerism" >
                    <p className="navlink">Volunteerism</p>
                </NavLink>
                <NavLink to="/passions" >
                    <p className="navlink">Passions</p>
                </NavLink>
            </div>
        </>
    )

}

export default NavBar;