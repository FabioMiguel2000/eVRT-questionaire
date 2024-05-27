import React, { useState } from "react";
import "./SurveyPopup.css";

const SurveyPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="survey-popup">
        <div className="survey-popup-content">
          <button className="survey-popup-close" onClick={closePopup}>
            ×
          </button>
          <h2>Have a moment?</h2>
          <p>
            Participate in our study on Visual Regression Testing to share your
            thoughts, and you'll get a chance to receive a gift card.
          </p>
          <a
            className="survey-popup-link"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdDQvZhmvPtiNd-uHi3CvVMs5nEwklO71upTW1rYTIYPiboEA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Take the Survey
          </a>
        </div>
      </div>
    )
  );
};

export default SurveyPopup;
