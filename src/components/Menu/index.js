import React from 'react';
import { Link } from 'react-router-dom';
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
        <a href="#works">Works</a>
      </li>
<li onClick={() => setMenuOpen(false)}>
        <a href="#contact">Contact</a>
      </li> 
    </ul>
  </div>
);

export default Menu;




{/* <li onClick={() => setMenuOpen(false)}>
        <a href="#intro">Accueil</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#works">Works</a>
      </li>
<li onClick={() => setMenuOpen(false)}>
        <a href="#contact">Contact</a>
      </li> 
 */}
