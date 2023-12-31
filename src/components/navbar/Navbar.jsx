import React, { useState, useEffect, useRef } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import resume from './David-Clarke-CV.pdf';

const Links = ({ closeMenu }) => (
  <>
    <p className="hover-underline-animation" onClick={closeMenu}>
      <a href={resume} target="_blank">RESUME</a>
    </p>
    <p className="hover-underline-animation" onClick={closeMenu}>
      <a href="https://github.com/DavidC6473" target="_blank">
        GITHUB<i className="devicon-github-original"></i>
      </a>
    </p>
    <p className="hover-underline-animation" onClick={closeMenu}>
      <a href="https://www.linkedin.com/in/david-clarke-b2b32822b/" target="_blank">
        LINKED<i class="devicon-linkedin-plain"></i>
        </a>
    </p>
  </>
);

const Nav = ({ closeMenu }) => {
  const handleClick = (event) => {
    event.preventDefault();
    const target = event.target.getAttribute("href");
    if (target === "#contact") {
      const currentPath = window.location.pathname;
      const newPath = currentPath + target;
      window.location.href = newPath;
    } else {
      window.location.href = target;
    }
    closeMenu();
  };

  return (
    <>
      <p className="hover-underline-animation" onClick={handleClick}>
        <a href="/">HOME</a>
      </p>
      <p className="hover-underline-animation" onClick={handleClick}>
        <a href="/#projects">PROJECTS</a>
      </p>
      <p className="hover-underline-animation" onClick={handleClick}>
        <a href="#contact">CONTACT</a>
      </p>
    </>
  );
};



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(false);
  const dropdownRef = useRef(null);

  const closeMenu = () => {
    setToggleMenu(false);
    setToggleLinks(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className="dc__navbar">
      <div className="dc__navbar-nav">
        <div className="dc__navbar-name"></div>
        <div className="dc__navbar-nav_container">
           <div className='dc__navbar-nav'>
              <Nav closeMenu={closeMenu} />
            </div>
            <div className='dc__navbar-links'>
              <Links closeMenu={closeMenu} />
            </div>
        </div>
        <div className="dc__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine color="#f06a00" size={27} onClick={closeMenu} />
          ) : (
            <RiMenu3Line color="var(--color-bg)" size={27} onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <div className="dc__navbar-menu_container scale-up-center" ref={dropdownRef}>
              <div className="dc__navbar-nav_container-links">
                <Nav closeMenu={closeMenu} />
                <Links closeMenu={closeMenu} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
