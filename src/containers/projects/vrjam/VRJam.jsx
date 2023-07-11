import React from 'react';
import './vrjam.css';
import VRJamImage from './VRJam.png';
import icons from '../icons.json';
import '../icons.css';

const VRJam = () => {
  const selectedIcons = ['TypeScript', 'HTML', 'CSS', 'Threejs', 'NodeJS', 'ExpressJS', 'Socketio'];

  return (
    <div className='vr-container'>
      <div className='vr-content'>
        <h2 className='vr-heading'>VRJam</h2>
        <div className='vr-image-container'>
          <img className='vr-image' src={VRJamImage} alt='An image' />
        </div>
        <div className='vr-icons-container'>
          {selectedIcons.map((icon) => {
            const selectedIcon = icons.find((item) => item.name === icon);
            return selectedIcon ? (
              <i key={icon} className={`devicon ${selectedIcon.link} vr-icon`} />
            ) : null;
          })}
        </div>
        <p className='vr-paragraph'>VRJam is a web application that allows users to interact in a VR environment and play music together in real time using their computer keyboard. VRJam was created using a combination of TypeScript, Node.js, Three.js, Express.js, Socket.io, WebRTC, and Tone.js. The application consists of two main components: the server and the client.</p>
        <p className='vr-paragraph'>On the server side, Node.js and Express.js were used to create a REST API that handles user authentication and manages the virtual environment. Socket.io was used to establish a bidirectional communication channel between the server and the client, allowing for real-time data exchange between users. Additionally, WebRTC was used for peer-to-peer communication and Tone.js was used to handle audio processing and synthesis on the server side, ensuring that the audio output from each client was synchronized and played back with minimal latency.</p>
        <p className='vr-paragraph'>On the client side, Three.js was used to create a 3D virtual environment that users can interact with in VR. The environment consists of a virtual room where users can move around and a stage where they can perform. Socket.io was also used on the client side to establish a connection with the server and enable real-time communication with other users in the virtual room. Tone.js was used to handle audio processing and synthesis on the client side, allowing users to play and hear music in real-time.</p>
        <p className='vr-paragraph'>However, one of the main technical challenges in the development of VRJam was achieving low enough latency to provide a seamless real-time music collaboration experience. Despite implementing a range of latency reduction techniques such as WebRTC for peer-to-peer communication and server-side audio processing with Tone.js, the target latency was not fully achieved due to the inherent limitations of network latency. This required a significant amount of experimentation and optimization to find the optimal balance between latency reduction and audio quality.</p>
        <p className='vr-paragraph'>Another challenge faced during development was intermittent disconnections between users due to network instability. This required modifications to the Socket.io connection protocol, as well as the development of a custom client-side reconnection algorithm to ensure that users were automatically reconnected to the server in the event of a disconnection.</p>
        <p className='vr-paragraph'>Overall, the technical implementation of VRJam required a deep understanding of web technologies and audio processing, as well as expertise in 3D graphics programming and VR development. Despite the challenges faced, the resulting application is a testament to the power of modern web technologies and their potential to enable new forms of remote collaboration and creativity in the world of music.</p>
        <p className='vr-paragraph'>Feel free to check out this project and others on my GitHub: </p>
        <p className='vr-paragraph'><a className='vr-link' href='https://github.com/DavidC6473/VRJam' target='_blank'>https://github.com/DavidC6473/VRJam</a></p>
      </div>
    </div>
  );
};

export default VRJam;
