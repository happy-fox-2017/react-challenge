import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Beranda from './components/Beranda';
import Category from './components/Category';
import './App.css';

const styles = {
    navigation: {
        backgroundColor: '#5b569e'
    },
    logo: {
        paddingLeft: 50
    },
    navbarMenu: {
        paddingRight: 10
    }
}

class App extends Component {
  render() {
    return (
        <Router>
          <MuiThemeProvider>
            <div id="app">
              <div className="navbar-fixed">  
                      <nav style={styles.navigation}>
                          <div className="nav-wrapper">
                              <a className="brand-logo left" style={styles.logo}><i className="large material-icons">chrome_reader_mode</i>TNWnews</a>
                              <ul id="nav-mobile" className="right hide-on-med-and-down" style={styles.navbarMenu}>
                                  <li><Link to="/Home">Beranda</Link></li>
                                  <li><Link to="/Category">Category</Link></li>
                              </ul>
                          </div>
                      </nav>    
              </div>
              <Switch>
                      <Route path="/Home" component={Beranda} />
                      <Route path="/Category" component={Category} />
              </Switch>
            </div>
          </MuiThemeProvider>
        </Router>
    );
  }
}

export default App;
