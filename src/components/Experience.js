import ProfExperience from './ProfExperience';
import Resume from '../images/Resume.pdf';
import C from '../images/C.png';
import CSS from '../images/CSS.png';
import Git from '../images/Git.png';
import HTML5 from '../images/HTML5.png';
import JS from '../images/JS.png';
import PostgreSQL from '../images/PostgreSQL.png';
import Python from '../images/Python.png';
import Rails from '../images/Rails.png';
import ReactJS from '../images/React.png';
import Ruby from '../images/Ruby.png';
import SQL from '../images/SQL.png';

function Experience({ jobsArray }) {

    return (
        <div className="Experience">
            <h2>Projects</h2>
            <div className="projects">
                <div className="project">
                    <p className="project-title"><a href = 'https://github.com/alliesoldau/CampNYS' target="_blank">CampNYS</a> </p>
                    <p className="project-desc">A centralized campsite reservation manager for hosts and campers.</p>
                        <iframe src="https://www.youtube.com/embed/XwI78EUfryU"
                            frameborder='0'
                            allow="accelerometer; autoplay; clipboard-write"
                            allowfullscreen
                            title='video'
                        />
                        <div className="project-skills">
                            <div className="skill">
                                <p>React</p>
                            </div>
                            <div className="skill">
                                <p>Ruby on Rails</p>
                            </div>
                            <div className="skill">
                                <p>PostgreSQL</p>
                            </div>
                            <div className="skill">
                                <p>Google Maps API</p>
                            </div>
                            <div className="skill">
                                <p>Styled Components</p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <p className="project-title"><a href = 'https://github.com/alliesoldau/FrogWatch-USA-Data-Collection/tree/main/project' target="_blank">FrogWatch USA</a></p>
                    <p className="project-desc">An improved platform volunteers to log data, and the organization to analyze data.</p>
                        <iframe src="https://www.youtube.com/embed/w2pvLD0pS7w"
                            frameborder='0'
                            allow="accelerometer; autoplay; clipboard-write"
                            allowfullscreen
                            title='video'
                        />
                        <div className="project-skills">
                            <div className="skill">
                                <p>Python</p>
                            </div>
                            <div className="skill">
                                <p>SQL</p>
                            </div>
                            <div className="skill">
                                <p>HTML</p>
                            </div>
                            <div className="skill">
                                <p>CSS</p>
                            </div>
                            <div className="skill">
                                <p>Mobile Styling</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="projects">
                <div className="project">
                    <p className="project-title"><a href = 'https://github.com/alliesoldau/hiking-tracker-dutzy-soldau' target="_blank">Hiking Challenge Tracker</a></p>
                    <p className="project-desc">An interactive data management site track progress towards challenges hiking.</p>
                        <iframe src="https://www.youtube.com/embed/TUFJXX7V0jo"
                            frameborder='0'
                            allow="accelerometer; autoplay; clipboard-write"
                            allowfullscreen
                            title='video'
                        />
                        <div className="project-skills">
                            <div className="skill">
                                <p>React</p>
                            </div>
                            <div className="skill">
                                <p>MySQL</p>
                            </div>
                            <div className="skill">
                                <p>CSS</p>
                            </div>
                            <div className="skill">
                                <p>Database Manipulation</p>
                            </div>
                            <div className="skill">
                                <p>Routing</p>
                            </div>
                            <div className="skill">
                                <p>Navigation</p>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                    <p className="project-title"><a href = 'https://github.com/alliesoldau/End-Grain-Cutting-Board-Designer' target="_blank">End Grain Cutting Board Designer</a></p>
                    <p className="project-desc">A site for woodworkers to design cutting board projects with minimal waste.</p>
                        <iframe src="https://www.youtube.com/embed/NotJvmUfZRI"
                            frameborder='0'
                            allow="accelerometer; autoplay; clipboard-write"
                            allowfullscreen
                            title='video'
                        />
                        <div className="project-skills">
                            <div className="skill">
                                <p>JavaScript</p>
                            </div>
                            <div className="skill">
                                <p>HTML</p>
                            </div>
                            <div className="skill">
                                <p>CSS</p>
                            </div>
                            <div className="skill">
                                <p>Bootstrap</p>
                            </div>
                        </div>
                    </div>
            </div>
            <h2>Skills</h2>
            <div className="skills-container">
                    <img className="skill-badge" src={ReactJS}/>
                    <img className="skill-badge" src={JS}/>
                    <img className="skill-badge" src={HTML5}/>
                    <img className="skill-badge" src={CSS}/>
                    <img className="skill-badge" src={Git}/>
                    <img className="skill-badge" src={PostgreSQL}/>
                    <img className="skill-badge" src={Rails}/>
                    <img className="skill-badge" src={Ruby}/>
                    <img className="skill-badge" src={SQL}/>
                    <img className="skill-badge" src={Python}/>
                    <img className="skill-badge" src={C}/>
            </div>
            <h2>Professional Experience</h2>
            <ProfExperience jobsArray={jobsArray}/>
            <div className="resume">
                    <a className="resume" href = {Resume} target = "_blank">View full resume</a>
            </div>
        </div>
    )
}

export default Experience;