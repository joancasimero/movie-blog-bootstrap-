import React from 'react';

function Footer() {
  return (
    <footer className="footer mt-auto">
      <div className="container-fluid px-4 px-md-5">
        <div className="row py-5">
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="footer-title">JON'S CINEMA</h3>
            <p className="footer-text mt-3">
              A curated collection of film recommendations and personal reviews.
            </p>
          </div>
          
          <div className="col-md-2 mb-4 mb-md-0">
            <h5 className="footer-heading">Explore</h5>
            <ul className="footer-links">
              <li><a href="#">Films</a></li>
              <li><a href="#">HER Favorites</a></li>
            </ul>
          </div>
          
          <div className="col-md-2 mb-4 mb-md-0">
            <h5 className="footer-heading">About</h5>
            <ul className="footer-links">
              <li><a href="#">HER</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-md-4">
            <h5 className="footer-heading">Newsletter</h5>
            <p className="footer-text">Subscribe for weekly film recommendations.</p>
            <div className="input-group mt-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email"
              />
              <button className="btn btn-outline-light" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="row border-top py-4">
          <div className="col-md-6">
            <p className="mb-0 footer-copyright">
              © {new Date().getFullYear()} JON'S CINEMA. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0 footer-copyright">
              JON ♡
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;