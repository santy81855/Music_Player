import './PlayBar.css';
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
class PlayBar extends React.Component {
  render() {
    return (
      <div className="PlayBar">
        
      <AudioPlayer
      autoPlay
      src="https://www.bensound.com/bensound-music/bensound-november.mp3"
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