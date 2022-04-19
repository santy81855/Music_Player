import './SearchResult.css';
import React from 'react';


class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  
  onTrigger = () => {
    this.props.callback(this.props.song);
  };
  
  render() {
    return (
      <div className = "SearchResult"
        onClick={this.onTrigger}
        style = {{cursor: 'pointer'}}
      >
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
    );
  }
}

export default SearchResult;
