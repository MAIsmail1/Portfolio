import React from 'react';
import './intro.css';
import bg from '../../assets/mypicture.png'
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';



const Intro = () => {

  return (
    <section id = "intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="IntroText">I'm <span className="introName">Mohamed</span> <br /> Software Engineer</span>
            <p className="introPara">I am a skilled and passionate software engineer with experience in creating <br /> websites and web applications</p>
        <Link>
        <button className="btn"><img src={btnImg} alt="" className="btnImg"/>Hire Me</button>
        </Link>
        </div>
        <img src = {bg} alt = "Profile" className="bg" />
    </section>
  )
}

export default Intro;