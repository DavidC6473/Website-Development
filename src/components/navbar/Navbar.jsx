import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Links = () => (
    <>
    <p class="hover-underline-animation"><a href="https://www.linkedin.com/in/david-clarke-b2b32822b/" target="_blank">LINKEDIN</a></p>
    <p class="hover-underline-animation"><a href="https://github.com/DavidC6473" target="_blank">GITHUB</a></p>
    <p class="hover-underline-animation"><a href="https://drive.google.com/file/d/1kSpHakbIRiE8FOFFsqaDTQ0f7hzUUDoR/view" target="_blank">RESUME</a></p>
    </>
)

const Nav = () => (
    <>
    <p class="hover-underline-animation"><a href="/#home">DAVID CLARKE</a></p>
    <p class="hover-underline-animation"><a href="/#projects">PROJECTS</a></p>
    <p class="hover-underline-animation"><a href="/#contact">CONTACT</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="dc__navbar">
            <div className="dc__navbar-nav">
                <div className='dc__navbar-name'></div>
                <div className="dc__navbar-nav_container">
                    <Nav />
                </div>
                <div className="dc__navbar-menu">
                {toggleMenu
                        ? <RiCloseLine color="#f06a00" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="var(--color-bg)" size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className="dc__navbar-menu_container scale-up-center">
                            <div className="dc__navbar-nav_container-links">
                                <Nav />
                                <Links />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="dc__navbar-links">
                <div className="dc__navbar-links_container">
                    <Links />
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
