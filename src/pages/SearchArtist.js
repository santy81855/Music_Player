import React, { useState} from 'react';
import './SearchArtist.css';
import songData from '../databases/songs/songs.json';
import SearchResult from '../components/SearchResult.js';
import FilterPanel from '../components/FilterPanel.js';


function SearchArtist(props) {
  const [searchTerm, setSearchTerm] = useState("")
  const [genres, setGenres] = useState([])
  // 1900 and 2022 are min and max years, respectively for release year
  const [minYear, setMinYear] = useState(1900)
  const [maxYear, setMaxYear] = useState(2022)

  // Function that filters the song genre with the genres array. 
  // Used because songs can have multiple genres
  const containsGenre = (songGenre) => {
    let songGenres = songGenre.split(", ");
    let filteredGenres = []
    for (let i = 0; i < songGenres.length; i++) {
      if (genres.includes(songGenres[i].toLowerCase())) {
        filteredGenres.push(songGenres[i])
      }
    }
    return filteredGenres.length > 0
  }

  return(
      <div className="SearchArtist">
        <div className="ScrollView">
          <input
            autoFocus
            className="SearchBox"
            type="text"
            placeholder="Search for song by Artist"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FilterPanel 
            className="searchPanel" 
            genres={genres} 
            setGenres={setGenres} 
            minYear={minYear}
            setMinYear={setMinYear} 
            maxYear={maxYear} 
            setMaxYear={setMaxYear}
          />
          {songData.filter(
           (song) => {
            // Use a flag to show if a song does not meet a condition
            let isShown = true;

            if (genres.length !== 0 && !containsGenre(song.genre)) {
              isShown = false
            }
            // comparing int with string works lol
            if (song.release_year < minYear) { 
              isShown = false
            }
            if (song.release_year > maxYear) {
              isShown = false;
            }
            if(!song.artist.toLowerCase().includes(searchTerm.toLowerCase())) {
              isShown = false;
            }
            if (isShown === true) {
              return song
            }
          }
          ).map(
            (song) => {
              return(
                <React.Fragment key={song.id}>
                  <div className="ResultWrapper">
                    <div className="Divider"/>
                    <SearchResult user={props.user} song={song} value={props.value} callback={props.callback}/>
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