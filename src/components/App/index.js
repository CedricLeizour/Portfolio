// == Import npm
import React from 'react';
import { useState } from 'react';
import Header from '../Header';
import Menu from '../Menu';
import Intro from '../Intro';
import Portfolio from '../Portfolio';
import Works from '../Works';
import Contact from '../Contact';

// == Import
import './styles.scss';

// == Composant
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
};

// == Export
export default App;
