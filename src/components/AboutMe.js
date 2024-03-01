import { SocialIcon } from "react-social-icons";
import Me from "../images/Me.jpeg";
import { Grid, Hidden } from "@mui/material";

function AboutMe() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={9} xl={9} id="AboutMe">
        <h3>About Me</h3>
        <Hidden lgUp>
          <div id="me">
            <img
              alt="Image of Allie Soldau smiling on top of a mountain"
              src={Me}
            ></img>
          </div>
        </Hidden>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={9} id="text-content">
        <div className="AboutMeContents">
          <div className="blurb">
            <p>
              I am experienced in Full Stack Development with a focus on
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
          <div className="icon-links">
            <p className="subtle">
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
      </Grid>
      <Hidden lgDown>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} id="me">
          <img
            alt="Image of Allie Soldau smiling on top of a mountain"
            src={Me}
          ></img>
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default AboutMe;
