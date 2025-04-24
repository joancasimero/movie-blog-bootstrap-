import React, { useState, useEffect } from 'react';

function Navbar({ onAddMovieClick, onBackToHome }) {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container-fluid px-4 px-md-5">
        <a className="navbar-brand" href="#" onClick={onBackToHome}>
          JON'S CINEMA
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={onBackToHome}>Films</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">HER Favorites</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <button 
            className="btn btn-link nav-link border-0" 
            onClick={onAddMovieClick}
          >
            Add Film
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;