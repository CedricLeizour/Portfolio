import React, { useState } from 'react';
import Image from 'src/assets/images/photo pro.jpg';

// == Import
import './styles.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [thanks, setThanks] = useState('');

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('gmail', templateId, variables)
      .then((response) => {
        setName('');
        setEmail('');
        setMessage('');
      });
  };

  const handleSubmit = (event) => {
    if (message !== '') {
      event.preventDefault();
      setName('');
      setEmail('');
      setMessage('');
      setThanks('Merci pour votre message, je tâcherai de vous répondre rapidement !');
    }

    sendFeedback('template_ttozg8m', {
      name,
      email,
      message,
    });
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="propos">
          <img src={Image} alt="Cédric Leizour" className="avatar" />
          <p className="propos-paragraphe">En attendant de trouver un nouveau challenge professionnel dans une structure qui saura me faire confiance, je continue à me former quotidiennement sur différentes technologies, principalement avec le langage JavaScript, et j’adore ça !</p>
          <p className="propos-paragraphe">
            Si cette visite vous a plu, que vous avez des projets à me proposer,
            des questions sur mon parcours ou encore une bonne recette de Pasteis de Nata à me communiquer,
            n'hésitez pas à me contacter 😀
          </p>
        </div>
      </div>
      <div className="right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact</h2>
          <div className="contact-input">
            <label className="contact-label" htmlFor="name"> Votre nom : </label>
            <input
              onChange={(event) => setName(event.target.value)}
              type="text"
              id="name"
              value={name}
              placeholder="Votre nom"
              required="true"
              className="input"
            />
          </div>
          <div className="contact-input">
            <label className="contact-label" htmlFor="email"> Votre email : </label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              id="email"
              value={email}
              placeholder="Votre adresse mail"
              required="true"
              className="input"
            />
          </div>
          <div className="contact-input">
            <label className="contact-label" htmlFor="message"> Votre message :</label>
            <textarea
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              placeholder="Votre message..."
              required="true"
              id="message"
            />
          </div>
          <button className="button" type="submit">Envoyer</button>
          <span> {thanks} </span>
        </form>
      </div>
    </div>
  );
};

// == Export
export default Contact;
