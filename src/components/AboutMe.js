import { SocialIcon } from "react-social-icons";

function AboutMe({ aboutMeRef }) {
  return (
    <div className="AboutMe">
      <div className="AboutMeContents" ref={aboutMeRef}>
        <div className="textAndImage">
          <div className="blurb">
            <h2>About Me</h2>
            <p>
              I am experienced in Full Stack Developmentwith a focus on
              JavaScript, React.js, Ruby on Rails, and Python. I'm passionate
              about data structures and front end design that emphasizes
              accessibility.
            </p>
            <p>
              My background is in Mechanical Engineering where I worked in
              product design for 5+ years in the consumer goods industry. I have
              a strong desire to create elegant and efficient solutions. I’m
              customer focused, committed to cross-functional collaboration, and
              dedicated to bringing projects from concept to shelf.
            </p>
          </div>
        </div>
      </div>
      <div className="icon-links">
        <p className="contacts">
          alliesoldau@gmail.com | 603-289-8879 | Albany, NY
        </p>
        <SocialIcon
          className="social-link"
          fgColor="#011627"
          bgColor="#D8D4D5"
          style={{ height: 30, width: 30 }}
          url="https://linkedin.com/in/allie-soldau"
          target="_blank"
        />
        <SocialIcon
          className="social-link"
          fgColor="#011627"
          bgColor="#D8D4D5"
          style={{ height: 30, width: 30 }}
          url="https://github.com/alliesoldau"
          target="_blank"
        />
        <SocialIcon
          className="social-link"
          fgColor="#011627"
          bgColor="#D8D4D5"
          style={{ height: 30, width: 30 }}
          url="mailto:alliesoldau@gmail.com"
          target="_blank"
        />
        <SocialIcon
          className="social-link"
          fgColor="#011627"
          bgColor="#D8D4D5"
          style={{ height: 30, width: 30 }}
          url="https://medium.com/@alliesoldau"
          target="_blank"
        />
        <SocialIcon
          className="social-link"
          fgColor="#011627"
          bgColor="#D8D4D5"
          style={{ height: 30, width: 30 }}
          url="https://www.instagram.com/alliesoldau/"
          target="_blank"
        />
      </div>
    </div>
  );
}

export default AboutMe;
