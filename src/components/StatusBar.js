import './StatusBar.css';
import React, { useEffect } from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {useAuth0} from '@auth0/auth0-react';
import userData from '../databases/users.json';
import db from '../firebase';
import {getFirestore, doc, getDoc } from "firebase/firestore";

class user{
  constructor(fname,lname,id,playlists){
    this.firstname = fname;
    this.lastname = lname;
    this.id = id;
    this.playlists = playlists;
  }
}

/*class StatusBar extends React.Component {
  
  /*async componentDidMount(){
    const userConverter = {
      toFirestore: (user) => {
          return {
            user: user
          };
      },
      fromFirestore: (snapshot, options) => {
          const data = snapshot.data(options);
          return new user(data.firstname,data.lastname,data.id,data.playlists);
      }
    };

    const ref = doc(db, "users", this.props.curUser.sub).withConverter(userConverter);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      // Convert to City object
      const curuser = docSnap.data();
      // Use a City instance method
      console.log(curuser);
    } else {
      console.log("No such document!");
    }
  }
  async assign(){
    let res = await window.user
    return res;
  }
  render() {
      window.user = this.props.curUser

      var relevantusers = db.collection('users').where('id', '==', window.user.sub);
      window.user = relevantusers.get().then((querySnapshot) => {
        if(!querySnapshot.empty){
          let items = []
          querySnapshot.forEach((doc) => {
            console.log(doc.data())
            items.push(doc.data())
          })
          return new user(items[0].firstname,items[0].lastname,items[0].id,items[0].playlists)
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

      let current = this.assign()
      return (
        <div>
          <div className="StatusBar">
            {/*StatusBar}
            StatusBar
          </div>
          <div className = "App-NavBar-and-MainPage">
            <NavBar curUser={current}/>
          </div>
        </div>
      );
  }
}*/

function StatusBar(props){
  window.user = props.curUser

      var relevantusers = db.collection('users').where('id', '==', window.user.sub);
      window.user = relevantusers.get().then((querySnapshot) => {
        if(!querySnapshot.empty){
          let items = []
          querySnapshot.forEach((doc) => {
            console.log(doc.data())
            items.push(doc.data())
          })
          return new user(items[0].firstname,items[0].lastname,items[0].id,items[0].playlists)
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

      //let current = this.assign()
      return (
        <div>
          <div className="StatusBar">
            {/*StatusBar*/}
            StatusBar
          </div>
          <div className = "App-NavBar-and-MainPage">
            <NavBar curUser={null}/>
          </div>
        </div>
      );
}


export default StatusBar;
