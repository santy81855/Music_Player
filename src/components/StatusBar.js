import './StatusBar.css';
import React from 'react';
import NavBar from './NavBar.js';

class StatusBar extends React.Component {
  render() {
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
}

export default StatusBar;
