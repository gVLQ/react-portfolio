import React from 'react';
import {Card} from 'primereact/card';
import {Chart} from 'primereact/chart';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import WorkTimeline from './Timelines/WorkTimeline';

import './ResumeSection.sass';

const data = {
    datasets: [{
        data: [
            11,
            16,
            7,
            3,
            14
        ],
        backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
        ],
        label: 'My dataset'
    }],
    labels: [
        "Angular",
        "Vue",
        "Javascript",
        "Bootstrap",
        "React"
    ]
};

const ResumeSection = () => (
    <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName="SlideIn"
            > 
    <div className="portfolio__section">
        <Card>
            <h2>Work History</h2>
        </Card>
        <Card className="work-timeline">
            <WorkTimeline/>
        </Card>
        <Card>
            <h2>Technical Skills</h2>
        </Card>
        <Card className="work-timeline">
            <Chart type="polarArea" data={data} />
        </Card>
        
    </div>
    </ReactCSSTransitionGroup>
)

export default ResumeSection;