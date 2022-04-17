import './MainPage.css';
import React from 'react';
import Library from '../pages/Library.js';
import Settings from '../pages/Settings.js';
import SearchSong from '../pages/SearchSong.js';
import SearchPlaylist from '../pages/SearchPlaylist.js';
import SearchArtist from '../pages/SearchArtist.js';
import PlayBar from './PlayBar';
import Playlists from '../databases/songs/playlists.json';


class MainPage extends React.Component {
  state = {
    Song: null,
  }
  
  handleCallback = (childSongData) => {
    this.setState({Song: childSongData})
    console.log("In Main:", childSongData.title)
  }
  
  pages = [ <Settings />,
            <Library/>,
            <SearchSong value={"Hello from Main!"} callback={this.handleCallback}/>,
            <SearchPlaylist/>,
            <SearchArtist/>
          ];
  
  render() {
    return (

      <div className = "App-MainPage-and-PlayBar">
        <div className="MainPage">
          {this.pages[this.props.selected]}
        </div>

        <PlayBar song={this.state.Song} playlist={Playlists[0]} props={this.props}/>
      </div>
    );
  }
}

export default MainPage;
