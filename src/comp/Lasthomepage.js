import React from 'react';
import './Last.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const ImageWithText = () => {
  return (
    <div className="image-container">
      <div className="overlay-text">
        <h2>CALL US NOW</h2>
        <p>+1(214)868-1515</p>
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>

      </div>
      <img src="./world.png" alt="image" />
      <div className="main-text">
        <p>Primestar Technologyis an organization with an international executive and management team that brings a wealth of experience in major aspects of running a world-class IT services company.
        </p>
        <p style={{ color: "#AA0000" }}> Call us for further information.</p>
      </div>
    </div>
  );
};

export default ImageWithText;
