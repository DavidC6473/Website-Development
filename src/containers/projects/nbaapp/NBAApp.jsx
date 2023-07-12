import React, { useState, useEffect } from 'react';
import './nbaapp.css';
import NBAAppImage from './NBAApp.png';
import icons from '../icons.json';
import '../icons.css';

const NBAApp = () => {
  const selectedIcons = ['Swift'];
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = NBAAppImage;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className='nba-container'>
      <div className='nba-content'>
        <h2 className='nba-heading'>NBA App</h2>
        <div className='nba-image-container'>
          {!imageLoaded && <div className='placeholder' />}
          <img
            className={`nba-image ${imageLoaded ? 'loaded' : ''}`}
            src={NBAAppImage}
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
        <p className='nba-paragraph'>I recently developed an iPhone application that utilizes CoreData to store NBA teams and other information. One of the features I am most proud of is the ability for users to add and edit cells on the table, including saving new logos, names, abbreviations, stadium images, stadium names, cities, divisions, conferences, player images, draft information, date of birth, and height.</p>
        <p className='nba-paragraph'>In addition, I integrated the ability for users to select photos from their photo library to use as team logos and player images. Users can also delete existing cells and mark items as favorites using the switch feature.</p>
        <p className='nba-paragraph'>While implementing filtering features using the favorites button and search bar was not successful in this version of the application, I am dedicated to continuously improving my skills and knowledge in iOS development and plan to revisit these features in the future.</p>
        <p className='nba-paragraph'>The application includes three different web pages that can be accessed through the selected team, including the team's official website, the team's roster page, and the Wikipedia page for the team's best player. Access to these web pages is a feature that adds value to the application, allowing users to quickly and easily find relevant information about their favorite NBA teams.</p>
        <p className='nba-paragraph'>To ensure consistency in the application's appearance, I used GIMP to edit multi-sized app icon images and other images, making sure that all images were edited to be equally sized for a more polished and professional look.</p>
        <p className='nba-paragraph'>Overall, I am proud of the work I have done on this iPhone application. It is a demonstration of my skills and knowledge in iOS development and showcases my dedication to producing high-quality applications. The ability to add, edit, and delete cells, select photos, mark items as favorites, and access team-related web pages are all features that make this application a valuable tool for NBA fans. I look forward to continuing to improve my abilities and working on new projects in the future.</p>
        <p className='nba-paragraph'>Feel free to check out this project and others on my GitHub: </p>
        <p className='nba-paragraph'><a className='nba-link' href='https://github.com/DavidC6473/Swift-NBA-Teams-App' target='_blank'>https://github.com/DavidC6473/Swift-NBA-Teams-App</a></p>
      </div>
    </div>
  );
};

export default NBAApp;