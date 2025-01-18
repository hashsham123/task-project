import React from "react";
import "../styles/intro-nabar.scss";

function IntroNavbar() {
  return (
    <div className="task-intro-navbar">
      <div className="task-intro-navbar-desc">
        <p>GPU AI/ML Apps today! Nvidia A100s & H100s for $1.3/h </p>
        <img src="assets/images/next.png" alt="icon" />
      </div>
      <div className="task-intro-navbar-links">
        <p>Under attack?</p>
        <p>Login</p>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img src="assets/images/world.png" alt="icon" style={{height: "1rem"}}/>
          <p>EN</p>
        </div>
      </div>
    </div>
  );
}

export default IntroNavbar;
