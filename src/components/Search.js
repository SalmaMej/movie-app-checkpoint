import React from 'react';
import './search.css'
import StarRating from './StarRating/StartRating';


const Search = ({handleSearch, searchValue, searchRate, handleSearchRate}) => {
    return(
        <div className='header-container'>
            <h1>Movie App</h1>
            <div className='search-container'>
                <input type='text' value={searchValue} onChange={handleSearch} />
                <StarRating rate={searchRate} handleRate={handleSearchRate} />

            </div>
        </div>
    )
}

export default Search;
