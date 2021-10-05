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
        <img src={Image} alt="Cédric Leizour" />
      </div>
      <div className="right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact</h2>
          <div className="contact-input">
            <label className="contact-label" for="name"> Votre nom : </label>
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
          <label className="contact-label" for="name"> Votre email : </label>
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
          <label className="contact-label" for="message"> Votre message :</label>
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
