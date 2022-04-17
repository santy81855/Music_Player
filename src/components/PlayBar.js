import './PlayBar.css';
import React, {useState} from 'react';
import PlayBarStyle from './PlayBarStyle.scss';
import SongData from '../databases/songs/songs.json';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function PlayBar(props) { 
  const [trackIndex, setTrackIndex] = useState(0);
  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? props.playlist.songs.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < props.playlist.songs.length - 1 ? currentTrack + 1 : 0
    );
  };

  if (props.song !== null)
  {
    return (
      <div className="PlayBar">
        <AudioPlayer
          style={PlayBarStyle}
          autoPlay={false}
          volume={0.5}
          src={props.song.mp3address}
          header={`Now Playing: "${props.song.title}" by ${props.song.artist}`}
          onPlay={() => console.log("onPlay:", props.song.title)}
          onPause={() =>console.log("onPause:", props.song.mp3address)}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={handleClickNext}
        />
      </div>
    );
  }
  else if(props.playlist !== null)
  {
    return (
      <div className="PlayBar">
        <AudioPlayer
          style={PlayBarStyle}
          autoPlay={false}
          volume={0.5}
          
          // src={SongData[props.playlist.songs[trackIndex]].mp3address}
          // header={`Now Playing: "${SongData[props.playlist.songs[trackIndex]].title}" by ${SongData[props.playlist.songs[trackIndex]].artist}`}
      
          src={SongData[props.playlist.songs[trackIndex]].mp3address}
          header={`Now Playing: "${SongData[props.playlist.songs[trackIndex]].title}" by ${SongData[props.playlist.songs[trackIndex]].artist}`}
          
          onPlay={() => console.log("onPlay:", SongData[props.playlist.songs[trackIndex]].title)}
          onPause={() =>console.log("onPause:", SongData[props.playlist.songs[trackIndex]].mp3address)}

          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={handleClickNext}
        />
      </div>
    );
  }
}

export default PlayBar;

// class PlayBar extends React.Component {
//   constructor(props){
//     super(props);
//   }
  //render() {
    /*// testing
    var target = "Ukelele";
    var songs = SongData.filter(function(song){
      return song.title == target
    })
    // songs is an array of search results
    var song = songs[0]
    // song is current song as it was top result
    console.log(song)*/