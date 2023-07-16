import { useState, useEffect } from "react";

const loopArr = [
  "a self-taught wood worker.",
  "an avid hiker and backpacker.",
  "a proud frog parent.",
  "a community conservationist.",
  "a beginnermediate snowboarder.",
  "a car sing-along enthusiast.",
  "a needlework artist."
];

function LandingPage() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalDelayMilliseconds = loopArr[index].length * 200;
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
        <p className="hi-there">Hi there!</p>
        <p className="blurb">I'm a Mechanical Engineer turned Software Developer</p>
        <p className="blurb-cycle" key={loopArr[index]}>and {loopArr[index]}</p>
      </div>
    </>
  )
}

export default LandingPage;
