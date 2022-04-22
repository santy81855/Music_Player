import './LibraryItem.css';
import React from 'react';
import SongData from '../databases/songs/songs.json';

import AddPNG from '../icons/big_add.png';
import AddSelectedPNG from '../icons/big_add_selected.png';

class LibraryItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  
  loadSong = () => {
    this.props.callback(this.props.song, null);
  };

  loadPlaylist = () => {
    this.props.callback(null, this.props.playlist);
  };
  
  render() {
    if (this.props.song != null)
    {
      return (
        <div
          className="LibraryItem" 
          style={{
            backgroundImage: `url(${this.props.song.cover_art})`,
            backgroundSize: '100% 100%',
          }}
          onClick={this.loadSong}
        >
          <div className="TagBar">
            <div className="LibraryItemTitle"> "{this.props.song.title}" </div>
            <div className="LibraryItemArtist"> By: {this.props.song.artist} </div>
          </div>
        </div>
      );
    }
    else if (this.props.playlist != null)
    {
      // console.log("PL:", SongData[this.props.playlist.songs[0]].cover_art);
      return (
        <div
          className="LibraryItem" 
          style={{
            backgroundImage: `url(${SongData[this.props.playlist.songs[0]].cover_art})`,
            backgroundSize: '100% 100%',
          }}
          onClick={this.loadPlaylist}
        >
          <div className="TagBar">
            <div className="LibraryItemTitle"> "{this.props.playlist.title}" </div>
            <div className="LibraryItemArtist"> By: {this.props.playlist.author} </div>
          </div>
        </div>
      );
    }
    // Case of both null, render "Add" button
    else 
    {
      return(
        <div
          className="LibraryItem"
          style={{
            backgroundImage: `url(${AddPNG})`,
            backgroundSize: '100% 100%',
          }}
          onClick={this.props.callback}
        >
          <div className="TagBar">
            <div className="LibraryItemTitle"> {this.props.text} </div>
          </div>
        </div>
      );
    }
  }
}

export default LibraryItem;
