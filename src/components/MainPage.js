import './MainPage.css';

import React, { Component } from 'react';
import Library from '../pages/Library.js';
import Settings from '../pages/Settings.js';
import SearchSong from '../pages/SearchSong.js';
import SearchPlaylist from '../pages/SearchPlaylist.js';
import SearchArtist from '../pages/SearchArtist.js';

const {idx} = require('./NavBar.js');

const pages = [<Settings/>, <Library/>, <SearchSong/>, <SearchPlaylist/>, <SearchArtist/>];

class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
        {pages[idx]}
      </div>
    );
  }
}

export default MainPage;
