import React from 'react';
import './intro.css';
import bg from '../../assets/mypicture.png'
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import resume from '../../assets/Resume (2).pdf';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  return (
    <section id = "intro" >
        <div className="introContent" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            <span className="hello">Hello,</span>
            <span className="IntroText">I'm <span className="introName">Mohamed</span> <br /> 
            <TypeAnimation
            sequence={[
              'Software Developer',
              2500,
              'Web Designer',
              2500,
              'I Love Software Development',
              2500
            ]}
            repeat={Infinity}
            />
            </span>
            <p className="introPara">I am a skilled and passionate software developer with  <br /> experience in creating websites and web applications</p>
        <a href={resume} download="Resume">
        <button className="btn"><img src={btnImg} alt="" className="btnImg"/>Hire Me</button>
        </a>
        </div>
        <img src = {bg} alt = "Profile" className="bg" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true"/>
    </section>
  )
}

export default Intro;