import React from 'react';

const MovieList = ({ movies, onBook }) => {
  const imageStyle = {
    width: '100%',         // Adjust width as needed
    height: 'auto',        // Maintain aspect ratio
    maxWidth: '200px',     // Set a maximum width
    borderRadius: '8px',   // Optional: Add rounded corners
  };

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={movie.image} alt={movie.title} style={imageStyle} />
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <button onClick={() => onBook(movie)}>Book</button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;