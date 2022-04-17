import './MainPage.css';
import React from 'react';
import Library from '../pages/Library.js';
import Settings from '../pages/Settings.js';
import SearchSong from '../pages/SearchSong.js';
import SearchPlaylist from '../pages/SearchPlaylist.js';
import SearchArtist from '../pages/SearchArtist.js';
import PlayBar from './PlayBar';
import Playlists from '../databases/songs/playlists.json';

const pages = [<Settings/>, <Library/>, <SearchSong/>, <SearchPlaylist/>, <SearchArtist/>];

class MainPage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.index = 1;
  // }  
  
  render() {
    return (

      <div className = "App-MainPage-and-PlayBar">
        <div className="MainPage">
          {pages[this.props.selected]}
        </div>

        <PlayBar playlist={Playlists[0]} props={this.props}/>
      </div>
    );
  }
}

export default MainPage;
