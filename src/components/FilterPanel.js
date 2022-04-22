import React from 'react';
import './FilterPanel.css';
// Want multiple checkboxes for genre, minyear and maxyear text fields for release year
const FilterPanel = (props) => {
    const genres = ['Electronic', 'Jazz', 'Trap', 'Pop', 'EDM', 'Chill', 'Acoustic'];

    const handleMinYearChange = (e) => {
        if (e.target.value.length === 4) {
            props.setMinYear(e.target.value);
        }
        else {            
            props.setMinYear('1900');
        }
    }

    const handleMaxYearChange = (e) => {
        if (e.target.value.length === 4) {
            props.setMaxYear(e.target.value);
        }
        else {
            props.setMaxYear('2022');
        }
    }

    const handleGenreChange = (e) => {
        // everything from genres array
        if(e.target.checked) {       
            props.setGenres([...props.genres, e.target.name.toLowerCase()]);
        }
        else {
            props.setGenres(props.genres.filter(genre => genre !== e.target.name.toLowerCase()));
        }
    }

    return(
        <div className='filterPanel'>
            <h4>Filter by Year:</h4>
            <input onChange={handleMinYearChange} type="number" min="1900" max="2022" placeholder="Min. Year" step="1"/>
            <input onChange={handleMaxYearChange} type="number" min="1900" max="2022" placeholder="Max. Year" step="1"/>
            <h4>Filter by Genre:</h4>
            <div id="checkboxes">
               {genres.map(genre => {
                return <label for={genre}>
                    <input onChange={handleGenreChange} type="checkbox" name={genre}/>{genre}
                </label>
                })}
            </div>
        </div>
    )
}
export default FilterPanel;