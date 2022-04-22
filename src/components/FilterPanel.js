import React from 'react';
import './FilterPanel.css';
// Want multiple checkboxes for genre, minyear and maxyear text fields for release year
const FilterPanel = (props) => {
    const genres = ['Electronic', 'Jazz', 'Trap', 'Pop', 'EDM', 'Chill', 'Acoustic'];

    const handleMinYearChange = (e) => {
        // Only update filter if user put in 4 digits
        if (e.target.value.length === 4) {
            props.setMinYear(e.target.value);
        }
        else {            
            props.setMinYear('1900');
        }
    }

    const handleMaxYearChange = (e) => {
        // Only update filter if user put in 4 digits
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
            // everything checked = nothing checked (why would you want to filter and display nothing?)
            props.setGenres(props.genres.filter(genre => genre !== e.target.name.toLowerCase()));
        }
    }

    return(
        <div className="FilterPanel">
            {/* <div>Filter by Year:</div> */}
            {/* <div>Filter by Genre:</div> */}
            <div className="Checkbox" >
                {genres.map(genre => {
                    return (
                        <label key = {genre} htmlFor={genre}>
                            <input onChange={handleGenreChange} type="checkbox" name={genre}/>{genre}
                        </label>
                    );
                })}
            </div>
            <div className="ReleaseYear">
                <input
                    className="ReleaseYearInput"
                    onChange={handleMinYearChange}
                    type="number" min="1900" max="2022"
                    placeholder="Min Year" step="1"/>
                <input
                    className="ReleaseYearInput"
                    onChange={handleMaxYearChange}
                    type="number" min="1900" max="2022"
                    placeholder="Max Year" step="1"/>
            </div>
        </div>
    )
}
export default FilterPanel;