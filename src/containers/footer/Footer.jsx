import React, { useRef } from 'react';
import './footer.css';
import apiKey from './apiKey';

const sendEmail = (event, formRef) => {
  event.preventDefault();

  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const message = event.target.elements.message.value;

  const data = {
    sender: {
      name: 'david-clarke.com',
      email: 'd_cc@live.ie',
    },
    to: [
      {
        email: 'dcc6473@gmail.com',
      },
    ],
    subject: 'New Contact Form Submission',
    htmlContent: `<html><head></head><body><p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p></body></html>`,
  };

  fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        console.log('Email sent!');
        alert('Email sent!');

        // Reset form fields
        formRef.current.reset();
      } else {
        throw new Error('Failed to send email.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Email not sent, please try again');
    });
};

const Footer = () => {
  const formRef = useRef(null);

  return (
    <div className='dc__footer'>
      <div className='dc__footer-content' id='contact'>
        <div className='dc__footer-title'>
          <p className='dc__footer-title-animation'>Get In Touch</p>
        </div>
        <div className='dc__footer-contactform'>
          <form className="dc__contactform" ref={formRef} onSubmit={(event) => sendEmail(event, formRef)}>
            <input type="text" className='form-name' name='name' placeholder='Your Name' />
            <input type="email" name='email' placeholder='Your Email' />
            <textarea name='message' placeholder='Message'></textarea>
            <button className='send-button' type='submit' name='submit'>SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;