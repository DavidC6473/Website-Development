import React, { useState } from 'react';
import Modal from 'react-modal';
import './project.css';
import { Link } from 'react-router-dom';

import skillsData from './skills.json';

Modal.setAppElement('#root'); // Add this line to define the app element

const Project = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='dc__projects' id='projects'>
      <div className='dc__projects-content'>
        <div className='dc__projects-title'>
          <p className='dc-projects-title-animation'>PROJECTS</p>
        </div>
        <div className='project1'>
          <p className='dc__projects-animation'>
            <a className='a_p1' href='/vrjam'>
              VR Jam
            </a>
          </p>
        </div>
        <div className='project2'>
          <p className='dc__projects-animation'>
            <a className='a_p2' href='/nbaapp'>
              NBA App
            </a>
          </p>
        </div>
        <div className='project3'>
          <p className='dc__projects-animation'>
            <a className='a_p4' href='/java'>
              Art-Palette
            </a>
          </p>
        </div>
        <div className='project4'>
          <p className='dc__projects-animation'>
            <a className='a_p3' href='/turtle'>
              Fractals
            </a>
          </p>
        </div>
        <div className='project3'>
          <p className='dc__projects-animation'>
            <a className='a_p4' href='/other'>
              Other Work
            </a>
          </p>
        </div>
        <div className='dc__projects-title'>
          <p className='dc-projects-title-animation'>SKILLS</p>
        </div>
        <div className='dc__skills-grid'>
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className='dc__skill'
              onClick={() => openModal(skill)}
            >
              <i className={`devicon ${skill.logo} skill-logo`}></i>
              <p className='dc__skill-name'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Skill Modal'
        className='modal'
        overlayClassName='modal-overlay'
        ariaHideApp={false} // Set ariaHideApp to false
      >
        {selectedSkill && (
          <div>
            <i className={`devicon ${selectedSkill.logo} modal-logo`}></i>
            <h2 className='modal-skill-name'>{selectedSkill.name}</h2>
            <p className='modal-text'>{selectedSkill.paragraph}</p>
            <a className='modal-link' href={selectedSkill.link} target='_blank'>Learn more</a>
          </div>
        )}
        <button className='modal-close-button' onClick={closeModal}>
          X
        </button>
      </Modal>
    </div>
  );
};

export default Project;
