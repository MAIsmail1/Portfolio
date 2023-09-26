import React, { useState } from 'react';
import './projects.css';
import Menu from './menu';

const Projects = () => {
    const [items, setItems] = useState(Menu);


  return (
    <section className="workContainer" id="work">
        <h2 className="sectionTitle">Projects</h2>
        <br />
        <div className="workContainerGrid">
            {items.map((elem) => {
                const{id, image, title, link} = elem;
                return(
                    <div className="workCard" key={id}>
                        <div className="workThumbnail">
                            <img src={image} alt="images" className="workImg" />
                            <div className="workMask"></div>
                            </div>
                            <h3 className="workTitle">Action</h3>
                            <a href="https://github.com/MAIsmail1/CapStone_frontend" className="workButton">
                                <i className="iconLink"></i>
                            </a>
                        </div>
                )
            })}
        </div>
    </section>
  )
}

export default Projects