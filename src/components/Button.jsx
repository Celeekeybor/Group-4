import React from 'react';
import './Button.css'; // Import CSS for styling
import { useNavigate } from 'react-router-dom';

function Button() {
  const handleButtonClick = (route) => {
    window.location.href = window.location.origin + route; // Uses full page reload with the correct origin
  };

  return (
    <div className="buttons-container">
      <button className="button" onClick={() => handleButtonClick('/join-gdg')}>
        Join GDG
      </button>
      <button className="button" onClick={() => handleButtonClick('/support')}>
        Support
      </button>
      <button className="button" onClick={() => handleButtonClick('/about')}>
        About
      </button>
      <button className="button" onClick={() => handleButtonClick('/contact-us')}>
        Contact Us
      </button>
    </div>
  );
}

export default Button;
