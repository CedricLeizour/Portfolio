// == Import npm
import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from '../Header';
import Menu from '../Menu';
import Intro from '../Intro';
import Portfolio from '../Portfolio';
import Works from '../Works';
import Contact from '../Contact';
import Details from '../Details';



// == Import
import './styles.scss';

// == Composant
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Switch>
        <Route exact path="/">
         <Intro />
         <Portfolio />
         <Works />
         <Contact />
        </Route>
        {/* <Route path="/intro" component={Intro}/>
        <Route path="/portfolio">
        <Portfolio />
        </Route>
        <Route path="/works" component={Works}/>
        <Route path="/contact" component={Contact}/> */}
        <Route exact path="/details" component={Details}/>
      </Switch>
      </div>
    </div>
    </Router>
  );
};

// == Export
export default App;
