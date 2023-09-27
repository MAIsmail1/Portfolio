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
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-75} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='tech' spy={true} smooth={true} offset={-75} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-75} duration={500} className="desktopMenuListItem">Skills</Link>
        <Link activeClass='active' to='work' spy={true} smooth={true} offset={-75} duration={500} className="desktopMenuListItem">Projects</Link>

        </div>

        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src = {contactImg} alt="" className="desktopMenuImg" /> Contact Me
        </button>

    </nav>
  )
}

export default Navbar