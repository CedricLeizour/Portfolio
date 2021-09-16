import React from 'react';
import { useState } from 'react';
import Image from 'src/assets/images/photo pro.jpg';

// == Import
import './styles.scss';

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={Image} alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Votre nom" />
          <input type="text" placeholder="Votre adresse mail" />
          <textarea placeholder="Votre message"></textarea>
          <button type="submit">Envoyer</button>
          {message && <span>Merci pour votre message, je vous réponds dès que possible !</span>}
        </form>
      </div>
    </div>
  );
};

// == Export
export default Contact;
