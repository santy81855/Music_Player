import './StatusBar.css';
import React from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {useAuth0} from '@auth0/auth0-react';
import userData from '../databases/users.json';
class StatusBar extends React.Component {
  
  // Renders either the login screen or the main app
  isLoggedIn = false;

  render() {
      /*var mysql = require('mysql');
      var connection = mysql.createConnection({
        host: "sql5.freesqldatabase.com",
        user:"sql5486088",
        password:"Xx7aa9yD11",
        database: "sql5486088",
        port: 3306
      });

      connection.connect();
      connection.query('SELECT * FROM USERS', function(err,rows,fields){
        if(err) throw err

        console.log(rows[0].solution)
      })
      connection.end()*/
      return (
        <div>
          <div className="StatusBar">
            {/*StatusBar*/}
            StatusBar
          </div>
          <div className = "App-NavBar-and-MainPage">
            <NavBar curUser={this.props.curUser}/>
          </div>
        </div>
      );
    /*if (this.isLoggedIn)
    {
      console.log('logged in');
      return (
        <div>
          <div className="StatusBar">
            {/*StatusBar}
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
            {/* StatusBar }
            StatusBar
          </div>
  
          <div className = "App-NavBar-and-MainPage">
            <Login/>
          </div>
        </div>
      );
    }*/
  }
}

export default StatusBar;
