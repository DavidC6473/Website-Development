import React, { useState } from 'react';
import './java.css';
import JavaImage1 from './Palette1.PNG';
import JavaImage2 from './Palette2.PNG';
import JavaImage3 from './Palette3.PNG';

const Java = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [JavaImage1, JavaImage2, JavaImage3];

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='java-container'>
      <div className='java-content'>
        <h2 className='java-heading'>Art-Palette</h2>
        <div className='java-image-container'>
          <img className='java-image' src={images[currentImageIndex]} alt='An image' />
          <button className='java-arrow-left' onClick={prevSlide}>&lt;</button>
          <button className='java-arrow-right' onClick={nextSlide}>&gt;</button>
        </div>
        <p className='java-paragraph'>I created this React web application that allows users to dive into a world of random photos sourced from the Unsplash API and explore their associated color palettes. Let me walk you through the features and functionality of this app.</p>
        <p className='java-paragraph'>When you first launch Art Palette, you'll be greeted with a grid of 30 randomly selected photos, all fetched dynamically from the Unsplash API. Each photo offers a glimpse into the diverse and captivating world of visual imagery.</p>
        <p className='java-paragraph'>Upon selecting a photo that catches your eye, a sleek and elegant modal window appears, showcasing the chosen photo along with its unique color palette. To create these palettes, I employed the powerful Colour Thief library, which extracts prominent colors from the selected image. The result is a beautiful arrangement of color swatches that harmonize with the photo's visual theme.</p>
        <p className='java-paragraph'>One of the standout aspects of Art Palette is the dynamic background color of the modal. To ensure an aesthetically pleasing contrast, I implemented a clever algorithm that calculates the opposite color on the color wheel based on the dominant color in the palette. This creates a visually striking effect, enhancing the overall experience.</p>
        <p className='java-paragraph'>I wanted to provide users with the ability to interact with the color palettes and easily incorporate them into their creative endeavors. You can simply click on any individual color swatch, and its value will be copied directly to your clipboard. This makes it effortless to integrate these colors into your design projects or share them with others. And if you prefer to copy the entire color palette at once, there's a convenient "Copy Palette" button that does just that.</p>
        <p className='java-paragraph'>To make Art Palette even more tailored to your preferences, I implemented a search function. You can enter specific keywords in the search bar to narrow down the selection of random photos displayed. This allows you to curate the collection and explore images that align with your interests and creative vision.</p>
        <p className='java-paragraph'>Feel free to check out this project and others on my GitHub: </p>
        <p className='java-paragraph'><a className='java-link' href='https://github.com/DavidC6473/Art-Palette' target='_blank'>https://github.com/DavidC6473/Art-Palette</a></p>
      </div>
    </div>
  );
};

export default Java;