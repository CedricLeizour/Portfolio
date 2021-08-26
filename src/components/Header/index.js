// == Import npm
import React from 'react';
import { Phone, Mail } from '@material-ui/icons';

// == Import
import './styles.scss';

// == Composant
const Header = ({ menuOpen, setMenuOpen }) => (

  <div className={"header " + (menuOpen && "active")}>
    <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo">
          Cédric Leizour
        </a>
        <div className="itemContainer">
          <Phone className="icon" />
          <span>0649852347</span>
        </div>
        <div className="itemContainer">
          <Mail className="icon" />
          <span>cedricleizour@gmail.com</span>
        </div>
      </div>
      <div className="right">
        <div className="burger" onClick={()=> setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Header;
