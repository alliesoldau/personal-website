import React, { useState } from 'react'
import H from '../images/H.jpeg';
import T from '../images/T.jpg';
import iRobot from '../images/iRobot.png';
import IconDD from "./IconDD";
import { RiArrowDropDownLine } from 'react-icons/ri';

function Experience() {

    const [showDetails, setShowDetails] = useState({
        'H1': false,
        'H2': false, 
        'T': false,
        'iR': false
    })

    function handleDropDown(e, dd) {
        e.preventDefault();
        setShowDetails( { ...showDetails, [dd]: !showDetails[dd] } )
    }

    return (
        <div className="selected-contents-container">
            <h1>Experience . . .</h1>
            <div className="jobs">
                <div className="job-block" name="H1" onClick={(e => handleDropDown(e, 'H1'))}>
                    <img className="logo" src={H}></img>
                    <div className="employeer">
                        <h2>Harry's</h2>
                    </div>
                    <div className="drop-down">
                        <div className="position">
                            <p>Senior Product Design Engineer</p>
                        </div>
                        <div className="icon-dd">
                            <IconDD >
                                <RiArrowDropDownLine />
                            </IconDD>
                        </div>
                    </div>
                </div>
                    <div id='job-blurb' className={showDetails['H1'] ? 'reveal-me': 'hide-me'}>
                        <ul> 
                            <li>Led mechanical and electrical development of the company's first suite of electromechanical grooming products.</li>
                            <li>Became a team subject matter expert in light pipe design, electromechanical waterproofing design, and button UX.</li>
                            <li>Created and launched 10+ original templates and processes to increase work efficiency and traceability.</li>
                            <li>Program Managed DE&I Education and Awareness Initiative with team of 10.</li>
                        </ul>
                    </div>
                <div className="job-block" onClick={(e => handleDropDown(e, 'H2'))}>
                    <img className="logo" src={H}></img>
                    <div className="employeer">
                        <h2>Harry's</h2>
                    </div>
                    <div className="drop-down">
                        <div className="position">
                            <p>Associate Product Design Engineer</p>
                        </div>
                        <div className="icon-dd">
                            <IconDD >
                                <RiArrowDropDownLine />
                            </IconDD>
                        </div>
                    </div>
                </div>
                    <div id='job-blurb' className={showDetails['H2'] ? 'reveal-me': 'hide-me'}>
                        <ul>
                            <li>Designed and launched 5 products using injection molding, die-casting, and sheet-metal manufacturing methods.</li>
                            <li>Led design improvements on 5+ critical-to-function part upgrades in complex assemblies.</li>
                            <li>Rapid-Prototyped using 3D printing, casting, molding, sheet metal forming, and machining.</li>
                            <li>Leveraged CMs and tooling vendors to support and improve existing or developing products.</li>
                        </ul>
                    </div>
                <div className="job-block" onClick={(e => handleDropDown(e, 'T'))}>
                    <img className="logo" src={T}></img>
                    <div className="employeer">
                        <h2>Tesla</h2>
                    </div>
                    <div className="drop-down">
                        <div className="position">
                            <p>Design Engineering Coop</p>
                        </div>
                        <div className="icon-dd">
                            <IconDD >
                                <RiArrowDropDownLine />
                            </IconDD>
                        </div>
                    </div>
                </div>
                    <div id='job-blurb' className={showDetails['T'] ? 'reveal-me': 'hide-me'}>
                        <ul> 
                            <li>Prototyped improvements on dynamic parts of the Tesla Model 3's center console and cup holder components.</li>
                            <li>Reduced production cost and improved ergonomics of existing parts via extensive testing and SOP development.</li>
                            <li>Designed testing protocols and trained technicians; gathered and analyzed the data to validate design changes.</li>
                        </ul>
                    </div>
                <div className="job-block" onClick={(e => handleDropDown(e, 'iR'))}>
                    <img className="logo" src={iRobot}></img>
                    <div className="employeer">
                        <h2>iRobot</h2>
                    </div>
                    <div className="drop-down">
                        <div className="position">
                            <p>Systems Engineering Coop</p>
                        </div>
                        <div className="icon-dd">
                            <IconDD >
                                <RiArrowDropDownLine />
                            </IconDD>
                        </div>
                    </div>
                </div>
                    <div id='job-blurb' className={showDetails['iR'] ? 'reveal-me': 'hide-me'}>
                        <ul className="job-blurb"> 
                        <li>Designed and implemented testing protocols to ensure robots met government and customer specifications.</li>
                        <li>Performed hardware diagnostics and software debugging on robot's critical Lidar sensors.</li>
                        <li>Prototyped water-proofing improvements to extend life of robot by 50% when exposed to liquid.</li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Experience;