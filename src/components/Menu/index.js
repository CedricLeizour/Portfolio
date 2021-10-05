import React from 'react';
import './styles.scss';

const Menu = ( {menuOpen, setMenuOpen} ) => (
  <div className={"menu "+ (menuOpen && "active")}>
    <ul>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#intro">Accueil</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#détails">Projets</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#compétences">Compétences</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </div>
);

export default Menu;
