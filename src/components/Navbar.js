import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Button } from './Button';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =  () => setClick(false);

    const clickLogo = () => {
        setClick(false);
        var element = document.getElementById("hero-section");
        element.scrollIntoView({behavior: "smooth", block: "end"});
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() =>  {
        showButton()
    }, []); 
 
    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <a className="navbar-logo" onClick={clickLogo}>
                <i className="fas fa-code"></i>
                    NARI
                </a>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link className='nav-links'
                            activeClass="active"
                            to="resume"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={closeMobileMenu}
                        >Resume</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to='/skills' className='nav-links' onClick={closeMobileMenu}>
                            Skills
                        </Link>
                    </li> */}
                    <li className="nav-item">
                    <Link className='nav-links'
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={closeMobileMenu}
                        >Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-links-mobile'
                            activeClass="active"
                            to="footer"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={closeMobileMenu}
                        >Contact</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle="btn--outline" path="footer">Contact</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar
