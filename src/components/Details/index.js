// == Import npm
import React, { useState, useEffect } from 'react';
import {
  AllProjects,
  WhatToWatch,
  RockPaperScissors,
  ToDoList,
  Converter,
  Annuaire,
  Chatroom,
  Oboardgame,
} from '../../projectsData';
import DetailsList from './detailsList';

// == Import
import './styles.scss';

// == Composant
const Details = () => {
  const [selected, setSelected] = useState('whattowatch');
  const [data, setData] = useState([]);

  const list = [
    {
      id: 'whattowatch',
      title: 'What To Watch ?',
    },
    {
      id: 'rockpaperscissors',
      title: 'Rock Paper Scissors',
    },
    {
      id: 'todolist',
      title: 'To do List Javascript',
    },
    {
      id: 'converter',
      title: 'Converter React',
    },
    {
      id: 'annuaire',
      title: 'Annuaire Github API',
    },
    {
      id: 'chatroom',
      title: 'Chatroom React Redux',
    },
    {
      id: 'oboardgame',
      title: 'Projet Oboardgame',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case ('whattowatch'):
        setData(WhatToWatch);
        break;
      case ('rockpaperscissors'):
        setData(RockPaperScissors);
        break;
      case ('todolist'):
        setData(ToDoList);
        break;
      case ('converter'):
        setData(Converter);
        break;
      case ('annuaire'):
        setData(Annuaire);
        break;
      case ('chatroom'):
        setData(Chatroom);
        break;
      case ('oboardgame'):
        setData(Oboardgame);
        break;
      default:
        setData(WhatToWatch);
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
            <div className="content">
              <h3 className="title">{projectsData.title}</h3>
              <p className="details-title">Description du projet</p>
              <p className="details-content">{projectsData.description}</p>
              <p className="details-title">Technologies utilisées</p>
              <p className="details-content">{projectsData.technos}</p>
              {projectsData.contexte && <p className="details-title">Contexte</p>}
              {projectsData.contexte && <p className="details-content">{projectsData.contexte}</p>}
              <div className="links">
                {projectsData.link && <a href={projectsData.link} className="button-link"> <span>Voir le projet en ligne</span></a>}
                <a href={projectsData.repo} className="button-link"><span>Voir le repository Github</span></a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
// == Export
export default Details;
