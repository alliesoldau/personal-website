import { SocialIcon } from 'react-social-icons';
//https://jaketrent.github.io/react-social-icons/
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div className="home-btn">
                <NavLink to="/" >
                    <p className="name">Allie Soldau</p> 
                    <p className="desc">Full Stack Web Developer & Mechanical Engineer</p>
                </NavLink>
            </div>
            <div className="icon-links">
                <SocialIcon className="social-link" url="https://linkedin.com/in/allie-soldau" />
                <SocialIcon className="social-link" url="https://github.com/alliesoldau" />
                <SocialIcon className="social-link" url="https://medium.com/@alliesoldau" />
                <SocialIcon className="social-link" url="mailto:alliesoldau@gmail.com" />
                <SocialIcon className="social-link" url="https://www.instagram.com/alliesoldau/" />
            </div>
        </div>

    )
}

export default Header;