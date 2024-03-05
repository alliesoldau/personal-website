import { useState, useEffect } from "react";
import ScrollArrow from "../images/Scroll.png";

const loopArr = [
  { blurb: "a self-taught wood worker.", icon: "fa-ruler" },
  { blurb: "an avid hiker and backpacker.", icon: "fa-person-hiking" },
  { blurb: "a proud frog parent.", icon: "fa-frog" },
  { blurb: "a community conservationist.", icon: "fa-seedling" },
  { blurb: "a casual snowboarder.", icon: "fa-person-snowboarding" },
  { blurb: "a car sing-along enthusiast.", icon: "fa-car-side" },
  { blurb: "a needlework artist.", icon: "fa-palette" },
];

function LandingPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalDelayMilliseconds = loopArr[index].blurb.length * 150;
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        // reset index if current index is greater than array size
        return prevIndex + 1 < loopArr.length ? prevIndex + 1 : 0;
      });
    }, intervalDelayMilliseconds);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div id="LandingPage">
        <h1 className="hi-there">Hi there!</h1>
        <div className="blurb">
          <i className="fa-solid fa-code"></i>
          <p className="blurb">I'm a Fullstack Software Developer</p>
        </div>
        <div className="blurb">
          <i className="fa-solid fa-wrench"></i>
          <p className="blurb">with a background in Mechanical Engineering,</p>
        </div>
        <div className="blurb blurb-cycle" key={loopArr[index].blurb}>
          <i className={`fa-solid ${loopArr[index].icon}`}></i>
          <p>and {loopArr[index].blurb}</p>
        </div>
        <div className="Scroll-Arrow-Div">
          <img
            style={{ width: "80px" }}
            alt="downward facing arrow prompting user to scroll"
            src={ScrollArrow}
          />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
