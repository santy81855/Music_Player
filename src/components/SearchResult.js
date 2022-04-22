import './SearchResult.css';
import React from 'react';


class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      open: false
    }
  }
  
  onTrigger = () => {
    this.props.callback(this.props.song, null);
  };

  addPlaylist = () => {
    console.log('clicked')
    this.setState((prevstate) =>{
      return {
        open : !prevstate.open
      }
    })
  }
  
  render() {
    //console.log("SR", this.props.user)
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
          <div className="containerlol">
            {/* <button onClick={this.addPlaylist} style={{width:'100px', cursor:'pointer'}}> Add to playlist </button> */}
            <button type="addplbutton">
              ☰
            </button>
            {
              this.state.open === true ?
              <div className='dropdown'>
              <ul>
                <li>Create new Playlist</li>
                {
                  this.props.user.playlists ? this.props.user.playlists.forEach(pl => {
                      <li>pl.title</li>
                  }): null
                }
              </ul>
              </div>
              : null
            } 
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResult;
