import React from 'react';
import './AboutSection.sass';
import {Card} from 'primereact/card';
import { Link } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import me from "../../img/avatar.PNG";
import tech_data from '../../data/tech.json';

const title = (
    <div className="about__title">
        <img src={me} alt="avatar"/>
        <h2>Hi,</h2>
    </div>
);

const AboutSection = () => (
    <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName="SlideIn"
      > 
    <div className="portfolio__section about__page">
        <Card title={title} subTitle="My name's Gabriel, thank you for visiting my online portfolio !">
            I'm a Frontend Developer, currently based in Bucharest, Romania. I'm an ambitious problem solver with a passion for online businesses, and who
            would like to join a team of like-minded developers.
            I am thorough and precise in everything I do, and have a keen interest in
            technology, mobile applications and user experience. As someone who takes
            responsibility for his own personal development, I am continually evaluating
            and upgrading my skills so that I stay at the cutting edge of web
            development. Here is some of the cool stuff I use when I'm building my apps:    
        </Card>
        <div className="portfolio__grid">
            {
                tech_data.map((tech) => {
                    return (
                        <li key={tech.name} className="portfolio__grid-item used__tech">
                            <Link to={{ pathname:"/portfolio",
                                        state: {techToDisplay : tech.name}}}>
                                <span>{tech.projects.length} {tech.projects.length === 1 ? "project" : "projects"}</span>
                                <img src={tech.img}  alt={tech.name}/>
                            </Link>
                        </li>
                    )
                })
            }
        </div>
    </div>
    </ReactCSSTransitionGroup>
);

export default AboutSection;