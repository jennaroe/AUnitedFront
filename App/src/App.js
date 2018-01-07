import React, { Component } from 'react';
import logo from './img/p2logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="home">
        <nav className="App-nav">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pulse Project</h1>
          <ul>
            <li><a class="active" href="#">Sign In</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#home">Home</a></li>
          </ul>
        </nav>
        
        <header className="App-header">
          <p className="App-intro"> Volunteer Today, Support Tomorrow! </p>
          <a className="btn btn-primary" href="#" role="button">Sign Up</a>
        </header>

        <br/>

        <div className="App-about" id="about">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10">
                <h2>About</h2>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5">  
                <h4>What is Pulse Project?</h4>
                <p>Pulse Project was founded in 2016 in response to the tragic shootings that occurred at the Pulse nightclub in Orlando, FL. Our goal is to help cities mobilize response teams and volunteers in quicker, more efficient ways by being prepared before disaster strikes. Help us, help you. Join the team Today!</p>
                <p>Pulse Project gives all of us a chance to step up and step in! When your community is in need, it is a way we can all band together, no matter your skill level or experience. Are you skilled at first aid? Are you good with a hammer and nails? Can you pass out water bottles and snacks? Can you be a shoulder to cry on? This is where your city needs you!</p>
              </div>
              <div className="col-lg-5">
                <h4>How to help</h4>
                <p>How can we help the victims today, the families tomorrow and how can we assist with tragedies in the future? We don't know if it's ever really possible to feel prepared for an attack or a devastating natural disaster but this allows for some type of preparation for our local city governments to be able to get information our and have some type of organization for all those who really want to lend a hand.</p>
                <h4>Receive Alerts First!</h4>
                <p>Get up to the minute emergency alerts and notifications of volunteer opportunities when and where your city needs you most!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="App-contact" id="contact">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h2>Contact</h2>
              </div>
              <div className="col-lg-12">
                <p>Email us at <a href="mailto:teamPulseProject@gmail.com">teamPulseProject@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="App-footer">
          <p>&copy; 2016 Pulse Project</p>
        </div>
        
      </div>


    );
  }
}

export default App;
