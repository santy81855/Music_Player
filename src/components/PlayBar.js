import './PlayBar.css';
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import SongData from '../databases/songs/songs.json';
import {useState} from "react";
function PlayBar(props){
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


    return (
      <div className="PlayBar">
      <img src={SongData[props.playlist.songs[trackIndex]].cover_art}/>
      <AudioPlayer
      autoPlay
      src={SongData[props.playlist.songs[trackIndex]].mp3address}
      onPlay={e => console.log("onPlay")}
      onPause={e=>console.log("pause")}
      onClickPrevious={handleClickPrevious}
      onClickNext={handleClickNext}
      onEnded={handleClickNext}
    />
        {/* PlayBar */}
        PlayBar
      </div>
    );
  //}
}

export default PlayBar;