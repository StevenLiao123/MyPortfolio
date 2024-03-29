import React, { Component }  from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout fixedHeader>
        <Header className="header-color" title={<Link className="headerTitle" style={{textDecoration: 'none', color: 'white'}} to="/">
          Home
          </Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/newTech">New Tech</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
            </Header>
         <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">
            Home
          </Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/newTech">New Tech</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer >
          <Content>
            <div className="page-content">
              <Main />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
