import { useState } from "react";
import "./SurveyPopup.css";
import { MdOutlineTimer } from "react-icons/md";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";

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
            thoughts, and help improve the existing tools and techniques.
          </p>
          <div className="survey-popup-conditions">
            <div className="survey-popup-icons">
              <MdOutlineTimer />
              <p>2-5 min</p>
            </div>

            <div className="survey-popup-icons">
              <RiGitRepositoryPrivateFill />
              <p>Anonymous</p>
            </div>
          </div>
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
