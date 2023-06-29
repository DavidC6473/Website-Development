import React from 'react';
import './features.css';

const Features = () => {
    const about1 = "Hey! Welcome to my website, built entirely from scratch. I'm David, a developer from Ireland. I recently completed my Interactive Media MSc degree with First Class Honours, and I'm excited to continue expanding my knowledge and skills in this dynamic field.";

    const about2 = "Currently, I'm focusing on enhancing my frontend development abilities, and I'm always eager to take on new challenges and explore the latest web technologies. On this site, you'll find examples of some of my past projects, as well as links to my GitHub and resume.";
    
    const about3 = "So if you're looking for a talented and dedicated web developer to join your team, or if you have a project in mind that you'd like to discuss, I'd love to hear from you! Please feel free to reach out to me, and let's start building something great together.";

    const about4 = "Email :  dcc6473@gmail.com";

    return (
        <div className='about__me' id='aboutMe'>
            <div className='about__me-content'>
                    <p className='aboutMe__text'>{about1}</p>
                    <p className='aboutMe__text'>{about2}</p>
                    <p className='aboutMe__text'>{about3}</p>
                    <p className='aboutMe__text'>{about4}</p>
            </div>
        </div>
    )
}

export default Features;
