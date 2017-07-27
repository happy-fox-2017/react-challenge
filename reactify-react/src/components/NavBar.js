import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem  } from 'react-bootstrap'

class NavBar extends React.Component {
  render () {
       return (
            <Navbar>
               <Navbar.Header>
                 <Navbar.Brand>
                    <a href="/">React-Redux</a>
                 </Navbar.Brand>
               </Navbar.Header>
               <Nav>
                 <NavItem eventKey={1} href="/articles">Articles</NavItem>
               </Nav>
               </Navbar>
      )
  }
}

export default NavBar
