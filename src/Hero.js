import React from 'react';

function Hero({ movie }) {
  if (!movie) return null;
  
  return (
    <div className="hero-section">
      <div className="hero-backdrop" style={{ backgroundImage: `url(${movie.backdrop})` }}></div>
      <div className="hero-overlay"></div>
      <div className="container-fluid hero-content">
        <div className="row align-items-center">
          <div className="col-md-6 pe-md-5">
            <h1 className="display-3 fw-bold">{movie.title}</h1>
            <p className="lead opacity-75 mb-4">
              {movie.year} | {movie.director} | {movie.genre.join(', ')}
            </p>
            <p className="hero-description">{movie.review}</p>
            <button className="btn btn-outline-light mt-4">Watch Trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;