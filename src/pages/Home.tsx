import React, { useEffect, useState } from "react";
import IntroLanding from "../components/IntroLading";
import LandingPage from "../components/LandingPage";
import "../styles/pages/home.scss";
import IntroNavbar from "../components/IntroNavbar";
import ProductInfo from "../components/ProductInfo";
import Navbar2 from "../components/Navbar2";

function Home() {
  const [isFixed1, setIsFixed1] = useState(false);
  const [isFixed2, setIsFixed2] = useState(false);
  const [isFixed3, setIsFixed3] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const targetHeight = window.innerHeight * 5.5;
      setIsFixed1(scrollTop >= targetHeight);
      setIsFixed2(scrollTop >= targetHeight + 100);
      setIsFixed3(scrollTop >= targetHeight + 1500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="task-home">
      <IntroNavbar />
      <div
        style={{
          position: isFixed1 ? "sticky" : "relative",
          top: isFixed1 ? "0" : undefined,
        }}
      >
        <IntroLanding />
      </div>
      <div
        style={{
          position: isFixed2 ? "sticky" : "relative",
          top: isFixed2 ? "42px" : undefined,
        }}
      >
        <LandingPage />
      </div>

      <div
        style={{
          display: isFixed3 ? "flex" : "none",
        }}
      >
        <Navbar2 />
      </div>
      <ProductInfo />
    </div>
  );
}

export default Home;
