import { useState, useEffect } from "react";
import ScrollArrow from "../images/Scroll.png";

const loopArr = [
  "a self-taught wood worker.",
  "an avid hiker and backpacker.",
  "a proud frog parent.",
  "a community conservationist.",
  "a beginnermediate snowboarder.",
  "a car sing-along enthusiast.",
  "a needlework artist.",
];

function LandingPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalDelayMilliseconds = loopArr[index].length * 150;
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
        <p className="blurb">
          I'm a Fullstack Developer with a background in Mechanical Engineering
        </p>
        <p className="blurb-cycle" key={loopArr[index]}>
          and {loopArr[index]}
        </p>
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
