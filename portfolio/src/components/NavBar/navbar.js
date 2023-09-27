import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpg';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';
const Navbar = () => {
  return (
    <nav className="navbar">
        <img src = {logo} alt = "Logo" className = "logo"/>
        <div className="desktopMenu">
        <a className="desktopMenuListItem">Home</a>
        <a href="#skills" className="desktopMenuListItem">About</a>
        <a href="#tech" className="desktopMenuListItem">Skills</a>
        <a href="#work" className="desktopMenuListItem">Projects</a>

        </div>
        <a href="#contact">
        <button className="desktopMenuBtn">
            <img src = {contactImg} alt="" className="desktopMenuImg" /> Contact Me
        </button>
        </a>
    </nav>
  )
}

export default Navbar