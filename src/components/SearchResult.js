import './SearchResult.css';
import React from 'react';

class SearchResult extends React.Component {
  render() {
    return (
      <div className = "SearchResult" onClick={() => console.log("Clicked:", this.props.Song.title)} style = {{cursor: 'pointer'}}>
        <div className = "LeftBox">
          <img src={this.props.Song.cover_art} alt="png" width="100%" height="100%" />
        </div>
        
        <div className = "CenterBox">
          <div className="Title">
            "{this.props.Song.title}" 
          </div>
          <div className="Artist">
            By: {this.props.Song.artist}
          </div>
        </div>
        
        <div className = "RightBox">
          <div className="Genre">
            Genre: {this.props.Song.genre}
          </div>
          <div className="Year">
            Release year: {this.props.Song.release_year}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResult;
