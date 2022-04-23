import './SearchResult.css';
import React from 'react';
import db from '../firebase'
import {Menu, MenuItem, MenuButton, MenuGroup, FocusableItem} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';


import likeSongPNG from '../icons/star.png';
import likeSongSelectedPNG from '../icons/star_selected.png';

import likePlaylistPNG  from '../icons/small_add.png';
import likePlaylistSelectedPNG  from '../icons/small_add_selected.png';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      open: false,
      add: false
    }
  }

  addInputField = event => {
    this.setState({
      add: true
    });
    event.preventDefault();
  };
  
  onTrigger = () => {
    this.props.callback(this.props.song, null);
  };
  addSongtoPlaylist(playlistid,song){
    if(this.props.user.playlists[playlistid] !== null){
      if(!this.props.user.playlists[playlistid].songs.includes(song)){
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

  addPlaylist(user, playlistname){
    user.playlists.forEach(pl=>{
      if(pl.title === playlistname)
      console.log('no twin playlists')
      return
    })
    user.playlists.push({
      title: playlistname,
      author: user.firstname,
      songs: []
    })
    this.updateUser(user);
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
              {/* {this.props.song.genre} */}
            </div>
            <div className="Year">
              Year: {this.props.song.release_year}
              {/* {this.props.song.release_year} */}
            </div>
          </div>
        </div>

        <div className="Buttons">
          <div
            className="SongButton"
            onClick={() => {
              this.addSongtoPlaylist(0, this.props.song.id)
              this.forceUpdate()
            }}
          >
            <img
              src={this.props.user.playlists[0].songs.includes(this.props.song.id) ? likeSongSelectedPNG : likeSongPNG}
              alt={"img"}
              style={{width: 50, height: 50}}
            />
          </div>
          <Menu overflow="auto" menuButton={
            /* need div not button
            <button className="PlaylistButton">
              <img
                src={false ? likePlaylistSelectedPNG : likePlaylistPNG}
                alt={"img"}
                style={{width: 40, height: 40}}
              />
            </button>*/
            <div className="PlaylistButton">
            <img
              src={likePlaylistPNG}
              alt={"img"}
              style={{width: 50, height: 50}}
            />
            </div>
            } transition>
            <FocusableItem value="Create Playlist" onClick={() => {
              // Get user input for name
              //this.addPlaylist(this.props.user, "test")
              // Should be last playlist in users database
              //this.addSongtoPlaylist(this.props.user.playlists.length - 1, this.props.song.id)
              //this.forceUpdate()
              }}>
              {({ ref }) => (
                <input ref={x => this.y = x} type="text" placeholder="Create New Playlist"
                  onKeyPress={e => {
                    if(e.key === 'Enter'){
                      this.addPlaylist(this.props.user,e.target.value)
                      this.addSongtoPlaylist(this.props.user.playlists.length - 1, this.props.song.id)
                      this.forceUpdate()
                      this.y.blur()
                      /*window.dispatchEvent(new KeyboardEvent('keydown', {
                        'key': 'escape'
                      }));*/
                    }
                  }}
                />
              )}</FocusableItem>
            {/* overflow in case user has many playlists*/}
            <MenuGroup takeOverflow>
            {
              this.props.user.playlists.map(
                (playlist, index) => {
                    // Dont show liked songs as a possibility
                    // How tf should i format this so it looks nice?
                    return index === 0 ? null : (<MenuItem key = {index} value={playlist.title} onClick={() => {
                      this.addSongtoPlaylist(index, this.props.song.id); 
                      this.forceUpdate()
                    }}>{playlist.title}</MenuItem>)
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
