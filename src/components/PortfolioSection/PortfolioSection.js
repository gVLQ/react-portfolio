import React from 'react';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
import StackGrid from "react-stack-grid";
import './PortfolioSection.sass';
import tech_data from '../../data/tech.json';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class PortfolioSection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayedTechnology: props.location.state.techToDisplay,
            displayedProjects: this.getProjectsToDisplay(props.location.state.techToDisplay)
        }
    }

    getProjectsToDisplay = (usedTechnology) => {
        let portfolio = [];
        tech_data.forEach((technology) => {
            technology.projects.forEach((project) => {
                portfolio.push(project);
            })
        });
        if (usedTechnology !== "all") {
            portfolio = portfolio.filter(project => project.tag === usedTechnology);
        }
        return portfolio;
    }

    getAllTechs = (data) => {
        let techNames = [];
        data.forEach((tech) => {
            techNames.push({
                label: tech.name,
                value: tech.name
            });
        });
        return techNames;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.displayedTechnology !== prevState.displayedTechnology) {
            this.setState({
                displayedProjects: this.getProjectsToDisplay(this.state.displayedTechnology)
            })
        }
    }

    render() {
        const technoligiesList = this.getAllTechs(tech_data);
        const displayedProjects = this.state.displayedProjects;

        return (
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName="SlideIn"
            > 
            <div className="portfolio__section">
                <div className="portfolio-header">
                    <h1>
                        PORTFOLIO
                    </h1>
                </div>
                <div className="portfolio-shortcuts">
                    {
                        technoligiesList.map((tech) => {
                            return (
                                <div key={tech.value} className="portfolio-shortcut-item">
                                    <button onClick={() => this.setState({displayedTechnology: tech.value})}>
                                        <span>{tech.value}</span>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
                <StackGrid columnWidth={"33.33%"}
                            gutterWidth={15}
                            gutterHeight={15}
                            style={{marginTop: 20}}>
                {
                displayedProjects.map((project, index) => {
                    let cardTitle = (
                        <div>
                            <img src={project.img} alt={project.name}/>
                            <h4>{project.name}</h4>
                        </div>
                    )
                    let footer = (
                        <div>
                            <a href={project.url}><Button label="Go To Project"/></a>
                        </div>
                    )
                    return (
                            <li className="porfolio__project" key={index}>
                                <Card title={cardTitle} footer={footer}>
                                    {project.description}
                                </Card>
                            </li>
                        )
                    }) 
                }
                </StackGrid>
            </div>
            </ReactCSSTransitionGroup>
        );
    }

};

export default PortfolioSection;