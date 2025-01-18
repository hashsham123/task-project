import React from "react";
import "../styles/navbar.scss";

function Navbar() {
  return (
    <div className="task-navbar">
      <div className="task-navbar-logo">
        <img src="assets/gif/icon.gif" alt="gif" />
      </div>
      <ul className="task-navbar-items">
        <li>Products</li>
        <li>Pricing</li>
        <li>Resources</li>
        <li>Partners</li>
        <li>Why Gcore</li>
      </ul>
      <div className="task-navbar-buttons">
        <button>Contact Us</button>
        <button className="bg-color">Sign-up for free </button>
      </div>
    </div>
  );
}

export default Navbar;
