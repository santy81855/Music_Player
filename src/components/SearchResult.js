import './SearchResult.css';
import React from 'react';

class SearchResult extends React.Component {
  render() {
    return (
      <div className = "SearchResult">
        <div className = "LeftBox">
          <img src={this.props.Song.cover_art} alt="png" width="100%" height="100%" />
        </div>
        
        <div className = "CenterBox">
          <text className="Title">
            "{this.props.Song.title}" 
          </text>
          <text className="Artist">
            By: {this.props.Song.artist}
          </text>
        </div>
        
        <div className = "RightBox">
          <text className="Genre">
            Genre: {this.props.Song.genre}
          </text>
          <text className="Year">
            Release year: {this.props.Song.release_year}
          </text>
        </div>
      </div>
    );
  }
}

export default SearchResult;
