import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Button.css'; // Import CSS for styling

function Button() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleButtonClick = (route) => {
    // Use navigate to go to the specified route within the same tab
    navigate(route); 
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
