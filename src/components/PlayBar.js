import './PlayBar.css';
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import SongData from '../databases/songs/songs.json';

class PlayBar extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    // testing
    var target = "Ukelele";
    var songs = SongData.filter(function(song){
      return song.title == target
    })
    var song = songs[0]
    console.log(song)
    return (
      <div className="PlayBar">
      <img src={song.cover_art}/>
      <AudioPlayer
      autoPlay
      src={song.mp3address} //https://www.bensound.com/bensound-music/bensound-november.mp3
      onPlay={e => console.log("onPlay")}
      onPause={e=>console.log("pause")}
      // other props here
    />
        {/* PlayBar */}
        PlayBar
      </div>
    );
  }
}

export default PlayBar;