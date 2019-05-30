import React from 'react';
import {Card} from 'primereact/card';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import NetlifyForm from 'react-netlify-form'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './ContactSection.scss';

const title = (
    <h2>
        Let's get in touch!
    </h2>
)

const ContactSection = () => (
    <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName="SlideIn"
            > 
    <div className="portfolio__section contact-page">
        <Card title={title}>
            <NetlifyForm name='Contact Form'>
                {({ loading, error, success }) => (
                    <div>
                    {loading &&
                        <div>Loading...</div>
                    }
                    {error &&
                        <div>Your information was not sent. Please try again later.</div>
                    }
                    {success &&
                        <div>Thank you for contacting us!</div>
                    }
                    {!loading && !success &&
                        <div>
                        <label>Name</label>
                        <input type='text' name='Name' required />
                        <label>Email</label>
                        <input type='text' name='Email' required />
                        <textarea name='Message' required />
                        <button>Submit</button>
                        </div>
                    }
                    </div>
                )}
            </NetlifyForm>
        </Card>
    </div>
    </ReactCSSTransitionGroup>
)

export default ContactSection;