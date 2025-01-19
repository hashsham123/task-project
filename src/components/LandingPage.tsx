import React from "react";
import Navbar from "./Navbar";
import "../styles/lading-page.scss";
import "animate.css";
import useVisibilityObserver from "./utils/useVisibilityObserver";

function LandingPage() {
  const headListObserver = useVisibilityObserver();
  const descriptionListObserver = useVisibilityObserver();
  const buttonsObserver = useVisibilityObserver();

  return (
    <section className="task-landing-section">
      <div className="task-landing-image">
        <img src="assets/gif/background-video.gif" alt="gif" />
      </div>
      <Navbar />
      <div className="task-landing-content">
        <button className="task-landing-content-badge">
          <img src="assets/icons/shines.png" alt="icon" />
          <p>Beta release</p>
        </button>
        <ul className="task-head-list">
          <li
            className={` ${
              headListObserver.isVisible
                ? "animate__animated animate__fadeInUp animate__faster"
                : ""
            }`}
            ref={headListObserver.ref}
          >
            Inference
          </li>
          <li
            className={` ${
              headListObserver.isVisible
                ? "animate__animated animate__fadeInUp animate__fast"
                : ""
            }`}
          >
            at
          </li>
          <li
            className={` ${
              headListObserver.isVisible
                ? "animate__animated animate__fadeInUp animate__slow"
                : ""
            }`}
          >
            the
          </li>
          <li
            className={` ${
              headListObserver.isVisible
                ? "animate__animated animate__fadeInUp animate__slower"
                : ""
            }`}
          >
            Edge
          </li>
        </ul>
        <ul className="task-landing-content-description">
          <li
            className={` ${
              descriptionListObserver.isVisible
                ? "animate__animated animate__fadeInUp animate__fast"
                : ""
            }`}
            ref={descriptionListObserver.ref}
          >
            Boost your AI application's speed and efficiency globally by
            bringing
          </li>
          <li
            className={` ${
              descriptionListObserver.isVisible
                ? "animate__animated animate__fadeInUp animate__slow"
                : ""
            }`}
            ref={descriptionListObserver.ref}
          >
            inference closer to your users. Enjoy customization and cost
            efficiency for a
          </li>
          <li
            className={` ${
              descriptionListObserver.isVisible
                ? "animate__animated animate__fadeInUp animate__slower"
                : ""
            }`}
            ref={descriptionListObserver.ref}
          >
            best in class inference experience
          </li>
        </ul>
        <div className="task-landing-buttons">
          <button
            className={`bg-color ${
              buttonsObserver.isVisible
                ? "animate__animated animate__fadeInUp animate__slow"
                : ""
            }`}
            ref={buttonsObserver.ref}
          >
            Get started
          </button>
          <button
            className={` ${
              buttonsObserver.isVisible
                ? "animate__animated animate__fadeInUp animate__slower"
                : ""
            }`}
            ref={buttonsObserver.ref}
          >
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
