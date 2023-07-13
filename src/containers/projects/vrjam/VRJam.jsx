import React, { useState, useEffect } from 'react';
import './vrjam.css';
import VRJamImage from './VRJam.png';
import icons from '../icons.json';
import '../icons.css';

const VRJam = () => {
  const selectedIcons = ['TypeScript', 'HTML', 'CSS', 'Threejs', 'NodeJS', 'ExpressJS', 'Socketio'];
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = VRJamImage;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className='vr-container'>
      <div className='vr-content'>
        <h2 className='vr-heading'>VRJam</h2>
        <div className='vr-image-container'>
          {!imageLoaded && <div className='placeholder' />}
          <img
            className={`vr-image ${imageLoaded ? 'loaded' : ''}`}
            src={VRJamImage}
            alt='An image'
            style={{ display: imageLoaded ? 'block' : 'none' }}
          />
        </div>
        <div className='vr-icons-container'>
          {selectedIcons.map((icon) => {
            const selectedIcon = icons.find((item) => item.name === icon);
            return selectedIcon ? (
              <i key={icon} className={`devicon ${selectedIcon.link} vr-icon`} />
            ) : null;
          })}
        </div>
        <p className='vr-paragraph'>I created VRJam, a web application that allows users to interact in a VR environment and play music together in real time using our computer keyboard. To build VRJam, I utilized a combination of TypeScript, Node.js, Three.js, Express.js, Socket.io, WebRTC, and Tone.js. The application comprises two main components: the server and the client.</p>
<p className='vr-paragraph'>On the server side, I employed Node.js and Express.js to develop a REST API responsible for handling user authentication and managing the virtual environment. Socket.io facilitated bidirectional communication between the server and the client, enabling seamless real-time data exchange among users. Additionally, I utilized WebRTC for peer-to-peer communication and Tone.js for audio processing and synthesis on the server side. These technologies ensured synchronized audio output from each client with minimal latency.</p>
<p className='vr-paragraph'>On the client side, I utilized Three.js to create an immersive 3D virtual environment where users can interact with VR. This environment includes a virtual room for user movement and a stage for performances. I also employed Socket.io on the client side to establish a connection with the server, allowing real-time communication with other users in the virtual room. With Tone.js, users can play and hear music in real-time by handling audio processing and synthesis on the client side.</p>
<p className='vr-paragraph'>During the development of VRJam, I encountered one of the main technical challenges, which was achieving sufficiently low latency to provide a seamless real-time music collaboration experience. Despite implementing various latency reduction techniques like WebRTC for peer-to-peer communication and server-side audio processing with Tone.js, I couldn't fully achieve the target latency due to inherent network limitations. Overcoming this obstacle demanded extensive experimentation and optimization to strike the right balance between latency reduction and audio quality.</p>
<p className='vr-paragraph'>Another challenge I faced was intermittent disconnections between users caused by network instability. To address this issue, I made modifications to the Socket.io connection protocol and developed a custom client-side reconnection algorithm. These measures ensured that users automatically reconnected to the server in the event of a disconnection.</p>
<p className='vr-paragraph'>In conclusion, creating VRJam required a deep understanding of web technologies and audio processing, as well as expertise in 3D graphics programming and VR development. Despite the challenges I encountered, the resulting application showcases the immense potential of modern web technologies to foster new forms of remote collaboration and creativity in the field of music.</p>
<p className='vr-paragraph'>Feel free to explore this project and others on my GitHub:</p>
<p className='vr-paragraph'><a className='vr-link' href='https://github.com/DavidC6473/VRJam' target='_blank'>https://github.com/DavidC6473/VRJam</a></p>      </div>
    </div>
  );
};

export default VRJam;
