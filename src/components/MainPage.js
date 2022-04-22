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
    song: null,
    playlist: Playlists[0],
  }
  
  handleCallback = (childSongData, childPlaylistData) => {
    if (childSongData !== null) 
    {
      this.setState({song: childSongData})
      this.setState({playlist: null})
    }
    else if (childPlaylistData !== null)
    {
      this.setState({song: null})
      this.setState({playlist: childPlaylistData})
    }
  }
  
  render() {
    let pages = [ <Settings user={this.props.user} />,
            <Library user={this.props.user} callback={this.handleCallback}/>,
            <SearchSong user={this.props.user} callback={this.handleCallback}/>,
            <SearchPlaylist user={this.props.user} callback={this.handleCallback}/>,
            <SearchArtist user={this.props.user} callback={this.handleCallback}/>
          ];
    return (

      <div className = "App-MainPage-and-PlayBar">
        <div className="MainPage">
          {pages[this.props.selected]}
        </div>

        <PlayBar user={this.props.user} song={this.state.song} playlist={this.state.playlist} props={this.props}/>
      </div>
    );
  }
}

export default MainPage;
