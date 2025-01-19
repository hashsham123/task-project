import React, { useEffect, useState, useRef } from "react";
import "../styles/product-info.scss";
import BadgeHolder from "./BadgeHolder";
import { badgeData } from "../staticData/batchData";
import "animate.css";

function ProductInfo() {
  const [visibleStates, setVisibleStates] = useState({
    ul1: false,
    ul2: false,
    ul3: false,
  });

  const observers: any = useRef({}); // Keep references to Intersection Observers
  const ulRefs: any = useRef({}); // Store references to each ul element

  useEffect(() => {
    const handleIntersection = (entries: any, ulKey: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setVisibleStates((prevStates) => ({
            ...prevStates,
            [ulKey]: true,
          }));
          if (observers.current[ulKey]) {
            observers.current[ulKey].disconnect(); // Disconnect after observing once
          }
        }
      });
    };

    // Initialize observers for each ul
    Object.keys(ulRefs.current).forEach((ulKey) => {
      const observer = new IntersectionObserver((entries) =>
        handleIntersection(entries, ulKey)
      );
      const ulElement = ulRefs.current[ulKey];
      if (ulElement) {
        ulElement
          .querySelectorAll("li")
          .forEach((li: any) => observer.observe(li));
      }
      observers.current[ulKey] = observer;
    });

    return () => {
      // Cleanup observers on unmount
      Object.values(observers.current).forEach((observer: any) =>
        observer.disconnect()
      );
    };
  }, []);

  return (
    <div className="task-product-info">
      <div className="task-content-holder">
        <div className="task-product-buttons">
          <button className="bg-color">What is?</button>
          <button>How it works?</button>
        </div>
        <ul
          ref={(el) => (ulRefs.current.ul1 = el)}
          className="taks-product-heading"
        >
          <li style={{ display: "flex", gap: "0.5rem" }}>
            <span
              className={`${
                visibleStates.ul1
                  ? "animate__animated animate__fadeInUp animate__faster"
                  : ""
              }`}
            >
              Use
            </span>
            <span
              className={`${
                visibleStates.ul1
                  ? "animate__animated animate__fadeInUp animate__faster"
                  : ""
              }`}
            >
              AI
            </span>
            <span
              className={`${
                visibleStates.ul1
                  ? "animate__animated animate__fadeInUp animate__fast"
                  : ""
              }`}
            >
              faster
            </span>
            <span
              className={`${
                visibleStates.ul1
                  ? "animate__animated animate__fadeInUp animate__slow"
                  : ""
              }`}
            >
              and
            </span>
            <span
              className={`${
                visibleStates.ul1
                  ? "animate__animated animate__fadeInUp animate__slower"
                  : ""
              }`}
            >
              more
            </span>
          </li>
          <li style={{ display: "flex", gap: "0.5rem" }}>
            <span
              className={`${
                visibleStates.ul1
                  ? "animate__animated animate__fadeInUp animate__faster"
                  : ""
              }`}
            >
              {" "}
              efficiently
            </span>
            <span
              className={`${
                visibleStates.ul1
                  ? "animate__animated animate__fadeInUp animate__faster"
                  : ""
              }`}
            >
              right
            </span>
            <span
              className={`${
                visibleStates.ul1
                  ? "animate__animated animate__fadeInUp animate__fast"
                  : ""
              }`}
            >
              {" "}
              on
            </span>
            <span
              className={`${
                visibleStates.ul1
                  ? "animate__animated animate__fadeInUp animate__slow"
                  : ""
              }`}
            >
              your
            </span>
            <span
              className={`${
                visibleStates.ul1
                  ? "animate__animated animate__fadeInUp animate__slower"
                  : ""
              }`}
            >
              device!
            </span>
          </li>
        </ul>
        <div className="task-product-content">
          <div className="task-product-image">
            <img src="assets/images/stars.jpg" alt="star-image" />
            <p style={{ display: "flex", gap: "0.5rem" }}>
              <span
                className={`${
                  visibleStates.ul1
                    ? "animate__animated animate__fadeInUp animate__faster"
                    : ""
                }`}
              >
                Try
              </span>
              <span
                className={`${
                  visibleStates.ul1
                    ? "animate__animated animate__fadeInUp animate__faster"
                    : ""
                }`}
              >
                Gcore
              </span>
              <span
                className={`${
                  visibleStates.ul1
                    ? "animate__animated animate__fadeInUp animate__fast"
                    : ""
                }`}
              >
                Interference
              </span>
              <span
                className={`${
                  visibleStates.ul1
                    ? "animate__animated animate__fadeInUp animate__slow"
                    : ""
                }`}
              >
                At
              </span>

              <span
                className={`${
                  visibleStates.ul1
                    ? "animate__animated animate__fadeInUp animate__slower"
                    : ""
                }`}
              >
                Edge
              </span>
            </p>

            <p style={{ display: "flex", gap: "0.5rem" }}>
              <span
                className={`${
                  visibleStates.ul1
                    ? "animate__animated animate__fadeInUp animate__faster"
                    : ""
                }`}
              >
                Speed
              </span>
              <span
                className={`${
                  visibleStates.ul1
                    ? "animate__animated animate__fadeInUp animate__faster"
                    : ""
                }`}
              >
                Up
              </span>
              <span
                className={`${
                  visibleStates.ul1
                    ? "animate__animated animate__fadeInUp animate__fast"
                    : ""
                }`}
              >
                Ai,
              </span>
              <span
                className={`${
                  visibleStates.ul1
                    ? "animate__animated animate__fadeInUp animate__slow"
                    : ""
                }`}
              >
                Reduce
              </span>
              <span
                className={`${
                  visibleStates.ul1
                    ? "animate__animated animate__fadeInUp animate__slower"
                    : ""
                }`}
              >
                Latency.
              </span>
            </p>
          </div>
          <div className="task-product-description">
            <ul>
              <li
                ref={(el) => (ulRefs.current.ul2 = el)}
                className={`${
                  visibleStates.ul1
                    ? "animate__animated animate__fadeInUp animate__fast"
                    : ""
                }`}
              >
                Gcore inference at the Edge reduces the
              </li>
              <li
                ref={(el) => (ulRefs.current.ul2 = el)}
                className={`${
                  visibleStates.ul1
                    ? "animate__animated animate__fadeInUp animate__slow"
                    : ""
                }`}
              >
                latency of your ML model output and improves
              </li>
              <li
                ref={(el) => (ulRefs.current.ul2 = el)}
                className={`${
                  visibleStates.ul1
                    ? "animate__animated animate__fadeInUp animate__slower"
                    : ""
                }`}
              >
                the performance of AI-enabled applications.{" "}
              </li>
            </ul>

            <ul className="task-product-list">
              <li
                ref={(el) => (ulRefs.current.ul2 = el)}
                className={`${
                  visibleStates.ul1
                    ? "animate__animated animate__fadeInUp animate__fast"
                    : ""
                }`}
              >
                Its particularly useful for AI apps that need immediate
                processing
              </li>
              <li
                ref={(el) => (ulRefs.current.ul2 = el)}
                className={`${
                  visibleStates.ul1
                    ? "animate__animated animate__fadeInUp animate__slower"
                    : ""
                }`}
              >
                and minimal delay, like generative AI and real time object{" "}
              </li>
              <li
                ref={(el) => (ulRefs.current.ul2 = el)}
                className={`${
                  visibleStates.ul1
                    ? "animate__animated animate__fadeInUp animate__slow"
                    : ""
                }`}
              >
                detection
              </li>
            </ul>
            <div className="task-product-badges">
              {badgeData.map((row, rowIndex) => (
                <div
                  ref={(el) => (ulRefs.current.ul2 = el)}
                  className={`task-product-badges-row task-product-badges-row2 ${
                    visibleStates.ul1
                      ? "animate__animated animate__fadeInRight animate__slow"
                      : ""
                  }`}
                  key={rowIndex}
                >
                  {row.map((badge, index) => (
                    <BadgeHolder
                      key={index}
                      icon={badge.icon}
                      text={badge.text}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
