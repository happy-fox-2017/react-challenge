import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render () {
       return (
        <nav className="nav" style={{ background: "lightgray" }}>
          <div className="nav-left">
            <Link to="/" className="nav-item">
              <img src="http://bulma.io/images/bulma-logo.png" alt=""/>
            </Link>
          </div>

          <div className="nav-center">
            <a className="nav-item">
              <span>
                Find Articles You Need Every Day
              </span>
            </a>
          </div>

          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className="nav-right nav-menu">
            <Link to="/" className="nav-item">
              Beranda
            </Link>
          </div>
        </nav>
      )
  }
}

export default NavBar
