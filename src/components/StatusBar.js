import './StatusBar.css';
import React from 'react';
import NavBar from './NavBar.js';
import db from '../firebase';

class user{
  constructor(fname,lname,id,playlists, lat, long, lastsong, lastplaylist){
    this.firstname = fname;
    this.lastname = lname;
    this.id = id;
    this.playlists = playlists;
    this.latitude = lat;
    this.longitude = long;
    this.lastsong = lastsong;
    this.lastplaylist = lastplaylist;
  }
}
class StatusBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentuser: null
    }
  }
  // can index : playlists[index] to get object
  // song id should be passed in since we only store index/id
  addSongtoPlaylist(user,playlistid,song){
    user.playlists[playlistid].push(song)
    this.updateUser(user);
  }

  addPlaylist(user, playlistname){
    user.playlists.push({
      title: playlistname,
      author: user.firstname,
      songs: []
    })
    this.updateUser(user);
  }

  // pass in song id
  updatePlaylistLastSong(user,playlistindex,songid){
    user.lastsong = songid;
    user.lastplaylist = playlistindex
    this.updateUser(user)
  }

  async updateUser(user){
    db.collection("users").where("id", "==", user.id)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            doc.ref.update({
              playlists: user.playlists,
              longitude: user.longitude,
              latitude: user.latitude,
              lastsong: user.lastsong,
              lastplaylist: user.lastplaylist
            }) 
        });
   })
  }
  
  componentDidMount(){
    window.user = this.props.curUser
    var relevantusers = db.collection('users').where('id', '==', window.user.sub);
    window.user = relevantusers.get().then((querySnapshot) => {
    if(!querySnapshot.empty){
      let items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      return new user(items[0].firstname, items[0].lastname, items[0].id, items[0].playlists,
        this.props.userLatitude, this.props.userLongitude, items[0].lastsong, items[0].lastplaylist);
    }
    else{
      if(this.props.curUser.sub.includes("google")){
        db.collection('users').add({
          id: this.props.curUser.sub,
          firstname: this.props.curUser.given_name,
          lastname: this.props.curUser.family_name,
          latitude: this.props.userLatitude,
          longitude: this.props.userLongitude,
          playlists: [{
            title: "Liked Songs",
            author: this.props.curUser.given_name,
            songs: []
          }],
          lastsong: null,
          lastplaylist: null
        })
        //constructor(fname,lname,id,playlists, lat, long, lastsong, lastplaylist)
        return new user(this.props.curUser.given_name,this.props.curUser.family_name,
          this.props.curUser.sub,
           [{
            title: "Liked Songs",
            author: this.props.curUser.given_name,
            songs: []
          }], this.props.userLatitude, this.props.userLongitude, null, null);
      }else{
        db.collection('users').add({
          id: this.props.curUser.sub,
          firstname: this.props.curUser.nickname,
          lastname: this.props.curUser.nickname,
          latitude: this.props.userLatitude,
          longitude: this.props.userLongitude,
          playlists: [{
            title: "Liked Songs",
            author: this.props.curUser.nickname,
            songs: []
          }],
          lastsong: null,
          lastplaylist: null
        })
        return new user(this.props.curUser.nickname,this.props.curUser.nickname,
          this.props.curUser.sub, [{
            title: "Liked Songs",
            author: this.props.curUser.nickname,
            songs: []
          }], this.props.userLatitude, this.props.userLongitude, null, null);
      }
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
          </div>
          <div className = "App-NavBar-and-MainPage">
            <NavBar user={this.state.currentuser}/>
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
