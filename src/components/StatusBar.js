import './StatusBar.css';
import React from 'react';
import NavBar from './NavBar.js';
import db from '../firebase';

class user{
  constructor(fname,lname,id,playlists, lat, long){
    this.firstname = fname;
    this.lastname = lname;
    this.id = id;
    this.playlists = playlists;
    this.latitude = lat;
    this.longitude = long;
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
  }

  addPlaylist(user, playlistname){
    user.playlists.push({
      year: new Date().getFullYear(),
      genre: "user",
      songs: [],
      "last-song": null,// needs to be redefined later
      title: playlistname,
      author: user.firstname
    })
  }
  // pass in song id
  updatePlaylistLastSong(user,playlist,song){
    user.playlists[playlist]["last-song"] = song;
  }

  async updateUser(user){
    //console.log("uu",user)
    db.collection("users").where("id", "==", user.id)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            doc.ref.update({
              playlists: user.playlists
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
        //console.log("foreach",doc.data())
        items.push(doc.data())
      })
      //console.log("HI:", items[0]);
      return new user(items[0].firstname, items[0].lastname, items[0].id, items[0].playlists, this.props.userLatitude, this.props.userLongitude)
    }
    else{
      console.log(this.props.curUser)
      if(this.props.curUser.sub.includes("google")){
        db.collection('users').add({
          id: this.props.curUser.sub,
          firstname: this.props.curUser.given_name,
          lastname: this.props.curUser.family_name,
          latitude: this.props.userLatitude,
          longitude: this.props.userLongitude,
          playlists: []
        })
      }else{
        db.collection('users').add({
          id: this.props.curUser.sub,
          firstname: this.props.curUser.nickname,
          lastname: this.props.curUser.nickname,
          latitude: this.props.userLatitude,
          longitude: this.props.userLongitude,
          playlists: []
        })
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
            StatusBar
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
