import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='dc__footer'>
            <div className='dc__footer-content' id='contact'>
                <div className='dc__footer-title'>
                    <p class='dc__footer-title-animation'>Get In Touch</p>
                </div>
                <div className='dc__footer-contactform'>
                    <form class="dc__contactform" /*action='contactform.php' method='post'*/>
                        <input type="text" class='form-name' name='name' placeholder='Your Name'></input>
                        <input type="text" name='email' placeholder='Your Email'></input>
                        <textarea name='message' placeholder='Message'></textarea>
                        <button className='send-button' type='submit' name='submit'>SEND</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
