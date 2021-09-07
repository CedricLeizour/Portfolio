// == Import npm
import React from 'react';
import Image from 'src/assets/images/photo pro.jpg';

// == Import
import './styles.scss';

// == Composant
const Portfolio = () => (
  <div className="portfolio" id="portfolio">
    <h1>Mes Projets</h1>
    <ul>
      <li>Projet 1</li>
      <li>Projet 2</li>
      <li>Projet 3</li>
      <li>Projet 4</li>
      <li>Projet 5</li>
      <li>Projet 6</li>
    </ul>
    <div className="container">
      <div className="item">
        <img src={Image} alt="test" />
        <h3>Projet 0</h3>
      </div>
      <div className="item">
        <img src={Image} alt="test" />
        <h3>Projet 1</h3>
      </div>
      <div className="item">
        <img src={Image} alt="test" />
        <h3>Projet 2</h3>
      </div>
      <div className="item">
        <img src={Image} alt="test" />
        <h3>Projet 3</h3>
      </div>
      <div className="item">
        <img src={Image} alt="test" />
        <h3>Projet 4</h3>
      </div>
      <div className="item">
        <img src={Image} alt="test" />
        <h3>Projet 5</h3>
      </div>
    </div>
  </div>
);

// == Export
export default Portfolio;
