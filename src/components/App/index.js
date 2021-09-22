// == Import npm
import React, { useState } from 'react';
import Header from '../Header';
import Menu from '../Menu';
import Intro from '../Intro';
import Portfolio from '../Portfolio';
import Compétences from '../Compétences';
import Contact from '../Contact';
import Details from '../Details';

// == Import
import './styles.scss';

// == Composant
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Details />
        <Compétences />
        <Contact />
      </div>
    </div>

  );
};

// == Export
export default App;
