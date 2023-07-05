import React, { useRef } from 'react';
import './footer.css';

const sendEmail = (event, formRef) => {
  event.preventDefault();

  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const message = event.target.elements.message.value;

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);

  fetch('/sendEmail.php', {
    method: 'POST',
    body: formData,
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
