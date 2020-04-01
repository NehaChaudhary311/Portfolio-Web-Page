import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ReachUsPage from './pages/ReachUsPage';
import PortfolioPage from './pages/PortfolioPage';
import TeamPage from './pages/TeamPage';
import NewsPage from './pages/NewsPage';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Life with yoga',
      headerLinks: [
        {title : 'Home', path : '/'},
        {title : 'Team', path : '/team'},
        {title : 'News', path : '/news'},
        {title : 'About', path : '/about'},
        {title : 'Reach Us', path : '/reachUs'},
        {title : 'Portfolio', path : '/portfolio'}
      ],
      home : {
        title : "Becoming yourself",
        subTitles : "Yoga for everyone",
        text : "Explore life and re-live"
      },
      team : {
        title : "Becoming",
      },
      news : {
        title : "Becoming",
      },
      about : {
        title : "Becoming",
      },
      reachUs : {
        title : "Becoming",
      },
      portfolio : {
        title : "Try one of them",
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
        <Navbar expand="lg" variant="light" bg="light">
            <Navbar.Brand>Neha</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                <Link className="nav-link" to="/team">Team</Link>
                <Link className="nav-link" to="/news">News</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/reachUs">ReachUs</Link>
                
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/portfolio" render={() => <PortfolioPage title={this.state.portfolio.title} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/reachUs" render={() => <ReachUsPage title={this.state.reachUs.title} />} />
          <Route path="/team" render={() => <TeamPage title={this.state.team.title} />} />
          <Route path="/news" render={() => <NewsPage title={this.state.news.title} />} />

          
        <Footer/>

        </Container>
        
      </Router>
    );
  }
}

export default App;