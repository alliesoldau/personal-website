import { Route, Switch } from 'react-router-dom'
import React, { useState } from 'react'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Experience from './components/Experience'
import Volunteerism from './components/Volunteerism'
import Passions from './components/Passions'
import Header from './components/Header'
import './App.css';

function App() {


  return (
    <div className="app">
      <Header />

      <div className="page-container">

            <LandingPage />


            <Experience />


            <Volunteerism />



            <Passions />

      </div>
    </div>
  );
}

export default App;
