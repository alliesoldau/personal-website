import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
