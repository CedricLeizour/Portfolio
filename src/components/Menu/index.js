import React from 'react';

import './styles.scss';

const Menu = ( {menuOpen, setMenuOpen} ) => (
  <div className={"menu "+ (menuOpen && "active")}>
    <ul onClick={() => setMenuOpen(false)}>
      <li>
        <a href="#intro">Accueil</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#works">Works</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </div>
);

export default Menu;
