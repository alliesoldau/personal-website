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

function Experience() {

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
            <div className="jobs">
            <div className="job-block" >
                    <div className="job">
                        <p className="position">Full Stack Software Engineering Student</p>
                        <p>⸻</p>
                        <a className="employeer" href="https://flatironschool.com/welcome-to-flatiron-school/?utm_source=Google&utm_medium=ppc&utm_campaign=19999152388&utm_content=&utm_term=&uqaid=&Cj0KCQjwqs6lBhCxARIsAG8YcDhmVhd5_UBBsw5Swz_L_4DNOeuBw1_lDEfmI1vbogMqwk0GVnIXukcaAvwyEALw_wcB&gclid=Cj0KCQjwqs6lBhCxARIsAG8YcDhmVhd5_UBBsw5Swz_L_4DNOeuBw1_lDEfmI1vbogMqwk0GVnIXukcaAvwyEALw_wcB" target="_blank" style={{display: "table-cell"}}>
                            <p>Flatiron School</p>
                        </a>
                    </div>
                    <div id='job-blurb' >
                    <div className="job-skills">
                        <div className="skill">
                            <p>JavaScript</p>
                        </div>
                        <div className="skill">
                            <p>React</p>
                        </div>
                        <div className="skill">
                            <p>Ruby on Rails</p>
                        </div>
                        <div className="skill">
                            <p>SQL</p>
                        </div>
                        <div className="skill">
                            <p>ActiveRecord</p>
                        </div>
                        <div className="skill">
                            <p>HTML/CSS</p>
                        </div>
                        <div className="skill">
                            <p>RESTful APIs</p>
                        </div>
                    </div>
                        <dl> 
                            <dd>Designed 5+ full stack applications using on JavaScript, React, and Ruby on Rails. </dd>
                            <dd>Demonstrated skills in full Software Life Cycle from concept work to deployment.</dd>
                            <dd>Mastered with Figma, technical proposals, GitHub branch management, and unit testing..</dd>
                            <dd>Collaborated with fellow engineers through pair programming and design reviews.</dd>
                        </dl>
                    </div>
                </div>
                <div className="job-block" >
                    <div className="job">
                        <p className="position">Senior Product Design Engineer</p>
                        <p>⸻</p>
                        <a className="employeer" href="https://www.harrys.com/en/us" target="_blank" style={{display: "table-cell"}}>
                            <p>Harry's</p>
                        </a>
                    </div>
                    <div id='job-blurb' >
                    <div className="job-skills">
                        <div className="skill">
                            <p>MiniTab</p>
                        </div>
                        <div className="skill">
                            <p>Macros</p>
                        </div>
                        <div className="skill">
                            <p>Product Design</p>
                        </div>
                        <div className="skill">
                            <p>Manufacturing</p>
                        </div>
                        <div className="skill">
                            <p>3D Modeling</p>
                        </div>
                        <div className="skill">
                            <p>Program Management</p>
                        </div>
                    </div>
                        <dl> 
                            <dd>Led development of company's first suite of electromechanical products.</dd>
                            <dd>Became subject matter expert in light pipe design,  and button UX.</dd>
                            <dd>Facilitated testing protocols for electromechanical waterproofing (IP7).</dd>
                            <dd>Launched 10+ templates/processes to increase efficiency and traceability.</dd>
                            <dd>Program Managed DE&I Ed. and Awareness Initiative; 9 programs.</dd>
                        </dl>
                    </div>
                </div>
                <div className="job-block" >
                    <div className="job">
                    <p className="position">Associate Product Design Engineer</p>
                        <p>⸻</p>
                        <a className="employeer" href="https://www.harrys.com/en/us" target="_blank" style={{display: "table-cell"}}>
                            <p>Harry's</p>
                        </a>
                    </div>
                    <div id='job-blurb' >
                    <div className="job-skills">
                        <div className="skill">
                            <p>Python</p>
                        </div> 
                        <div className="skill">
                            <p>Finite Element Analysis</p>
                        </div>
                        <div className="skill">
                            <p>Mechanical Design</p>
                        </div>
                        <div className="skill">
                            <p>SOP Development</p>
                        </div>
                        <div className="skill">
                            <p>Tolerance Analysis</p>
                        </div>
                    </div>
                        <dl>
                            <dd>Designed and launched 5 consumer goods products.</dd>
                            <dd>Mastered molding, die-casting, and sheet-metal manufacturing methods.</dd>
                            <dd>Led design improvements on 5+ critical-to-function part upgrades.</dd>
                            <dd>Rapid-Prototyped using 3D printing, casting, molding, and machining.</dd>
                            <dd>Leveraged CMs and tooling vendors to support existing products.</dd>
                        </dl>
                    </div>
                    </div>
                <div className="job-block" >
                    <div className="job">
                    <p className="position">Design Engineering Coop</p>
                        <p>⸻</p>
                    <a className="employeer" href="https://www.tesla.com/" target="_blank" style={{display: "table-cell"}}>
                        <p>Tesla</p>
                    </a> 
                    </div>
                    <div id='job-blurb' >
                    <div className="job-skills">
                        <div className="skill">
                            <p>Data Analysis</p>
                        </div>
                        <div className="skill">
                            <p>Should-Costing</p>
                        </div>
                        <div className="skill">
                            <p>Ergonomics Improvement</p>
                        </div>
                        <div className="skill">
                            <p>Industrial Design</p>
                        </div>
                        <div className="skill">
                            <p>MATLAB</p>
                        </div>
                    </div>
                        <dl> 
                            <dd>Prototyped improvements on dynamic parts of Model 3's center console.</dd>
                            <dd>Reduced production cost and improved ergonomics of existing parts.</dd>
                            <dd>Developed SOPs and performed extensive testing on complex assemblies.</dd>
                            <dd>Performed tests and analyzed the data to validate design changes.</dd>
                        </dl>
                    </div>
                </div>
                <div className="job-block">
                    <div className="job">
                    <p className="position">Systems Engineering Coop</p>
                        <p>⸻</p>
                        <a className="employeer" href="https://www.irobot.com/" target="_blank" style={{display: "table-cell"}}>
                            <p>iRobot</p>
                        </a>
                    </div>
                    <div id='job-blurb' >
                    <div className="job-skills">
                        <div className="skill">
                            <p>Diagnostics</p>
                        </div>
                        <div className="skill">
                            <p>Debugging</p>
                        </div>
                        <div className="skill">
                            <p>Lidar Sensors</p>
                        </div>
                        <div className="skill">
                            <p>Testing Design</p>
                        </div>
                        <div className="skill">
                            <p>Laser Cutting</p>
                        </div>
                        <div className="skill">
                            <p>Data Analytics</p>
                        </div>
                    </div>
                        <dl className="job-blurb"> 
                            <dd>Designed testing protocols to ensure robots met government specifications.</dd>
                            <dd>Performed hardware diagnostics and software debugging on Lidar sensors.</dd>
                            <dd>Prototyped water-proofing improvements to extend life of robot by 50%.</dd>
                        </dl>
                    </div>
                </div>
                <div className="resume">
                    <a className="resume" href = {Resume} target = "_blank">View full resume</a>
                </div>
            </div>
        </div>
    )
}

export default Experience;