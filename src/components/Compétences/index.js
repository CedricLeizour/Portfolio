// == Import npm
import React from 'react';
import Skills from '../../skills';

// == Import
import './styles.scss';

// == Composant
const Compétences = () => (
  <div className="compétences" id="compétences">
    <h2 className="title"> Mes compétences </h2>
    <div className="container">
      {Skills.map((Skills) => (
        <div className="element">
          <img className="element-icon" src={Skills.img} alt="compétences" />
          <p className="element-name">{Skills.title}</p>
        </div>
      ))}
    </div>
  </div>
);

// == Export
export default Compétences;
