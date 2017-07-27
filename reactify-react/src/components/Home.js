import React from 'react'
import Fullstack from '../assets/fullstack.jpg'

class Homepage extends React.Component {
  render () {
    return (
          <div>
          <h1>WELCOME FULLSTACK ARTICLES</h1>
          <img src={Fullstack} className="Image" alt="fullstack" />
          </div>
    )
  }
}

export default Homepage
