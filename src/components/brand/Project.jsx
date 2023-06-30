import React from 'react';
import './project.css';
import { Link } from 'react-router-dom';

const Project = () => {
  const skills = [
    { name: 'JS', logo: 'devicon-javascript-plain' },
    { name: 'TS', logo: 'devicon-typescript-plain' },
    { name: 'React', logo: 'devicon-react-original' },
    { name: 'Python', logo: 'devicon-python-plain' },
    { name: 'NodeJS', logo: 'devicon-nodejs-plain' },
    { name: 'ExpressJS', logo: 'devicon-express-original' },
    { name: 'Swift', logo: 'devicon-swift-plain' },
    { name: 'Git', logo: 'devicon-git-plain' },
  ];

  return (
    <div className='dc__projects' id='projects'>
      <div className='dc__projects-content'>
        <div className='dc__projects-title'>
          <p className='dc-projects-title-animation'>PROJECTS</p>
        </div>
        <div className='project1'>
          <p className='dc__projects-animation'>
            <a className='a_p1' href="/vrjam">VR Jam</a>
          </p>
        </div>
        <div className='project2'>
          <p className='dc__projects-animation'>
            <a className='a_p2' href="/nbaapp">NBA App</a>
          </p>
        </div>
        <div className='project3'>
          <p className='dc__projects-animation'>
            <a className='a_p4' href="/java">Art-Palette</a>
          </p>
        </div>
        <div className='project4'>
          <p className='dc__projects-animation'>
            <a className='a_p3' href="/turtle">Fractals</a>
          </p>
        </div>
        <div className='dc__projects-title'>
          <p className='dc-projects-title-animation'>SKILLS</p>
        </div>
        <div className='dc__skills-grid'>
          {skills.map((skill, index) => (
            <div key={index} className='dc__skill'>
              <i className={`devicon ${skill.logo} skill-logo`}></i>
              <p className='dc__skill-name'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
