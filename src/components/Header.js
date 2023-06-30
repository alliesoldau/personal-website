import { SocialIcon } from 'react-social-icons';
//https://jaketrent.github.io/react-social-icons/
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div className="home-btn">
                <NavLink to="/" >
                    <p className="name">Allie Soldau</p> 
                    <p className="desc">Software Engineer</p>
                    {/* <p className="desc">& Mechanical Engineer</p> */}
                </NavLink>
            </div>
            <div className="icon-links">
                <SocialIcon className="social-link" bgColor="#3f3e3e" style={{ height: 45, width: 45 }} url="https://linkedin.com/in/allie-soldau" />
                <SocialIcon className="social-link" bgColor="#3f3e3e" style={{ height: 45, width: 45 }} url="https://github.com/alliesoldau" />
                <SocialIcon className="social-link" bgColor="#3f3e3e" style={{ height: 45, width: 45 }} url="mailto:alliesoldau@gmail.com" />
                <SocialIcon className="social-link" bgColor="#3f3e3e" style={{ height: 45, width: 45 }} url="https://medium.com/@alliesoldau" />
                <SocialIcon className="social-link" bgColor="#3f3e3e" style={{ height: 45, width: 45 }} url="https://www.instagram.com/alliesoldau/" />
            </div>
        </div>

    )
}

export default Header;