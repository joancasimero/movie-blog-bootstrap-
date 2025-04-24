import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import MovieGrid from './MovieGrid';
import MovieDetail from './MovieDetail';
import MovieForm from './MovieForm';
import Footer from './Footer';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Anora",
      director: "Sean Baker",
      year: 2024,
      genre: ["Drama", "Comedy", "Romance"],
      poster: "https://a.ltrbxd.com/resized/film-poster/9/5/9/5/4/0/959540-anora-0-1000-0-1500-crop.jpg?v=6f92877033",
      rating: 5,
      review: "With broad, electric strides, Sean Baker takes his biggest and boldest splash into americana yet with Anora by building up and knocking down the bear trap dream. Unfolding a sprawling whirlwind and its paralyzing standstill, Mikey Madison kicks and screams her way into stardom with a firestorm performance that is sure to carry her to the Oscar’s stage. ",
      featured: true,
      backdrop: "https://www.comingsoon.net/wp-content/uploads/sites/3/2024/07/Evolve-16-7.jpg"
    },
    {
      id: 2,
      title: "The Breadwinner",
      director: "Nora Twomey",
      year: 2017,
      genre: ["Animation"],
      poster: "https://a.ltrbxd.com/resized/film-poster/3/6/8/1/6/5/368165-the-breadwinner-0-1000-0-1500-crop.jpg?v=2af24dc002",
      rating: 4,
      review: "Through its refreshing 2D animation style, The Breadwinner takes us on an emotional and striking journey through a story we wish was only fiction.I'm beyond words.",
      featured: false,
      backdrop: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/23/14/the-breadwinner.jpg?quality=75&width=1200&auto=webp"
    },
    {
      id: 3,
      title: "Whiplash",
      director: "Damien Chazelle",
      year: 2014,
      genre: ["Drama", "Music"],
      poster: "https://a.ltrbxd.com/resized/sm/upload/cl/dn/kr/f1/4C9LHDxMsoYI0S3iMPZdm3Oevwo-0-1000-0-1500-crop.jpg?v=d13ea36528",
      rating: 5,
      review: "I'd crie for a whole year if fletcher yelled at me once. yes na yes talaga sa ending.",
      featured: false,
      backdrop: "https://www.indiewire.com/wp-content/uploads/2014/01/whiplash-3.jpg"
    },
    {
      id: 4,
      title: "The Hunger Games: The Ballad of Songbirds and Snakes",
      director: "Francis Lawrence",
      year: 2023,
      genre: ["Action", "Drama", "Adventure"],
      poster: "https://a.ltrbxd.com/resized/film-poster/6/1/9/5/1/0/619510-the-hunger-games-the-ballad-of-songbirds-snakes-0-1000-0-1500-crop.jpg?v=180f24b89f",
      rating: 5,
      review: "never trust a man during his buzz cut era. men have one bad breakup in high school and make it everyone’s problem for the rest of their life.",
      featured: false,
      backdrop: "https://image.tmdb.org/t/p/original/3vLmthFaJyMAp1YEXEYmSKx1cXZ.jpg"
    },
    {
      id: 5,
      title: "The Great Gatsby",
      director: "Baz Luhrmann",
      year: 2013,
      genre: ["Drama"],
      poster: "https://a.ltrbxd.com/resized/film-poster/2/8/5/285-the-great-gatsby-0-1000-0-1500-crop.jpg?v=83157e478f",
      rating: 4,
      review: "if an old sport could old sport how much would an old sport old sport. are we just gonna IGNORE that nick had a huge ass thing for jay..,, the great gatsby? more like the gay gatsby.",
      featured: false,
      backdrop: "https://th.bing.com/th/id/OIP.r4vp7GJmKQHPSH9luzeWbQHaEE?rs=1&pid=ImgDetMain"
    },
    {
      id: 6,
      title: "Step Up 2: The Streets",
      director: "Jon Chu",
      year: 2008,
      genre: ["Music", "Drama"],
      poster: "https://a.ltrbxd.com/resized/film-poster/4/7/8/0/4/47804-step-up-2-0-1000-0-1500-crop.jpg?v=1af06f28e8",
      rating: 3,
      review: "any moment moose was not on screen was a moment wasted. The final dance sequence is still the best thing I've ever seen in a Step Up movie.",
      featured: false,
      backdrop: "https://th.bing.com/th/id/R.d7f5885901b7b929a7b82a358148aad4?rik=b%2fdwQYhvRujPAg&riu=http%3a%2f%2fimages2.fanpop.com%2fimages%2fphotos%2f3400000%2fStep-Up-2-wallpapers-briana-evigan-3468113-1920-1280.jpg&ehk=C9MGg90CVqhx9gyGkoLMu88tA6hbOlbzXdWsjurxMn4%3d&risl=&pid=ImgRaw&r=0"
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentView, setCurrentView] = useState('grid');

  const addMovie = (newMovie) => {
    newMovie.id = movies.length + 1;
    setMovies([...movies, newMovie]);
    setShowForm(false);
    setCurrentView('grid');
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setCurrentView('detail');
  };

  const handleAddMovieClick = () => {
    setCurrentView('form');
  };

  const handleBackToGrid = () => {
    setCurrentView('grid');
    setSelectedMovie(null);
  };

  const featuredMovie = movies.find(movie => movie.featured);

  return (
    <div className="app">
      <Navbar onAddMovieClick={handleAddMovieClick} onBackToHome={handleBackToGrid} />
      
      {currentView === 'grid' && (
        <>
          <Hero movie={featuredMovie} />
          <div className="container-fluid px-4 px-md-5">
            <MovieGrid movies={movies} onMovieClick={handleMovieClick} />
          </div>
        </>
      )}
      
      {currentView === 'detail' && selectedMovie && (
        <MovieDetail movie={selectedMovie} onBack={handleBackToGrid} />
      )}
      
      {currentView === 'form' && (
        <div className="container py-5">
          <MovieForm addMovie={addMovie} cancelForm={handleBackToGrid} />
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default App;