// import React, { useState } from 'react'
// import H from '../images/H.jpeg';
// import T from '../images/T.jpg';
// import iRobot from '../images/iRobot.png';
import Resume from '../images/Resume.pdf';

function Experience() {

    return (
        <div className="Experience">
            {/* <h1>Experience . . .</h1> */}
            <h2>Projects</h2>
            <h2>Skills</h2>
            <h2>Professional Experience</h2>
            <div className="jobs">
                <div className="job-block" >
                    <div className="job">
                        <p className="position">Senior Product Design Engineer</p>
                        <p>~</p>
                        <a className="employeer" href="https://www.harrys.com/en/us" target="_blank" style={{display: "table-cell"}}>
                            <p>Harry's</p>
                        </a>
                    </div>
                    <div id='job-blurb' >
                        <dl> 
                            <dd>Led mechanical and electrical development of the company's first suite of electromechanical grooming products.</dd>
                            <dd>Became a team subject matter expert in light pipe design, electromechanical waterproofing design, and button UX.</dd>
                            <dd>Created and launched 10+ original templates and processes to increase work efficiency and traceability.</dd>
                            <dd>Program Managed DE&I Education and Awareness Initiative with team of 10.</dd>
                        </dl>
                    </div>
                </div>
                <div className="job-block" >
                    <div className="job">
                    <p className="position">Associate Product Design Engineer</p>
                        <p>~</p>
                        <a className="employeer" href="https://www.harrys.com/en/us" target="_blank" style={{display: "table-cell"}}>
                            <p>Harry's</p>
                        </a>
                    </div>
                    <div id='job-blurb' >
                        <dl>
                            <dd>Designed and launched 5 products using injection molding, die-casting, and sheet-metal manufacturing methods.</dd>
                            <dd>Led design improvements on 5+ critical-to-function part upgrades in complex assemblies.</dd>
                            <dd>Rapid-Prototyped using 3D printing, casting, molding, sheet metal forming, and machining.</dd>
                            <dd>Leveraged CMs and tooling vendors to support and improve existing or developing products.</dd>
                        </dl>
                    </div>
                    </div>
                <div className="job-block" >
                    
                    <div className="job">
                    <p className="position">Design Engineering Coop</p>
                        <p>~</p>
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
                        <p>~</p>
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