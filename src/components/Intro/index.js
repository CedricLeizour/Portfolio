// == Import npm
import React, { useEffect, useRef } from 'react';
import VideoIntro from 'src/assets/videos/test.mp4';
import Poster from 'src/assets/images/poster.png';
import { init } from 'ityped';

// == Import

import './styles.scss';

// == Composant
const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 1000,
      startDelay: 1000,
      strings: ['motivé', 'curieux', 'passionné', 'disponible', 'sympa ;)'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="presentation" id="presentation">
        <div className="préambule">
          <p> Bienvenue sur mon site personnel.</p>
          <p> Je vous souhaite une excellente visite.</p>
        </div>
        <h1 strong className="name">Cédric Leizour</h1>
        <h2 strong className="dev">Développeur web JavaScript <span className="anim" ref={textRef} /></h2>
      </div>
      <video autoPlay loop muted id="videoBG" poster={Poster}>
        <source src={VideoIntro} type="video/mp4" />
      </video>
    </div>
  );
};

// == Export
export default Intro;
