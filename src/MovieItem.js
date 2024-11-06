import React from 'react';

const MovieItem = ({ movie, onBook }) => {
  return (
    <li className="movie-item">
      <img 
        src={movie.image} 
        alt={movie.title} 
      />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <button onClick={() => onBook(movie)}>Book Now</button>
    </li>
  );
};

export default MovieItem;