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

  const scrollButtonContent = scrollDirection === 'up' ? 'TOP' : 'SCROLL';
  const scrollButtonArrowClass = scrollDirection === 'up' ? 'scroll-to-top' : '';

  return (
    <div className={`scroll-button ${scrollButtonArrowClass}`} onClick={scrollToTop}>
      <span>{scrollButtonContent}</span>
      <span>&#129147;</span>
    </div>
  );
};

export default Scroll;
