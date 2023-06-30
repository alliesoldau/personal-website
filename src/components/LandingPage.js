import selfie from '../images/me.jpeg'


function LandingPage() {

  return (
      <div className="selected-contents-container">
        <h1>Hi there . . . </h1>
        <div className="content">
          <div className="blurb">
            <p>I'm Allie! I am experienced in Full Stack Development with a focus on JavaScript, 
              React.js, Ruby on Rails, and Python. I'm passionate about data structures and front end
              design that emphasizes accessibility.</p> 
              <p>My background is in Mechanical Engineering 
              where I worked in product design for 5+ years in the consumer goods industry. 
              I have  a strong desire to create elegant and efficient solutions. 
              I’m customer focused, committed to cross-functional collaboration, and dedicated 
              to bringing projects from concept to shelf.</p>
          </div>
          <div className="selfie">
            <img src={selfie}></img>
          </div>
        </div>
      </div>
  )

}

export default LandingPage;
