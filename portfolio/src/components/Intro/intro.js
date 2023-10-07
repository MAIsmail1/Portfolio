import React from 'react';
import './intro.css';
import bg from '../../assets/mypicture.png'

import btnImg from '../../assets/hireme.png';
import resume from '../../assets/Mohamed Ismail Resume.pdf';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  return (
    <section id="intro" >
      <div className="introContent" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Mohamed</span> <br />
          <div className="animationText">
          <TypeAnimation
            sequence={[
              'Software Developer',
              2500,
              'Web Designer',
              2500
            ]}
            style={{ fontSize: '1rem'}}
            repeat={Infinity}
          />
          </div>
        </span>
        <p className="introPara">I am a skilled and passionate software developer with  <br /> experience in creating websites and web applications</p>
        <a href={resume} download="Resume" className='btnRes'>
          <button className="btn"><img src={btnImg} alt="" className="btnImg" />Resume</button>
        </a>
      </div>
      <div>
        <img src={bg} alt="Profile" className="bg hideImgSmall" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" />
      </div>
    </section>
  )
}

export default Intro;