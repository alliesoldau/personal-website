import Resume from '../images/Resume.pdf';

function Experience() {

    return (
        <div className="Experience">
            <h2>Projects</h2>
            <h2>Skills</h2>
            <h2>Professional Experience</h2>
            <div className="jobs">
                <div className="job-block" >
                    <div className="job">
                        <p className="position">Senior Product Design Engineer</p>
                        <p>⸻</p>
                        <a className="employeer" href="https://www.harrys.com/en/us" target="_blank" style={{display: "table-cell"}}>
                            <p>Harry's</p>
                        </a>
                    </div>
                    <div id='job-blurb' >
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
                        <dl> 
                            <dd>Prototyped improvements on dynamic parts of the Tesla Model 3's center console and cup holder components.</dd>
                            <dd>Reduced production cost and improved ergonomics of existing parts via extensive testing and SOP development.</dd>
                            <dd>Designed testing protocols and trained technicians; gathered and analyzed the data to validate design changes.</dd>
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
                        <dl className="job-blurb"> 
                            <dd>Designed and implemented testing protocols to ensure robots met government and customer specifications.</dd>
                            <dd>Performed hardware diagnostics and software debugging on robot's critical Lidar sensors.</dd>
                            <dd>Prototyped water-proofing improvements to extend life of robot by 50% when exposed to liquid.</dd>
                        </dl>
                    </div>
                </div>
                    <a className="resume" href = {Resume} target = "_blank">View full resume</a>
            </div>
        </div>
    )
}

export default Experience;