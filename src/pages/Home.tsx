import React from "react";
import IntroLanding from "../components/IntroLading";
import LandingPage from "../components/LandingPage";
import "../styles/pages/home.scss";

function Home() {
  return (
    <div className="task-home">
      <IntroLanding />
      <LandingPage />
    </div>
  );
}

export default Home;
