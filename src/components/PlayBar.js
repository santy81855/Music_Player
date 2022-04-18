import './PlayBar.css';
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/src/styles.scss';
import SongData from '../databases/songs/songs.json';
import PlayBarStyle from './PlayBarStyle.scss';
import {useState} from "react";
function PlayBar(props){
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
        {/* <img src={SongData[props.playlist.songs[trackIndex]].cover_art}/> */}
        <AudioPlayer
          style={PlayBarStyle}
          showSkipControls={true}
          showJumpControls={false}
          autoPlay={false}
          volume={0.5}
          src={SongData[props.playlist.songs[trackIndex]].mp3address}
          header={`Now Playing: "${SongData[props.playlist.songs[trackIndex]].title}" by ${SongData[props.playlist.songs[trackIndex]].artist}`}
          //onPlay={e => console.log("onPlay")}
          //onPause={e=>console.log("pause")}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={handleClickNext}
          onClickForward={handleClickNext}
          progressJumpSteps={{backward:1000000,forward:1000000}}
        />
      </div>
    );
  //}
}

export default PlayBar;