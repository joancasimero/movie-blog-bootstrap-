import React, { useState } from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  const [filter, setFilter] = useState('all');
  
  const filteredMovies = filter === 'all' 
    ? movies 
    : movies.filter(movie => movie.genre.includes(filter));
  
  const genres = [...new Set(movies.flatMap(movie => movie.genre))];

  return (
    <div className="movie-list my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>My Movie Collection</h2>
        <div className="filter-buttons">
          <button 
            className={`btn ${filter === 'all' ? 'btn-dark' : 'btn-outline-dark'} me-2`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          {genres.map(genre => (
            <button 
              key={genre}
              className={`btn ${filter === genre ? 'btn-dark' : 'btn-outline-dark'} me-2`}
              onClick={() => setFilter(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
      
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        {filteredMovies.map(movie => (
          <div className="col" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;