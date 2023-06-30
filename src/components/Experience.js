import H from '../images/H.jpeg';
import T from '../images/T.jpg';
import iRobot from '../images/iRobot.png';
import IconDD from "./IconDD";
import { RiArrowDropDownLine } from 'react-icons/ri';

function Experience() {
    return (
        <div className="selected-contents-container">
            <h1>Experience . . .</h1>
            <div className="jobs">
                <div className="job-block">
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
                <div className="job-block">
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
                <div className="job-block">
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
                <div className="job-block">
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
            </div>
        </div>
    )

}

export default Experience;