import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Volunteerism from './components/Volunteerism'
import Passions from './components/Passions'
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="page-container">
        <NavBar />
        <Switch>
          
          <Route exact path='/'>
            <LandingPage />
          </Route>

          <Route exact path='/experience'>
            <Experience />
          </Route>

          <Route exact path='/projects'>
            <Projects />
          </Route>

          <Route exact path='/volunteerism'>
            <Volunteerism />
          </Route>

          <Route exact path='/passions'>
            <Passions />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
