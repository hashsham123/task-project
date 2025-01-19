import React, { useEffect, useState, useRef } from "react";
import "../styles/navbar.scss";
import "animate.css";
import useVisibilityObserver from "./utils/useVisibilityObserver";

function Navbar() {
  const { ref: gifRef, hasBeenVisible: isGifVisible } = useVisibilityObserver();
  const { ref: animatedRef, hasBeenVisible: isElementVisible } =
    useVisibilityObserver();
  const [showGif, setShowGif] = useState(false); // Controls when to display the GIF
  const [isGifCompleted, setIsGifCompleted] = useState(false); // Tracks if the GIF has completed playing

  // Handle GIF visibility and completion
  useEffect(() => {
    if (isGifVisible && !isGifCompleted) {
      setShowGif(true);
      const gifDuration = 2010; // Duration of the GIF in milliseconds
      const timer = setTimeout(() => {
        setShowGif(false);
        setIsGifCompleted(true);
      }, gifDuration);

      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [isGifVisible, isGifCompleted]);

  return (
    <div className="task-navbar">
      <div className="task-navbar-logo" ref={gifRef}>
        {showGif && !isGifCompleted ? (
          <img src="assets/gif/icon.gif" alt="gif" />
        ) : (
          <img src="assets/images/icon.png" alt="static" />
        )}
      </div>
      <ul className="task-navbar-items">
        <li>Products</li>
        <li>Pricing</li>
        <li
          ref={animatedRef}
          className={`${
            isElementVisible
              ? "animate__animated animate__fadeInUp animate__fast"
              : ""
          }`}
        >
          Resources
        </li>
        <li
          ref={animatedRef}
          className={`${
            isElementVisible
              ? "animate__animated animate__fadeInUp animate__slow"
              : ""
          }`}
        >
          Partners
        </li>
        <li
          ref={animatedRef}
          className={`${
            isElementVisible
              ? "animate__animated animate__fadeInUp animate__slower"
              : ""
          }`}
        >
          Why Gcore
        </li>
      </ul>
      <div className="task-navbar-buttons">
        <button
          className={`${
            isElementVisible
              ? "animate__animated animate__fadeInUp animate__slow"
              : ""
          }`}
        >
          Contact Us
        </button>
        <button
          className={` bg-color ${
            isElementVisible
              ? "animate__animated animate__fadeInUp animate__slower"
              : ""
          }`}
        >
          Sign-up for free
        </button>
      </div>
    </div>
  );
}

export default Navbar;
