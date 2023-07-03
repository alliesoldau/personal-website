import selfie from '../images/me.jpeg'
import { SocialIcon } from 'react-social-icons';
//https://jaketrent.github.io/react-social-icons/
// import Resume from '../images/Resume.pdf';

function AboutMe() {

    return (
        <div className="AboutMe">
          <div className="textAndImage">
            <div className="blurb">
              <p>I'm Allie <span className="PrideMonthisAllYearMyDudes">(they/them)</span>!</p> 
              <p>I am experienced in <b>Full Stack Development</b> with a focus on JavaScript, 
                React.js, Ruby on Rails, and Python. I'm passionate about <b>data structures</b> and front end
                design that emphasizes accessibility.
              </p> 
              <p>My background is in Mechanical Engineering 
                where I worked in <b>product design</b> for 5+ years in the consumer goods industry. 
                I have  a strong desire to create elegant and efficient solutions. 
                I’m customer focused, committed to cross-functional collaboration, and dedicated 
                to bringing projects from concept to shelf.
              </p>
            </div>
            <div className="selfie">
              <img src={selfie}></img>
            </div>
        </div>
          <div className="icon-links">
              <p className="PrideMonthisAllYearMyDudes"><i>alliesoldau@gmail.com | 603-289-8879 | Albany, NY</i></p>
              <SocialIcon className="social-link" fgColor="#095256" bgColor="#EFF7CF" style={{ height: 45, width: 45 }} url="https://linkedin.com/in/allie-soldau" target="_blank"/>
              <SocialIcon className="social-link" fgColor="#095256" bgColor="#EFF7CF" style={{ height: 45, width: 45 }} url="https://github.com/alliesoldau" target="_blank" />
              <SocialIcon className="social-link" fgColor="#095256" bgColor="#EFF7CF" style={{ height: 45, width: 45 }} url="mailto:alliesoldau@gmail.com" target="_blank"/>
              <SocialIcon className="social-link" fgColor="#095256" bgColor="#EFF7CF" style={{ height: 45, width: 45 }} url="https://medium.com/@alliesoldau" target="_blank"/>
              <SocialIcon className="social-link" fgColor="#095256" bgColor="#EFF7CF" style={{ height: 45, width: 45 }} url="https://www.instagram.com/alliesoldau/" target="_blank"/>
              {/* <a className="resume" href = {Resume} target = "_blank">RESUME</a> */}
          </div>
      </div>
    )
}

export default AboutMe