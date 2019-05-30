import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faUniversity, faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons';

import logo from "../../img/logo.png";
import "../../img/bg.jpg";

import './PortfolioMenu.scss';

const PorfolioMenu = () => (
    <div className="off-canvas position-left reveal-for-large portfolio-menu" 
         id="my-info"
         data-off-canvas
         data-position="left">

        <div className="row column">
            <img src={logo} alt="Logo" />
            <div className="side-menu">
                <ul>
                    <li><Link to={{ pathname: '/'}}>
                            <button className="hollow button secondary">
                            <FontAwesomeIcon icon={faUser} />About
                            </button> 
                        </Link>
                    </li>
                    <li><Link to={{ pathname: '/portfolio',
                                    state: {techToDisplay : "all"}}}>
                            <button className="hollow button secondary">
                            <FontAwesomeIcon icon={faBriefcase} />Portfolio
                            </button>
                        </Link>
                    </li>
                    <li><Link to={{ pathname: '/resume'}}>
                            <button className="hollow button secondary">
                            <FontAwesomeIcon icon={faUniversity} />Resume
                            </button>
                        </Link>
                    </li>
                    <li><Link to={{ pathname: '/contact'}}>
                            <button className="hollow button secondary">
                            <FontAwesomeIcon icon={faEnvelope} />Contact
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="row column">
            <p className="copyright"><FontAwesomeIcon icon={faCopyright} /> Gabriel Vlaicu 2016-2019</p>
        </div>
    </div> 
)

export default PorfolioMenu;