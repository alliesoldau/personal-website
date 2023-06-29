import { NavLink } from 'react-router-dom'

function NavBar() {

    return (
        <>
            <div className="navbar-container">
                <NavLink to="/experience" >
                    <p>Experience</p>
                </NavLink>
                <NavLink to="/projects" >
                    <p>Projects</p>
                </NavLink>
                <NavLink to="/volunteerism" >
                    <p>Volunteerism</p>
                </NavLink>
                <NavLink to="/passions" >
                    <p>Passions</p>
                </NavLink>
            </div>
        </>
    )

}

export default NavBar;