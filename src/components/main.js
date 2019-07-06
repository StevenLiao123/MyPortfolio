import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingPage';
import AboutMe from './aboutMe';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import newTech from './newTech';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} /> 
            <Route exact path="/aboutme" component={AboutMe} />  
            <Route exact path="/contact" component={Contact} />  
            <Route exact path="/projects" component={Projects} />  
            <Route exact path="/newTech" component={newTech} /> 
            <Route exact path="/resume" component={Resume} />   
        </Switch>      
    );
};

export default Main;