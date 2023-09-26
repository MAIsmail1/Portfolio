import React from 'react';
import "./contact.css";
import {FaSquareXTwitter, FaLinkedin, FaGithub} from 'react-icons/fa6';
import {SiGmail} from 'react-icons/si';


const Contact = () => {
  return (
    <section id="contact">
        <div className="contactPage">
        <h2 className="contactPageTitle">Get In Touch</h2>       
                <span className="contactDesc">Let's talk about everything!</span>
                <span className="contactDesc">Don't like forms? Send an email through the icon below. </span>
            <form action="" className="contactForm">
                        <input type = "text" className="name" 
                        placeholder="Insert your name" />
                        <input type = "email" className="email" 
                        placeholder="Insert your email" />
                        <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                <button type="submit" className="btn" value="send">Submit</button>
                <ul className="iconLinks">
                    <li>
                        <a href="https://twitter.com/__mohamedismail" className="link"><FaSquareXTwitter /></a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/mohamed-ismail-28294a171" className="link"><FaLinkedin /></a>
                    </li>
                    <li>
                        <a href="https://GitHub.com/MAIsmail1" className="link"><FaGithub /></a>
                    </li>
                    <li>
                        <a href="mailto:mohamedaismail95@gmail.com" className="link"><SiGmail /></a>
                    </li>
                    </ul> 
            </form>
            </div>
    </section>
  )
}

export default Contact