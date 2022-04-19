import './LibraryItem.css';
import React from 'react';
import SongData from '../databases/songs/songs.json';


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
          style={{ backgroundImage: `url(${this.props.song.cover_art})` }}
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
          style={{ backgroundImage: `url(${SongData[this.props.playlist.songs[0]].cover_art})` }}
          onClick={this.loadPlaylist}
        >
          <div className="TagBar">
            <div className="LibraryItemTitle"> "{this.props.playlist.name}" </div>
            <div className="LibraryItemArtist"> By: {SongData[this.props.playlist.songs[0]].artist} </div>
          </div>
        </div>
      );
    }
  }
}

export default LibraryItem;
