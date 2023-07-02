import selfie from '../images/me.jpeg'
import { SocialIcon } from 'react-social-icons';
//https://jaketrent.github.io/react-social-icons/
import Resume from '../images/Resume.pdf';
import Experience from "./Experience"
import Volunteerism from "./Volunteerism"

function LandingPage() {

  return (
    <>
      <div id="greeting">
        <p className="hi-there">Hi there!</p>
        <p className="blurb">I'm a Mechanical Engineer turned <b>Software Developer</b></p>
        <p className="blurb">and *insert cycling passions*</p>
      </div>
      <div className="selected-contents-container">
    
        <h1>About Me</h1>
        <div className="content">
          <div className="blurb">
            <p>I'm Allie! I am experienced in Full Stack Development with a focus on JavaScript, 
              React.js, Ruby on Rails, and Python. I'm passionate about data structures and front end
              design that emphasizes accessibility.</p> 
              <p>My background is in Mechanical Engineering 
              where I worked in product design for 5+ years in the consumer goods industry. 
              I have  a strong desire to create elegant and efficient solutions. 
              I’m customer focused, committed to cross-functional collaboration, and dedicated 
              to bringing projects from concept to shelf.</p>
          </div>
          <div className="selfie">
            <img src={selfie}></img>
          </div>
        </div>
            <p>email</p>
            <div className="icon-links">
                <SocialIcon className="social-link" bgColor="#3f3e3e" style={{ height: 45, width: 45 }} url="https://linkedin.com/in/allie-soldau" target="_blank"/>
                <SocialIcon className="social-link" bgColor="#3f3e3e" style={{ height: 45, width: 45 }} url="https://github.com/alliesoldau" target="_blank" />
                <SocialIcon className="social-link" bgColor="#3f3e3e" style={{ height: 45, width: 45 }} url="mailto:alliesoldau@gmail.com" target="_blank"/>
                <SocialIcon className="social-link" bgColor="#3f3e3e" style={{ height: 45, width: 45 }} url="https://medium.com/@alliesoldau" target="_blank"/>
                <SocialIcon className="social-link" bgColor="#3f3e3e" style={{ height: 45, width: 45 }} url="https://www.instagram.com/alliesoldau/" target="_blank"/>
                <a className="resume" href = {Resume} target = "_blank">RESUME</a>
            </div>
        </div>
      </>

  )

}

export default LandingPage;
