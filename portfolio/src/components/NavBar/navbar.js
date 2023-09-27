import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpg';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';
import {BiMenu} from "react-icons/bi";


const Navbar = () => {
const [showMenu, setShowMenu] = useState(false)

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

        <a  className = "mobMenu" onClick={() => setShowMenu(!showMenu)}><BiMenu /></a>
        <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-75} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='tech' spy={true} smooth={true} offset={-75} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-75} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to='work' spy={true} smooth={true} offset={-75} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-75} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar