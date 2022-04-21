import './SearchResult.css';
import React from 'react';


class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  
  onTrigger = () => {
    this.props.callback(this.props.song, null);
  };
  
  render() {
    return (
      <div className="SearchResultWrapper">
        <div className = "SearchResult" onClick={this.onTrigger} >
          <div className = "LeftBox">
            <img src={this.props.song.cover_art} alt="png" width="100%" height="100%" />
          </div>
          
          <div className = "CenterBox">
            <div className="Title">
              "{this.props.song.title}" 
            </div>
            <div className="Artist">
              By: {this.props.song.artist}
            </div>
          </div>
          
          <div className = "RightBox">
            <div className="Genre">
              Genre: {this.props.song.genre}
            </div>
            <div className="Year">
              Release year: {this.props.song.release_year}
            </div>
          </div>
        </div>

        <div className="Buttons">
          <div className="ActionButton" onClick={() => console.log("Like Song:", this.props.song.title)}/>
          <div className="ActionButton" onClick={() => console.log("Add to Playlist:", this.props.song.title)}/>
        </div>
      </div>
    );
  }
}

export default SearchResult;
