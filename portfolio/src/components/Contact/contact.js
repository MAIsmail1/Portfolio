import React, { useRef } from 'react';
import "./contact.css";
import {FaSquareXTwitter, FaLinkedin, FaGithub} from 'react-icons/fa6';
import {SiGmail} from 'react-icons/si';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_i2nr9hs', 'template_8q4dkwc', form.current, '4bOxj7z7fT49bdV57')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              Swal.fire(
                'Done!',
                'Your response has been sent!',
                'success'
              )
          }, (error) => {
              console.log(error.text);
          });
          
        };

  return (
    <section id="contact">
        <div className="contactPage">
        <h2 className="contactPageTitle">Get In Touch</h2>       
                <span className="contactDesc">Let's talk about everything!</span>
                <span className="contactDesc">Don't like forms? Send an email through the icon below. </span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                        <input type = "text" className="name" 
                        placeholder="Your Name" name="from_name" required/>
                        <input type = "email" className="email" 
                        placeholder="Your Email" name="from_email" required/>
                        <textarea className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
                <button type="submit" value="Send" className="btn">Submit</button>

                <br />
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