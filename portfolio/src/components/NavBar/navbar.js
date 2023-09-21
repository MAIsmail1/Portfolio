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
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Skills</Link>
        <Link className="desktopMenuListItem">Projects</Link>

        </div>
        <button className="desktopMenuBtn">
            <img src = {contactImg} alt="" className="desktopMenuImg" /> Contact Me
        </button>
    </nav>
  )
}

export default Navbar