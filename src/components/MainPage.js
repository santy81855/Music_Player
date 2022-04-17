import './MainPage.css';
import React from 'react';
import Library from '../pages/Library.js';
import Settings from '../pages/Settings.js';
import SearchSong from '../pages/SearchSong.js';
import SearchPlaylist from '../pages/SearchPlaylist.js';
import SearchArtist from '../pages/SearchArtist.js';
import userData from '../databases/users.json';
const pages = [<Settings/>, <Library/>, <SearchSong/>, <SearchPlaylist/>, <SearchArtist/>];

class MainPage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.index = 1;
  // }  
  
  render() {
    console.log(userData)
    return (
      <div className="MainPage">
        {pages[this.props.selected]}
      </div>
    );
  }
}

export default MainPage;
