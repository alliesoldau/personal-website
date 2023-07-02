// import React, { useState } from 'react'
import H from '../images/H.jpeg';
import T from '../images/T.jpg';
import iRobot from '../images/iRobot.png';
import Resume from '../images/Resume.pdf';

function Experience() {

    return (
        <div className="selected-contents-container">
            <h1>Experience . . .</h1>
            <h2>Projects</h2>
            <h2>Skills</h2>
            <h2>Professional Experience</h2>
            <div className="jobs">
                <div className="job-block" >
                    <a className="logo" href="https://www.harrys.com/en/us" target="_blank" style={{display: "table-cell"}}>
                        <img className="logo" src={H} />
                    </a>
                    <div className="employeer">
                        <h3>Harry's</h3>
                    </div>
                    <div className="drop-down">
                        <div className="position">
                            <p>Senior Product Design Engineer</p>
                        </div>
                    </div>
                </div>
                    <div id='job-blurb' >
                        <ul> 
                            <li>Led mechanical and electrical development of the company's first suite of electromechanical grooming products.</li>
                            <li>Became a team subject matter expert in light pipe design, electromechanical waterproofing design, and button UX.</li>
                            <li>Created and launched 10+ original templates and processes to increase work efficiency and traceability.</li>
                            <li>Program Managed DE&I Education and Awareness Initiative with team of 10.</li>
                        </ul>
                    </div>
                <div className="job-block" >
                    <a className="logo" href="https://www.harrys.com/en/us" target="_blank" style={{display: "table-cell"}}>
                        <img className="logo" src={H} />
                    </a>
                    <div className="employeer">
                        <h3>Harry's</h3>
                    </div>
                    <div className="drop-down">
                        <div className="position">
                            <p>Associate Product Design Engineer</p>
                        </div>
                    </div>
                </div>
                    <div id='job-blurb' >
                        <ul>
                            <li>Designed and launched 5 products using injection molding, die-casting, and sheet-metal manufacturing methods.</li>
                            <li>Led design improvements on 5+ critical-to-function part upgrades in complex assemblies.</li>
                            <li>Rapid-Prototyped using 3D printing, casting, molding, sheet metal forming, and machining.</li>
                            <li>Leveraged CMs and tooling vendors to support and improve existing or developing products.</li>
                        </ul>
                    </div>
                <div className="job-block" >
                    <a className="logo" href="https://www.tesla.com/" target="_blank" style={{display: "table-cell"}}>
                        <img className="logo" src={T} />
                    </a>
                    <div className="employeer">
                        <h3>Tesla</h3>
                    </div>
                    <div className="drop-down">
                        <div className="position">
                            <p>Design Engineering Coop</p>
                        </div>
                    </div>
                </div>
                    <div id='job-blurb' >
                        <ul> 
                            <li>Prototyped improvements on dynamic parts of the Tesla Model 3's center console and cup holder components.</li>
                            <li>Reduced production cost and improved ergonomics of existing parts via extensive testing and SOP development.</li>
                            <li>Designed testing protocols and trained technicians; gathered and analyzed the data to validate design changes.</li>
                        </ul>
                    </div>
                <div className="job-block">
                    <a className="logo" href="https://www.irobot.com/" target="_blank" style={{display: "table-cell"}}>
                        <img className="logo" src={iRobot} />
                    </a>
                    <div className="employeer">
                        <h3>iRobot</h3>
                    </div>
                    <div className="drop-down">
                        <div className="position">
                            <p>Systems Engineering Coop</p>
                        </div>
                    </div>
                </div>
                    <div id='job-blurb' >
                        <ul className="job-blurb"> 
                        <li>Designed and implemented testing protocols to ensure robots met government and customer specifications.</li>
                        <li>Performed hardware diagnostics and software debugging on robot's critical Lidar sensors.</li>
                        <li>Prototyped water-proofing improvements to extend life of robot by 50% when exposed to liquid.</li>
                        </ul>
                    </div>
                    <a className="resume" href = {Resume} target = "_blank">View full resume</a>
            </div>
        </div>
    )
}

export default Experience;