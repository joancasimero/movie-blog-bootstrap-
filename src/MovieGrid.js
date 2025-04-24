import React, { useState } from 'react';

function MovieGrid({ movies, onMovieClick }) {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const allGenres = [...new Set(movies.flatMap(movie => movie.genre))];
  
  const filteredMovies = activeFilter === 'All' 
    ? movies 
    : movies.filter(movie => movie.genre.includes(activeFilter));

  return (
    <section className="movie-grid-section">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5">
        <h2 className="section-title mb-4 mb-md-0">Films</h2>
        
        <div className="genre-filter">
          <button 
            className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
            onClick={() => setActiveFilter('All')}
          >
            All
          </button>
          {allGenres.map(genre => (
            <button 
              key={genre} 
              className={`filter-btn ${activeFilter === genre ? 'active' : ''}`}
              onClick={() => setActiveFilter(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
      
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 g-md-5">
        {filteredMovies.map(movie => (
          <div className="col" key={movie.id}>
            <div className="movie-card" onClick={() => onMovieClick(movie)}>
              <div className="movie-poster-container">
                <img 
                  src={movie.poster} 
                  alt={movie.title} 
                  className="movie-poster"
                />
                <div className="movie-overlay">
                  <span className="view-details">View Details</span>
                </div>
              </div>
              <div className="movie-info mt-3">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-meta">{movie.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieGrid;