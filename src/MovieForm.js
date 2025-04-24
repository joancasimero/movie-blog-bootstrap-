import React, { useState } from 'react';

function MovieForm({ addMovie, cancelForm }) {
  const [newMovie, setNewMovie] = useState({
    title: '',
    director: '',
    year: new Date().getFullYear(),
    genre: [],
    poster: 'https://via.placeholder.com/600x900',
    backdrop: 'https://via.placeholder.com/1920x1080',
    rating: 5,
    review: '',
    featured: false
  });

  const [genreInput, setGenreInput] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleGenreAdd = () => {
    if (genreInput && !newMovie.genre.includes(genreInput)) {
      setNewMovie({
        ...newMovie,
        genre: [...newMovie.genre, genreInput]
      });
      setGenreInput('');
    }
  };

  const handleGenreRemove = (genreToRemove) => {
    setNewMovie({
      ...newMovie,
      genre: newMovie.genre.filter(g => g !== genreToRemove)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(newMovie);
  };

  return (
    <div className="movie-form-container">
      <h2 className="mb-5 text-center">Add a New Film</h2>
      
      <form onSubmit={handleSubmit} className="movie-form">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="title">Film Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={newMovie.title}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="director">Director</label>
              <input
                type="text"
                id="director"
                name="director"
                value={newMovie.director}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="year">Release Year</label>
              <input
                type="number"
                id="year"
                name="year"
                value={newMovie.year}
                onChange={handleChange}
                min="1900"
                max="2030"
                required
                className="form-control"
              />
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <select
                id="rating"
                name="rating"
                value={newMovie.rating}
                onChange={handleChange}
                className="form-select"
              >
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="form-check mt-4">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={newMovie.featured}
                onChange={handleChange}
                className="form-check-input"
              />
              <label htmlFor="featured" className="form-check-label">
                Feature this film
              </label>
            </div>
          </div>
          
          <div className="col-12">
            <div className="form-group">
              <label>Genres</label>
              <div className="input-group">
                <input
                  type="text"
                  value={genreInput}
                  onChange={(e) => setGenreInput(e.target.value)}
                  className="form-control"
                  placeholder="e.g. Drama, Thriller, Comedy"
                />
                <button 
                  type="button" 
                  className="btn btn-outline-secondary"
                  onClick={handleGenreAdd}
                >
                  Add
                </button>
              </div>
              
              <div className="genre-tags mt-3">
                {newMovie.genre.map(genre => (
                  <span className="genre-tag me-2" key={genre}>
                    {genre}
                    <button 
                      type="button" 
                      className="remove-genre ms-2"
                      onClick={() => handleGenreRemove(genre)}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="review">Your Review</label>
              <textarea
                id="review"
                name="review"
                value={newMovie.review}
                onChange={handleChange}
                rows="5"
                required
                className="form-control"
              ></textarea>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="poster">Poster Image URL</label>
              <input
                type="url"
                id="poster"
                name="poster"
                value={newMovie.poster}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="backdrop">Backdrop Image URL</label>
              <input
                type="url"
                id="backdrop"
                name="backdrop"
                value={newMovie.backdrop}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>
          
          <div className="col-12 mt-4 text-center">
            <button type="submit" className="btn btn-primary me-3">
              Save Film
            </button>
            <button 
              type="button" 
              className="btn btn-outline-secondary"
              onClick={cancelForm}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MovieForm;