import './SearchResult.css';
import React, {createContext} from 'react';
// import MyContext from '../components/MainPage.js'

const MyContext = createContext("");

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  
  onTrigger = () => {
    // console.log(this.props.value);
    // console.log("In Search Results");
    this.props.callback(this.props.Song);
  };
  
  render() {
    return (
      // <div className = "SearchResult" onClick={() => console.log("Clicked:", this.props.Song.title)} style = {{cursor: 'pointer'}}>
      <div className = "SearchResult"
        onClick={this.onTrigger}
        style = {{cursor: 'pointer'}}
        // value={"Hello Context!"}
      >
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
