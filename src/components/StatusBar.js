import './StatusBar.css';
import React, { useEffect , useState} from 'react';
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
class StatusBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentuser: null
    }
  }

  componentDidMount(){
    window.user = this.props.curUser
    var relevantusers = db.collection('users').where('id', '==', window.user.sub);
    window.user = relevantusers.get().then((querySnapshot) => {
    if(!querySnapshot.empty){
      let items = []
      querySnapshot.forEach((doc) => {
        //console.log("foreach",doc.data())
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
   
  window.user.then(res =>{
    this.setState({
      currentuser:res
    })
  })

  }
  render() {
      return (
        <div>
          <div className="StatusBar">
            {/*StatusBar*/}
            StatusBar
          </div>
          <div className = "App-NavBar-and-MainPage">
            <NavBar curUser={this.state.currentuser}/>
          </div>
        </div>
      );
  }
}

/*
const retFun = async () => {
  Promise.resolve(window.user)
  const val = await window.user
  console.log(val)
  return val
}


function StatusBar(props) {
  window.user = props.curUser
  var relevantusers = db.collection('users').where('id', '==', window.user.sub);
  window.user = relevantusers.get().then((querySnapshot) => {
    if(!querySnapshot.empty){
      let items = []
      querySnapshot.forEach((doc) => {
        //console.log("foreach",doc.data())
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
  let x;
  React.useEffect(()=>{
    retFun().then(res => {
      console.log(res)
    })
  })
  return (
    <div>
      <div className="StatusBar">
        {/*StatusBar}
        StatusBar
      </div>
      <div className = "App-NavBar-and-MainPage">
        <NavBar curUser={x}/>
      </div>
    </div>
  );
}*/
export default StatusBar;
