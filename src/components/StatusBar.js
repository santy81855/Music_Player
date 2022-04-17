import './StatusBar.css';
import React from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {useAuth0} from '@auth0/auth0-react';
import userData from '../databases/users.json';
import db from '../firebase';
class StatusBar extends React.Component {
  
  // Renders either the login screen or the main app
  isLoggedIn = false;

  render() {
      /*db.collection('users').add({
        id: this.props.curUser.given_name,
      })*/
      const usersref = db.collection('users')

      const queryref = usersref.where('id','==',this.props.curUser.given_name).get().then(res => {console.log(res)});

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
  }
}

export default StatusBar;
