import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Bulma from 'bulma/css/bulma.css'
import Home from './components/Home'
import About from './components/About'
import Pokemon from './components/Pokemon'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <div>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/pokemon">Pokemon</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/pokemon" component={Pokemon}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
