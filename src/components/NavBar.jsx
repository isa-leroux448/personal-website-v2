import React from "react";
import '../styles.css';
import logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <div className="sticky">
            <header className="navBarBg">
                <a href="/">
                    <img src={logo} alt="logo" className="logo" />
                </a>
                <nav>
                    <a href="#about" className="navBarItem">About</a>
                    <a href="#experience" className="navBarItem">Experience</a>
                    <a href="#skills" className="navBarItem">Skills</a>
                    <a href="#projects" className="navBarItem">Projects</a>
                    <a href="#contact" className="navBarItem">Contact</a>
                </nav>
            </header>
            <div className="line" />
        </div>
    );
}

export default NavBar;
