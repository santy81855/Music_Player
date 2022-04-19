import './LibraryItem.css';
import React from 'react';
import songPNG from '../icons/song.png';

class LibraryItem extends React.Component {
  render() {
    return (
      <div className="LibraryItem" style={{ backgroundImage: `url(${songPNG})` }}>
        {/* <img className="Cover" src={songPNG} alt="item"/> */}
        <div className="TagBar">
          Text
        </div>
      </div>
    );
  }
}

export default LibraryItem;
