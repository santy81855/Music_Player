import './NavBar.css';
import React from 'react';
import NavBarIcon from './NavBarIcon.js';
import MainPage from './MainPage';
import PlayBar from './PlayBar';
import Playlists from '../databases/songs/playlists.json';
import {useAuth0} from '@auth0/auth0-react';

import settingsPNG from '../icons/settings.png';
import settingsSelectPNG from '../icons/settings_selected.png';

import libraryPNG from '../icons/library.png';
import librarySelectPNG from '../icons/library_selected.png';

import songPNG from '../icons/song.png';
import songSelectPNG from '../icons/song_selected.png';

import playlistPNG from '../icons/playlist.png';
import playlistSelectPNG from '../icons/playlist_selected.png';

import artistPNG from '../icons/artist.png';
import artistSelectPNG from '../icons/artist_selected.png';

// DEPRECATED: ManPage now updates through props from 'this.state.page'
// This works! but does not update
// put in other file: "const {idx} = require('./NavBar.js');"
// export var idx = 1;


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 2,
    };

    this.toSettings = this.toSettings.bind(this);
    this.toLibrary = this.toLibrary.bind(this);
    this.toSearchSong = this.toSearchSong.bind(this);
    this.toSearchPlaylist = this.toSearchPlaylist.bind(this);
    this.toSearchArtist = this.toSearchArtist.bind(this);
  }

  // TODO: We can remove all of these methods:
  // Remove the 'idx' and let the onClick() method handle the setState()
  toSettings() {
    this.setState(state => ({ page: 0 }));

    // idx = 0;
    // console.log(idx);

  }

  toLibrary() {
    this.setState(state => ({ page: 1 }));
    // idx = 1;
    // console.log(idx);
  }

  toSearchSong() {
    this.setState(state => ({ page: 2 }));

    // idx = 2;
    // console.log(idx);

  }

  toSearchPlaylist() {
    this.setState(state => ({ page: 3 }));
    // idx = 3;
    // console.log(idx);

  }

  toSearchArtist() {
    this.setState(state => ({ page: 4 }));

    // idx = 4;
    // console.log(idx);

  }
  render() {
    console.log("in navbar",this.props.curUser);
    
    return (
      <div className='fullContainer'>
        {/* NavBar */}
        <div className="NavBar">
          <button className='button' onClick={this.toSettings}>
            <NavBarIcon selected={this.state.page === 0} image={settingsPNG} imageSelect={settingsSelectPNG}/>
          </button>

          <button className='button' onClick={this.toLibrary}>
            <NavBarIcon selected={this.state.page === 1} image={libraryPNG} imageSelect={librarySelectPNG}/>
          </button>

          <button className='button' onClick={this.toSearchSong}>
            <NavBarIcon selected={this.state.page === 2} image={songPNG} imageSelect={songSelectPNG}/>
          </button>

          <button className='button' onClick={this.toSearchPlaylist}>
            <NavBarIcon selected={this.state.page === 3} image={playlistPNG} imageSelect={playlistSelectPNG}/>
          </button>

          <button className='button' onClick={this.toSearchArtist}>
            <NavBarIcon selected={this.state.page === 4} image={artistPNG} imageSelect={artistSelectPNG}/>
          </button>
        </div>

        {/* Nested App */}

        <MainPage user={this.props.user} selected={this.state.page} props={this.props} />
        {/* <div className = "App-MainPage-and-PlayBar"> */}
          {/* <MainPage selected={this.state.page} /> */}
          {/* <PlayBar playlist={Playlists[0]} /> */}
        {/* </div> */}
        
      </div>
    );
  }
}

export default NavBar;
