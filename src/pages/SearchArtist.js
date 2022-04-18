import React, { useState} from 'react';
import './SearchArtist.css';
import SongData from '../databases/songs/songs.json';
import SearchResult from '../components/SearchResult.js';


function SearchArtist(props) {
  const [searchTerm, setSearchTerm] = useState("")

  return(
      <div className="SearchArtist">
        <div className="ScrollView">
          <input
            autoFocus
            className="SearchBox"
            type="text"
            placeholder="Search for Song by Artist"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {SongData.filter(
            (song) => {
              if(searchTerm === "") {
                return song
              }
              else if(song.artist.toLowerCase().includes(searchTerm.toLowerCase())) {
                return song;
              }
            }
          ).map(
            (song) => {
              return(
                <React.Fragment key={song.id}>
                  <div className="ResultWrapper">
                    <div className="Divider"/>
                    <SearchResult Song={song} value={props.value} callback={props.callback}/>
                  </div>
                </React.Fragment>
              )
            }
          )
        }
        <div className="Divider"/>
      </div>
    </div>
  );
}
export default SearchArtist;