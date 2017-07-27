import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Beranda from './Beranda';
import Category from './Category';

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

class Header extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange (event) {
        console.log('ini event', event)
        this.setState({
            value: event.target.value
        })
    }

   render () {
        return (
            <Router className="navbar-fixed">
                <Switch>
                    <Route exact path="/Home" component={Beranda} />
                    <Route path="/Category" component={Category} />
                </Switch>  
                    <nav style={styles.navigation}>
                        <div className="nav-wrapper">
                            <a className="brand-logo left" style={styles.logo}><i className="large material-icons">chrome_reader_mode</i>TNWnews</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down" style={styles.navbarMenu}>
                                <li><Link to="/Home">Beranda</Link></li>
                                <li><Link to="/Category">Category</Link></li>
                            </ul>
                        </div>
                    </nav>
            </Router>
        )
   }
}

export default Header;