import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.sass';
import $ from 'jquery';
import 'foundation-sites';

import PorfolioMenu from "./components/PortfolioMenu/PortfolioMenu";
import SmallScreenHeader from './components/SmallScreenHeader/SmallScreenHeader';
import AboutSection from './components/AboutSection/AboutSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import ResumeSection from './components/ResumeSection/ResumeSection';
import ContactSection from './components/ContactSection/ContactSection';
class App extends Component {

  componentDidMount = () => {
    $(document).foundation();
  }

  render() {
    return (
      <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
      <BrowserRouter>
        <PorfolioMenu/>
        <div className="off-canvas-content" data-off-canvas-content>
          <SmallScreenHeader/>
            <Switch>
              <Route path="/" exact component={AboutSection} />
              <Route path="/portfolio" component={PortfolioSection} />
              <Route path="/resume" component={ResumeSection} />
              <Route path="/contact" component={ContactSection} />
            </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
