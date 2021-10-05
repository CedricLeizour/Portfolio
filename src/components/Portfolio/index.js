// == Import npm
import React, { useState, useEffect } from 'react';
import { AllProjects, JavascriptProjects, ReactProjects, ReactReduxProjects } from '../../projectsData';
import PortfolioList from './portfolioList';

// == Import
import './styles.scss';

// == Composant
const Portfolio = () => {
  const [selected, setSelected] = useState('all');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'all',
      title: 'Tous mes projets',
    },
    {
      id: 'js',
      title: 'Projets JavaScript',
    },
    {
      id: 'react',
      title: 'Projets React',
    },
    {
      id: 'react-redux',
      title: 'Projets React-Redux',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "all":
        setData(AllProjects);
        break;
      case "js":
        setData(JavascriptProjects);
        break;
      case "react":
        setData(ReactProjects);
        break;
      case "react-redux":
        setData(ReactReduxProjects);
        break;
      default:
        setData(AllProjects);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Mon Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {AllProjects && data.map((projectsData) => (
          <div className="item">
            <img src={projectsData.image} alt="projet" />
            <a href={projectsData.link || projectsData.repo} className="title">
              {projectsData.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
// == Export
export default Portfolio;
