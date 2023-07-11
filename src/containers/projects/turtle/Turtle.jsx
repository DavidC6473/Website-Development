import React from 'react';
import './turtle.css';
import TurtleImage from './turtle.png';
import icons from '../icons.json';
import '../icons.css';

const Turtle = () => {
  const selectedIcons = ['Python'];

  return (
    <div className='turtle-container'>
      <div className='turtle-content'>
        <h2 className='turtle-heading'>Python Fractals</h2>
        <div className='turtle-image-container'>
          <img className='turtle-image' src={TurtleImage} alt='An image' />
        </div>
        <div className='vr-icons-container'>
          {selectedIcons.map((icon) => {
            const selectedIcon = icons.find((item) => item.name === icon);
            return selectedIcon ? (
              <i key={icon} className={`devicon ${selectedIcon.link} vr-icon`} />
            ) : null;
          })}
        </div>
        <p className='turtle-paragraph'>In this project, I developed a Turtle Fractal Generator using Python and Tkinter. The purpose of the interface was to allow users to generate fractals easily with IDLE. I was responsible for the entire development of the project, and I am proud to say that I created all the fractals and designed the UI of the interface.</p>
        <p className='turtle-paragraph'>The fractals included in the generator were Fern, Flake, Pentaplex, Square, H Tree, CircleTriangle, Circle3, Carpet3, Spiral, and Bent Tree. Each fractal was unique, and I experimented with different shapes and rules to create visually appealing patterns. I also made small modifications to some of the fractals to improve their appearance, such as adding filled circles in the Fern recursion to make it look like berries.</p>
        <p className='turtle-paragraph'>To provide users with more control over the fractal generation, I designed the UI with several features. I included an entry input for the x and y positions, allowing users to position the pen on any point of the canvas to start the drawing. The user could also turn the pen 45° to the left or right using two buttons, set the pen and canvas colours with two options menus, clear all drawings with a clear all button, and display all fractals using a display all button. I also created an information panel that displays the name, length, and order of the fractal drawn.</p>
        <p className='turtle-paragraph'>During the development of the interface, I encountered a challenge with the UI's appearance on different platforms. Tkinter takes some of its elements from the OS it is operating on, which caused issues when I tried to run the interface on a Mac. To address this problem, I had to design the UI to look nice on both Windows and Mac platforms using the highlightbackground feature.</p>
        <p className='turtle-paragraph'>Overall, this project allowed me to develop my skills in Python and Tkinter and challenged me to create visually appealing fractals while providing users with a functional and user-friendly interface.</p>
        <p className='turtle-paragraph'>Feel free to check out this project and others on my GitHub: </p>
        <p className='turtle-paragraph'><a className='turtle-link' href='https://github.com/DavidC6473/Python-Turtle' target='_blank'>https://github.com/DavidC6473/Python-Turtle</a></p>
      </div>
    </div>
  );
};

export default Turtle;