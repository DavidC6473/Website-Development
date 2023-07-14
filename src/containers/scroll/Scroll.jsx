import React, { useEffect, useState } from 'react';
import './scroll.css';

const Scroll = () => {
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop;

      // Check if user scrolled down or up
      if (scrolled > 0) {
        setScrollDirection('up');
      } else {
        setScrollDirection('down');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToProjects = () => {
    if (window.innerWidth <= 1050) {
      window.scrollTo({
        top: window.innerHeight * 0.9, // Scroll down by 90% of viewport height
        behavior: 'smooth',
      });
    } else {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        window.scrollTo({
          top: projectsSection.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  const scrollButtonContent = scrollDirection === 'up' ? 'TOP' : 'SCROLL';
  const scrollButtonArrowClass = scrollDirection === 'up' ? 'scroll-to-top' : '';

  return (
    <div className={`scroll-button ${scrollButtonArrowClass}`} onClick={scrollDirection === 'up' ? scrollToTop : scrollToProjects}>
      {scrollDirection === 'up' && <span>V</span>}
      <span>{scrollButtonContent}</span>
      {scrollDirection === 'down' && <span>V</span>}
    </div>
  );
};

export default Scroll;


