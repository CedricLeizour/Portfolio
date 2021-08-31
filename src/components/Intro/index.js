// == Import npm
import React from 'react';
import VideoIntro from 'src/assets/videos/test.mp4';

// == Import

import './styles.scss';


// == Composant
const Intro = () => (
  <div className="intro" id="intro">
    <div className="presentation" id="presentation">
  <p className="bienvenue"> Bienvenue sur mon portfolio :)</p>
  <h1 className="name">Cédric Leizour</h1>
  <h2 className="dev">Développeur web JavaScript</h2>
</div>
  <video  autoPlay loop muted id="videoBG">
    <source src={VideoIntro} type="video/mp4" />
  </video>
  </div>
);

// == Export
export default Intro;
