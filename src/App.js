import React, { useEffect } from 'react'
import LandingPage from './components/LandingPage'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Volunteerism from './components/Volunteerism'
import Header from './components/Header'
import './App.css';
import Page1 from './images/Page1.png'
import Page2 from './images/Page2.png'
import Page3 from './images/Page3.png'


function App() {

  useEffect(() => {
    console.log('🐸 secret frog 🐸')
  }, []);
  

  return (
    <div className="app">
      <Header />

      <div className="page-container">

            <LandingPage />
            <img className="Page1" src={Page1} />
            <AboutMe />
            <img className="Page2" src={Page2} />
            <Experience />
            <img className="Page3" src={Page3} />
            <Volunteerism />
      </div>
    </div>
  );
}

export default App;
