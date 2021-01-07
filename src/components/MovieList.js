import React from 'react';
import MovieCard from './MovieCard';
import './movieList.css'

const MovieList = ({ movieList }) => {
    return(
        <div className='MovieList'>
            {movieList.map((movie) => (
                <MovieCard film = {movie} key={movie.id} />
            ) )}
        </div>
    )
}

export default MovieList;