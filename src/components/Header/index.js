// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import { GitHub, LinkedIn } from '@material-ui/icons';

// == Import
import './styles.scss';

// == Composant
const Header = ({ menuOpen, setMenuOpen }) => (

  <div className={"header " + (menuOpen && "active")}>
    <div className="wrapper">
      <div className="left">
        <a href="/" className="logo">C.L</a>
        <div className="itemContainer">
          <GitHub className="icon" />
          <a href='https://github.com/CedricLeizour'><span>Profil GitHub</span></a>
        </div>
        <div className="itemContainer">
          <LinkedIn className="icon" />
          <a href='https://www.linkedin.com/in/cédric-leizour/'><span>Profil LinkedIn</span></a>
        </div>
      </div>
      <div className="right">
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1" />
          <span className="line2" />
          <span className="line3" />
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Header;
