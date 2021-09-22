// == Import npm
import React, { useState, useEffect } from 'react';
import { AllProjects, ToDoList, Converter, Annuaire } from '../../projectsData';
import DetailsList from './detailsList';

// == Import
import './styles.scss';

// == Composant
const Details = () => {
  const [selected, setSelected] = useState('todolist');
  const [data, setData] = useState([]);

  const list = [
    {
      id: 'todolist',
      title: 'To do List Javascript',
    },
    {
      id: 'converter',
      title: 'Convertisseur de monnaie',
    },
    {
      id: 'annuaire',
      title: 'Annuaire Github',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case ('todolist'):
        setData(ToDoList);
        break;
      case ('converter'):
        setData(Converter);
        break;
      case ('annuaire'):
        setData(Annuaire);
        break;
      default:
        setData(ToDoList);
    }
  }, [selected]);
  return (
    <div className="details" id="détails">
      <h1>Mes Projets en détail</h1>
      <ul>
        {AllProjects && list.map((projectsData) => (
          <DetailsList
            title={projectsData.title}
            active={selected === projectsData.id}
            setSelected={setSelected}
            id={projectsData.id}
          />
        ))}
      </ul>
      {data.map((projectsData) => (
        <div className="container">
          <div className="left">
            <img src={projectsData.image} alt="projet" />
          </div>
          <div className="right">
            <h3 className="title">{projectsData.title}</h3>
            <div className="content">
            <p className="details-title">Description du projet</p>
            <p className="details-content">{projectsData.description}</p>
            <p className="details-title">Technologies utilisées</p>
            <p className="details-content">{projectsData.technos}</p>
            <p className="details-title">Technologies utilisées</p>
            <p className="details-content">{projectsData.technos}</p>
            <p className="details-title">Technologies utilisées</p>
            <p className="details-content">{projectsData.technos}</p>
            </div>
            <div className="button">
              <a href={projectsData.link}><span className="button-link">Voir le projet en ligne</span></a>
              <a href={projectsData.repo}><span className="button-link">Voir le repository Github</span></a>
            </div>
            </div>
          </div>
          
      ))}
    </div>
  );
};
// == Export
export default Details;