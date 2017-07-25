import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Bulma from 'bulma/css/bulma.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import DetailArticles from './components/DetailArticles'
import ListArticles from './components/ListArticles'

import './App.css';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
          <div>
             <NavBar />
             <Switch>
               <Route exact path='/' component={Header} />
               <Route path='/listarticles' component={ListArticles} />
               <Route path='/detailarticles' component={DetailArticles} />
             </Switch>

             <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/listarticles">List Artikel</Link></li>
             </ul>
           </div>
      </BrowserRouter>
    )
  }
}

export default App;
