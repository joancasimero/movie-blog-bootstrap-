import React from 'react';

function MovieDetail({ movie, onBack }) {
  if (!movie) return null;
  
  return (
    <div className="movie-detail">
      <div className="detail-backdrop" style={{ backgroundImage: `url(${movie.backdrop})` }}></div>
      <div className="detail-overlay"></div>
      
      <div className="container detail-content">
        <button className="back-button" onClick={onBack}>
          ← Back to Films
        </button>
        
        <div className="row py-5">
          <div className="col-md-4">
            <div className="detail-poster-container">
              <img 
                src={movie.poster} 
                alt={movie.title} 
                className="detail-poster"
              />
            </div>
          </div>
          
          <div className="col-md-8">
            <div className="detail-info">
              <h1 className="display-4 fw-bold mb-3">{movie.title}</h1>
              
              <div className="detail-meta mb-4">
                <span className="me-4">{movie.year}</span>
                <span className="me-4">{movie.director}</span>
                <div className="genre-tags mt-2">
                  {movie.genre.map(genre => (
                    <span className="genre-tag" key={genre}>{genre}</span>
                  ))}
                </div>
              </div>
              
              <div className="rating mb-4">
                {Array(5).fill().map((_, i) => (
                  <span 
                    key={i} 
                    className={`rating-star ${i < movie.rating ? 'filled' : ''}`}
                  >★</span>
                ))}
              </div>
              
              <div className="detail-description">
                <h3 className="mb-3">Review</h3>
                <p className="lead">{movie.review}</p>
              </div>
              
              <div className="detail-actions mt-5">
                <button className="btn btn-primary me-3">Watch Trailer</button>
                <button className="btn btn-outline-light">Add to Watchlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;