import React from 'react';
import './intro.css';
import bg from '../../assets/mypicture.png'
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import resume from '../../assets/Resume (2).pdf';

const Intro = () => {
  return (
    <section id = "intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="IntroText">I'm <span className="introName">Mohamed</span> <br /> Software Developer</span>
            <p className="introPara">I am a skilled and passionate software developer with  <br /> experience in creating websites and web applications</p>
        <a href={resume} download="Resume">
        <button className="btn"><img src={btnImg} alt="" className="btnImg"/>Hire Me</button>
        </a>
        </div>
        <img src = {bg} alt = "Profile" className="bg" />
    </section>
  )
}

export default Intro;