import React, { useEffect, useState } from 'react'
import LandingPage from './components/LandingPage'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Volunteerism from './components/Volunteerism'
import Header from './components/Header'
import './App.css';


function App() {

  const [mousePos, setMousePos] = useState({x:0, y:0});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  useEffect(() => {
    console.log('🐸 secret frog 🐸')
  }, []);

  return (
    <>
    <div className="cursor" style={{transform: `translate(${mousePos.x - 7.5}px, ${mousePos.y - 7.5}px)`,}}/>
    <div className="app">
      <Header />
      <div className="page-container">
          <LandingPage />
          <AboutMe />
          <Experience />
          <Volunteerism />
      </div>
    </div>
    </>
  );
}

export default App;
