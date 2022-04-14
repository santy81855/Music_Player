import './StatusBar.css';
import React from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {useAuth0} from '@auth0/auth0-react';

class StatusBar extends React.Component {
  
  // Renders either the login screen or the main app
  isLoggedIn = false;

  render() {
    if (this.isLoggedIn)
    {
      console.log('logged in');
      return (
        <div>
          <div className="StatusBar">
            {/* StatusBar */}
            StatusBar
          </div>
  
          <div className = "App-NavBar-and-MainPage">
            <NavBar/>
          </div>
        </div>
      );
    }
    else
    {
      return (
        <div>
          <div className="StatusBar">
            {/* StatusBar */}
            StatusBar
          </div>
  
          <div className = "App-NavBar-and-MainPage">
            <Login/>
          </div>
        </div>
      );
    }
  }
}

export default StatusBar;
