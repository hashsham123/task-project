import React, { useEffect, useRef, useState } from "react";
import "../styles/intro-landing.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { frames } from "./utils/frames";

gsap.registerPlugin(ScrollTrigger);

const IntroLanding: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageCache = useRef<Map<number, HTMLImageElement>>(new Map());
  const animationFrame = useRef<number>(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  // Preload images and store them in a cache
  const preloadImages = () => {
    const totalFrames = frames.length;
    let loadedCount = 0;

    frames.forEach((frame: string, index: number) => {
      const img = new Image();
      img.src = `/${frame}`;
      img.onload = () => {
        imageCache.current.set(index, img);
        loadedCount++;

        // Mark all images as loaded when done
        if (loadedCount === totalFrames) {
          setAllImagesLoaded(true);
          renderFrame(0); // Render the first frame
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

    if (allImagesLoaded) {
      const totalFrames = frames.length - 1;

      const animation = gsap.to(animationFrame, {
        current: totalFrames,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".task-main-frame",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3, // Faster response to scroll
          onUpdate: (self) => {
            // Skip more frames for faster transitions
            const frameIndex = Math.min(
              Math.floor(self.progress * totalFrames * 1.5), // Multiplied by 1.5 for faster frame changes
              totalFrames
            );
            renderFrame(frameIndex);
          },
        },
      });

      return () => {
        animation.kill(); // Clean up animation on unmount
        ScrollTrigger.killAll();
      };
    }
  }, [allImagesLoaded]);

  useEffect(() => {
    const resizeHandler = () => {
      renderFrame(animationFrame.current);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="task-main-frames">
      <div className="task-main-frame" style={{ height: "700vh" }}>
        <canvas className="canvas" ref={canvasRef} />
        {!allImagesLoaded && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default IntroLanding;
