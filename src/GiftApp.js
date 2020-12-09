import React, {Component} from 'react';
import './GiftApp.css';
import Home from './Home';
import Calendar from './Calendar';
import Blog from './Blog';
import Notification from './Notifications';
import Logo from './img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarAlt, faNewspaper, faBell } from '@fortawesome/free-solid-svg-icons';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

class GiftApp extends Component {
    constructor() {
        super();

    }



    render() {
        return (
            <Router>
                <div className = 'flexbox'>
                    
                    <nav className = 'nav'>
                    <img src={Logo}></img>      
                    <ul>
                        <li>
                        <Link to="/">
                        <FontAwesomeIcon icon={faHome}/>
                        </Link>
                        </li>
                        <li>
                        <Link to="/calendar">
                        <FontAwesomeIcon icon={faCalendarAlt}/>
                        </Link>
                        </li>
                        <li>
                        <Link to="/blog">
                        <FontAwesomeIcon icon={faNewspaper}/>
                        </Link>
                        </li>
                        <li>
                        <Link to="/notifications" className='bell'>
                        <FontAwesomeIcon icon={faBell}/>
                        </Link>
                        <div className='notification'>
                            1
                        </div>
                        </li>
                    </ul>
                    </nav>

                    <div className = 'time-box'>

                    </div>

                    <Switch>
                    <Route  exact path="/">
                        <Home />
                    </Route>
                    <Route path="/calendar">
                        <Calendar />
                    </Route>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                    <Route path="/notifications">
                        <Notification />
                    </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default GiftApp;