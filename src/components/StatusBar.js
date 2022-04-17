import './StatusBar.css';
import React from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {useAuth0} from '@auth0/auth0-react';
import userData from '../databases/users.json';
import db from '../firebase';

window.user = null;

class StatusBar extends React.Component {
  render() {
      window.user = this.props.curUser
      console.log(this.props.curUser);

      const usersref = db.collection('users')

      const queryref = usersref.where('id','==',this.props.curUser.sub).get().then(res => {console.log(res)});

      var relevantusers = db.collection('users').where('id', '==', "test");
      relevantusers.get().then(function (querySnapshot) {
        if(!querySnapshot.empty){
          console.log("found something");
        }
        else{
          console.log('database adding');
          db.collection('users').add({
            id: window.user.sub,
            firstname: window.user.given_name,
            lastname: window.user.family_name,
            playlists: []
          })
        }
      });

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
