import React, { useEffect, useState, useRef } from "react";
import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
// import Volunteerism from './components/Volunteerism'
import Header from "./components/Header";
import db from "./db.json";
import "./App.css";

function App() {
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const profExpRef = useRef(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    console.log("🐸 secret frog 🐸");
  }, []);

  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const scrollToProfExp = () => {
    if (profExpRef.current) {
      profExpRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <div
        className="cursor"
        style={{
          transform: `translate(${mousePos.x - 7.5}px, ${mousePos.y - 7.5}px)`,
        }}
      />
      <div className="app">
        <Header
          scrollToAboutMe={scrollToAboutMe}
          scrollToProjects={scrollToProjects}
          scrollToSkills={scrollToSkills}
          scrollToProfExp={scrollToProfExp}
        />
        <div className="page-container">
          <LandingPage />
          <AboutMe aboutMeRef={aboutMeRef} />
          <Experience
            jobsArray={db.jobsArray}
            projectsArray={db.projectsArray}
            projectsRef={projectsRef}
            skillsRef={skillsRef}
            profExpRef={profExpRef}
          />
          {/* <Volunteerism /> */}
        </div>
      </div>
    </>
  );
}

export default App;
