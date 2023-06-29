import React from 'react';
import './project.css';
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <div className='dc__projects' id='projects'>
            <div className='dc__projects-content'>
                <div className='dc__projects-title'>
                    <p class='dc-projects-title-animation'>PROJECTS</p>
                </div>
                <div className='project1'>
                    <p class='dc__projects-animation'><a className='a_p1' href="/vrjam">VR Jam</a></p>
                </div>
                <div className='project2'>
                    <p class='dc__projects-animation'><a className='a_p2' href="/nbaapp">NBA App</a></p>
                </div>
                <div className='project3'>
                    <p class='dc__projects-animation'><a className='a_p3' href="/turtle">Python Fractals</a></p>
                </div>
                <div className='project4'>
                    <p class='dc__projects-animation'><a className='a_p4' href="/java">Art-Palette</a></p>
                </div>
            </div>
        </div>
    )
}

export default Project
