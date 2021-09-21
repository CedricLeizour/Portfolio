import React, { useState } from 'react';
import Image from 'src/assets/images/photo pro.jpg';

// == Import
import './styles.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('gmail', templateId, variables)
      .then((response) => {
        console.log('Yes !');
        setName('');
        setEmail('');
        setMessage('');
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName('');
    setEmail('');
    setMessage('');

    sendFeedback('template_ttozg8m', {
      name,
      email,
      message,
    });
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={Image} alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(event) => setName(event.target.value)}
            type="text"
            id="name"
            value={name}
            placeholder="Votre nom"
            required="true"
          />
          <input
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            id="email"
            value={email}
            placeholder="Votre adresse mail"
            required="true"
          />
          <textarea
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            placeholder="Votre message..."
            required="true"
          />
          <button type="submit">Envoyer</button>
          {/* <span>Merci pour votre message, je vous réponds dès que possible !</span> */}
        </form>
      </div>
    </div>
  );
};

// == Export
export default Contact;
