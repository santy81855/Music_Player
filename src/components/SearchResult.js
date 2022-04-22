import './SearchResult.css';
import React from 'react';
import db from '../firebase'
import {Menu, MenuItem, MenuButton, MenuGroup} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';


class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      open: false
    }
  }
  
  onTrigger = () => {
    this.props.callback(this.props.song, null);
  };
  addSongtoPlaylist(playlistid,song){
    if(this.props.user.playlists[playlistid] !== null){
      if(!this.props.user.playlists[playlistid].songs.includes(song)){
        //console.log(`pushing ${song} into playlist ${playlistid}`)
        //console.log(this.props.user.playlists[playlistid])
        this.props.user.playlists[playlistid].songs.push(song)
      }else{
        let newsongs = []
        this.props.user.playlists[playlistid].songs.forEach(songid =>{
          if(songid !== song){
            newsongs.push(songid)
          }
        this.props.user.playlists[playlistid].songs = newsongs
        })
      }
      this.updateUser(this.props.user);
    }
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
  render() {
    //console.log("SR", this.props.user)
    return (
      <div className="SearchResultWrapper">
        <div className = "SearchResult" onClick={this.onTrigger} >
          <div className = "LeftBox">
            <img src={this.props.song.cover_art} alt="png" width="100%" height="100%" />
          </div>
          
          <div className = "CenterBox">
            <div className="Title">
              "{this.props.song.title}" 
            </div>
            <div className="Artist">
              By: {this.props.song.artist}
            </div>
          </div>
          
          <div className = "RightBox">
            <div className="Genre">
              Genre: {this.props.song.genre}
            </div>
            <div className="Year">
              Release year: {this.props.song.release_year}
            </div>
          </div>
        </div>

        <div className="Buttons">
          <div className="ActionButton" onClick={() => {
            //console.log("Like Song:", this.props.song.title)
            this.addSongtoPlaylist(0, this.props.song.id)
            //console.log(this.props.user)
          }}/>
          <Menu menuButton={<MenuButton>Add song</MenuButton>} transition >
            <MenuItem>Create playlist</MenuItem>
            {/* overflow in case user has many playlists*/}
            <MenuGroup >
            {
              this.props.user.playlists.map(
                (playlist) => {
                    // Dont show liked songs as a possibility
                    return playlist === this.props.user.playlists[0] ? null : (<MenuItem key = {playlist}>{playlist.title}</MenuItem>)
                }
              )
            }
            </MenuGroup>
        </Menu>
        </div>
      </div>
    );
  }
}

export default SearchResult;
