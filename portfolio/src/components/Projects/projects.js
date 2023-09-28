import React, { useState } from 'react';
import './projects.css';
import Menu from './menu';
import { IoIosArrowRoundForward } from "react-icons/io";

const Projects = () => {
    const [items, setItems] = useState(Menu);


  return (
    <section className="workContainer" id="work">
        <h2 className="sectionTitle">Projects</h2>
        <br />
        <div className="workContainerGrid" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            {items.map((elem) => {
                const{id, image, title, link} = elem;
                return(
                    <div className="workCard" key={id} data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                        <div className="workThumbnail">
                            <img src={image} alt="images" className="workImg" />
                            <div className="workMask"></div>
                            </div>
                            <h3 className="workTitle">{title}</h3>
                            <a href={link} className="workButton">
                            
                                <i className="iconLink"><IoIosArrowRoundForward /></i>
                            </a>
                        </div>
                )
            })}
        </div>
    </section>
  )
}

export default Projects