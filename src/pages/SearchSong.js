import React, { useState} from 'react';
import './SearchSong.css';
import songData from '../databases/songs/songs.json';
import SearchResult from '../components/SearchResult.js';


function SearchSong(props) {
  // New usestate?
  const [searchTerm, setSearchTerm] = useState("")

  return(
      <div className="SearchSong">
        <div className="ScrollView">
          <input
            autoFocus
            className="SearchBox"
            type="text"
            placeholder="Search for song by Title"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {songData.filter(
            (song) => {
              if(searchTerm === "") {
                return song
              }
              // If statements in here, props, check if prop is null
              // if year is not empty, && song release year > props release year (for min year)
              // use state with array inside, checkbox pushes value to array, unchecking pulls value out of array
              // use includes
              else if(song.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                if (props.genre !== null) {
                  if (props.genre.toLowerCase().includes(song.genre.toLowerCase())) {
                    return song;
                  }
                }
                if (props.minyear !== null) {
                  if (song.release_year > props.minyear) {
                    return song;
                  }

                }
                return song;
              }
            }
          ).map(
            (song) => {
              return(
                <React.Fragment key={song.id}>
                  <div className="ResultWrapper">
                    <div className="Divider"/>
                    <SearchResult song={song} callback={props.callback}/>
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
export default SearchSong;