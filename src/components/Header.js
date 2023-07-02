import { NavLink } from 'react-router-dom'
import NavBar from './NavBar'

function Header() {

    function handleClickName()  {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        };


    return (
        <div className="header">
 
            <div className="home-btn">
                <p className="name" onClick={handleClickName}>Allie Soldau</p> 
            </div>
            <NavBar />
        </div>

    )
}

export default Header;