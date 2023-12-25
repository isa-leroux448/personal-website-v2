import React from "react";
import '../styles.css';
import logo from '../assets/logo.png'
import { useState } from "react";

const NavBar = ({navigateToSlide}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    }

    const handleMouseLeave = () => {
        setShowDropdown(false);
    }

    return (
        <div className="sticky">
            <header className="navBarBg">
                <a href="/">
                    <img src={logo} alt="logo" className="logo" />
                </a>
                <nav>
                    <button className="navBarItem" onClick={() => navigateToSlide(0)}>About</button>
                    <button className="navBarItem" onClick={() => navigateToSlide(1)}>Experience</button>
                    <button className="navBarItem" onClick={() => navigateToSlide(2)}>Skills</button>
                    <button className="navBarItem" onClick={() => navigateToSlide(3)}>Projects</button>
                    <div style={{display: 'inline-block', position: 'relative'}} onMouseLeave={handleMouseLeave}>
                        <button className="navBarItem" style={{width: '120px'}} onMouseEnter={handleMouseEnter}>Contact</button>
                        {showDropdown && (<div style={{position: 'absolute'}}>
                            <a href="https://www.linkedin.com/in/isabella-leroux/" target="_blank">
                                <button className="dropdownItem">LinkedIn</button>
                            </a>
                            <a href="" target="_blank">
                                <button className="dropdownItem">Resume</button>
                            </a>
                            <a href="https://github.com/isa-leroux448" target="_blank">
                                <button className="dropdownItem">GitHub</button>
                            </a>
                            <a href="mailto:isabella_leroux@yahoo.ca">
                                <button className="dropdownItem">Email</button>
                            </a>
                        </div>)}
                    </div>
                </nav>
            </header>
            <div className="line" />
        </div>
    );
}

export default NavBar;
