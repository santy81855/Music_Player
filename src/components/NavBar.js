import './NavBar.css';
import React from 'react';
import NavBarIcon from './NavBarIcon.js';
import MainPage from './MainPage';
import PlayBar from './PlayBar';

// DEPRECATED: ManPage now updates through props from 'this.state.page'
// This works! but does not update
// put in other file: "const {idx} = require('./NavBar.js');"
export var idx = 1;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
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
    idx = 0;
    console.log(idx);
  }

  toLibrary() {
    this.setState(state => ({ page: 1 }));
    idx = 1;
    console.log(idx);
  }

  toSearchSong() {
    this.setState(state => ({ page: 2 }));
    idx = 2;
    console.log(idx);
  }

  toSearchPlaylist() {
    this.setState(state => ({ page: 3 }));
    idx = 3;
    console.log(idx);
  }

  toSearchArtist() {
    this.setState(state => ({ page: 4 }));
    idx = 4;
    console.log(idx);
  }

  render() {
    return (
      <div className='fullContainer'>
        {/* NavBar */}
        <div className="NavBar">
          <button className='button' onClick={this.toSettings}>
            <NavBarIcon selected={this.state.page === 0} />
          </button>

          <button className='button' onClick={this.toLibrary}>
            <NavBarIcon selected={this.state.page === 1} />
          </button>

          <button className='button' onClick={this.toSearchSong}>
            <NavBarIcon selected={this.state.page === 2} />
          </button>

          <button className='button' onClick={this.toSearchPlaylist}>
            <NavBarIcon selected={this.state.page === 3} />
          </button>

          <button className='button' onClick={this.toSearchArtist}>
            <NavBarIcon selected={this.state.page === 4} />
          </button>
        </div>

        {/* Nested App */}
        <div className = "App-MainPage-and-PlayBar">
          <MainPage selected={this.state.page}/>
          <PlayBar/>
        </div>
        
      </div>
    );
  }
}

export default NavBar;
