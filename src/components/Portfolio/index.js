// == Import npm
import React, { useState } from 'react';
import Image from 'src/assets/images/photo pro.jpg';
import PortfolioList from './portfolioList';


// == Import
import './styles.scss';

// == Composant
const Portfolio = () => {
  const [selected, setSelected] = useState('featured');
  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'featured2',
      title: 'Featured2',
    },
    {
      id: 'featured3',
      title: 'Featured3',
    },
    {
      id: 'featured4',
      title: 'Featured4',
    },
    {
      id: 'featured5',
      title: 'Featured5',
    },
    {
      id: 'featured6',
      title: 'Featured6',
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Mes Projets</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
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
};
// == Export
export default Portfolio;
