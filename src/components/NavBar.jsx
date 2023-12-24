import React from "react";
import '../styles.css';
import logo from '../assets/logo.png'

const NavBar = ({navigateToSlide}) => {
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
                </nav>
            </header>
            <div className="line" />
        </div>
    );
}

export default NavBar;
