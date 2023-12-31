import React from 'react';
import './skills.css';
import WebsiteDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import DatabaseDesign from '../../assets/database.png';
import {FaJs, FaJava, FaHtml5, FaCss3Alt, FaPython, FaReact, FaNodeJs, FaBootstrap, FaGit, FaFigma} from 'react-icons/fa';
import {BiLogoPostgresql} from 'react-icons/bi';
import {SiSpringboot, SiDjango, SiJest, SiPostman, SiPowerapps, SiPowerautomate, SiMui} from 'react-icons/si';


const Skills = () => {
  return (
    <section  className="skills" >
            <div id="tech" className='skills' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            <span className="title">About Me</span>
            <br />
            <span className="introMe">
            Welcome to my page and here is a bit about my background. <br /> 
            I started my career in microbiology but I decided to transition into software because, from<br />
             the outside looking in, developers appeared to show a sense of empowerment.<br />
            Also, I wanted to apply the knowledge I gain from learning into every project.
             <br /><br />
            
            After venturing around the idea of self-learning and hitting a wall, I enrolled onto the Full Stack Software Engineer Programme with
            Bright Network. After a year in the industry, I have gained experience in working with agile teams, pair-porgramming and applying 
            computation thinking to my code
            </span>
            <br />
            <br />
            <br />
        
            
            <span className="skillTitle" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">What I do</span>
            <div className="skillBars" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                <div className="skillBar">
                    <img src={WebsiteDesign} alt="WebsiteDesign" className="skillBarImg" />
                    <div className="skillBarText" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                        <h2>Website Design</h2>
                        <p>Create a stunning and user-friendly website that captures your unique brand identity and engages your audience effectively.</p>
                    </div>
                </div>
                <div className="skillBar" >
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                        <h2>App Design</h2>
                        <p>Design intuitive and feature-rich applications that cater to user needs and deliver exceptional user experiences.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={DatabaseDesign} alt="DatabaseDesign" className="skillBarImg" />
                    <div className="skillBarText" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                        <h2>Database Design</h2>
                        <p>Develop robust and efficient databases to organize, store, and manage data seamlessly, ensuring data integrity and accessibility.</p>
                    </div>
                </div> 
            </div>
            </div>
            <br />
            <br />
            <br />
            <div id="skills" className='skills' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            <span className="technologyTitle">Technologies used</span>
            
                <ul  className="iconsList">
                    <li>
                     <a className="iconsListItem" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true"><FaJs/>
                     <p className="iconItem">JavaScript</p>
                     </a>
                    </li>
                    <li>
                    <a className="iconsListItem" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true"><FaJava />
                    <p className="iconItem">Java</p>
                    </a>
                    </li>
                    <li>
                    <a  className="iconsListItem" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true"><FaHtml5 />
                    <p className="iconItem">HTML</p>
                    </a>
                    </li>
                    <li>
                    <a className="iconsListItem" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true"><FaCss3Alt />
                    <p className="iconItem">CSS</p>
                    </a>
                    </li>
                    <li>
                    <a className="iconsListItem" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true"><FaPython />
                    <p className="iconItem">Python</p>
                    </a>
                    </li>
                    <li>
                    <a  className="iconsListItem" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true"><FaReact />
                    <p className="iconItem">React</p>
                    </a>
                    </li>
                    <li>
                    <a  className="iconsListItem" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true"><SiSpringboot />
                    <p className="iconItem">SpringBoot</p>
                    </a>
                    </li>
                    <li>
                    <a  className="iconsListItem" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true"><FaNodeJs />
                    <p className="iconItem">NodeJS</p>
                    </a>
                    </li>
                    <li>
                    <a  className="iconsListItem" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true"><BiLogoPostgresql />
                    <p className="iconItem">Postgres</p>
                    </a>
                    </li>
                    </ul>
                    <ul className="iconsList">
                    <li>
                    <a className="iconsListItem" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true"><SiJest />
                    <p className="iconItem">Jest</p>
                    </a>
                    </li>
                    <li>
                    <a className="iconsListItem" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true"><SiDjango />
                    <p className="iconItem">Django</p>
                    </a>
                    </li>
                    <li>
                    <a className="iconsListItem" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true"><FaBootstrap />
                    <p className="iconItem">Bootsrap</p>
                    </a>
                    </li>
                    <li>
                    <a className="iconsListItem" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true"><FaGit />
                    <p className="iconItem">Git</p>
                    </a>
                    </li>
                    <li>
                    <a className="iconsListItem" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true"><SiPostman />
                    <p className="iconItem">Postman</p>
                    </a>
                    </li>
                    <li>
                    <a className="iconsListItem" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true"><FaFigma />
                    <p className="iconItem">Figma</p>
                    </a>
                    </li>
                    <li>
                    <a className="iconsListItem" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true"><SiMui />
                    <p className="iconItem">MUI</p>
                    </a>
                    </li>
                    <li>
                    <a className="iconsListItem" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true"><SiPowerapps />
                    <p className="iconItem">Powerapps</p>
                    </a>
                    </li>
                    <li>
                    <a className="iconsListItem" data-aos="fade-right" data-aos-duration="3000" data-aos-once="true"><SiPowerautomate />
                    <p className="iconItem">Powerautomate</p>
                    </a>
                    </li>
                </ul>
                </div>
                <br />
            <br />
            <br />
    </section>
  )
}

export default Skills;