import React from 'react';
import './movieCard.css';
import StarRating from './StarRating/StartRating';

const MovieCard = ({ film }) => {
    return (
        <div className="Card-container">
            
            <h2>{film.title}</h2>
            <div className='img-container'>
                <img src={film.posterUrl} alt={film.title} className='movieimage' />
            </div>
            <div className='description'>
                <p>{film.description}</p>
            </div>
            <div className= 'rate'>
                <StarRating rate={film.rate} />
            </div>
        </div>
    )
};

export default MovieCard;