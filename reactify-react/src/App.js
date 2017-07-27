import React, { Component } from 'react';
import { BrowserRouter, Route  } from 'react-router-dom'

import { Container } from './components/index'
import NavBar from './components/NavBar'
import Homepage from './components/Home'

import './App.css';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
          <div>
             <NavBar />
               <Route exact path='/' component={Homepage} />
               <Route path='/articles' component={Container} />
           </div>
      </BrowserRouter>
    )
  }
}

export default App;
