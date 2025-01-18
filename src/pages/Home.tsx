import React, { useEffect, useState } from "react";
import IntroLanding from "../components/IntroLading";
import LandingPage from "../components/LandingPage";
import "../styles/pages/home.scss";

function Home() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const targetHeight = window.innerHeight * 5.9;
      setIsFixed(scrollTop >= targetHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="task-home">
      <div
        style={{
          position: isFixed ? "sticky" : "relative",
          top: isFixed ? "0" : undefined,
        }}
      >
        <IntroLanding />
      </div>
      <LandingPage />
    </div>
  );
}

export default Home;
