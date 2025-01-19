import React, { useEffect, useRef } from "react";
import "../styles/intro-landing.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { frames } from "./utils/frames";

gsap.registerPlugin(ScrollTrigger);

const IntroLanding: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageCache = useRef<Map<number, HTMLImageElement>>(new Map());
  const animationFrame = useRef<number>(0);

  // Preload images and store them in a cache
  const preloadImages = () => {
    frames.forEach((frame: any, index: number) => {
      const img = new Image();
      img.src = `/${frame}`;
      img.onload = () => {
        imageCache.current.set(index, img);

        // Render the first frame once it's loaded
        if (index === 0) {
          renderFrame(0);
        }
      };
    });
  };

  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imageCache.current.get(frameIndex);

    if (canvas && ctx && img) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    preloadImages();

    const totalFrames = frames.length - 1;

    gsap.to(animationFrame, {
      current: totalFrames,
      ease: "none",
      scrollTrigger: {
        trigger: ".main_frame",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const frameIndex = Math.min(
            Math.floor(self.progress * totalFrames),
            totalFrames
          );
          renderFrame(frameIndex);
        },
      },
    });

    return () => {
      // Clean up ScrollTrigger on unmount
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="task-main-frames">
      <div className="task-main-frame" style={{ height: "900vh" }}>
        <canvas className="canvas" ref={canvasRef} />
      </div>
    </div>
  );
};

export default IntroLanding;
