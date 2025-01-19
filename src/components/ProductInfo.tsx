import React from "react";
import "../styles/product-info.scss";
import BadgeHolder from "./BadgeHolder";
import { badgeData } from "../staticData/batchData";
import "animate.css";
import useVisibilityObserver from "./utils/useVisibilityObserver";

function ProductInfo() {
  const headingObserver1 = useVisibilityObserver({ threshold: 0.5 });
  const headingObserver2 = useVisibilityObserver({ threshold: 0.5 });
  const headingObserver3 = useVisibilityObserver({ threshold: 0.5 });
  const headingObserver4 = useVisibilityObserver({ threshold: 0.5 });
  const headingObserver5 = useVisibilityObserver({ threshold: 0.5 });

  const descriptionObserver1 = useVisibilityObserver({ threshold: 0.5 });
  const descriptionObserver2 = useVisibilityObserver({ threshold: 0.5 });
  const descriptionObserver3 = useVisibilityObserver({ threshold: 0.5 });

  const imageObserver = useVisibilityObserver({ threshold: 0.5 });
  const textGroup1Observer = useVisibilityObserver({ threshold: 0.5 });
  const textGroup2Observer = useVisibilityObserver({ threshold: 0.5 });

  const badgeObserver = useVisibilityObserver({ threshold: 0.5 });

  return (
    <div className="task-product-info">
      <div className="task-content-holder">
        <div className="task-product-buttons">
          <button className="bg-color">What is?</button>
          <button>How it works?</button>
        </div>
        <ul className="taks-product-heading">
          <li style={{ display: "flex", gap: "0.5rem" }}>
            <span
              ref={headingObserver1.ref}
              className={`${
                headingObserver1.hasBeenVisible
                  ? "animate__animated animate__fadeInUp animate__faster"
                  : ""
              }`}
            >
              Use
            </span>
            <span
              ref={headingObserver2.ref}
              className={`${
                headingObserver2.hasBeenVisible
                  ? "animate__animated animate__fadeInUp animate__faster"
                  : ""
              }`}
            >
              AI
            </span>
            <span
              ref={headingObserver3.ref}
              className={`${
                headingObserver3.hasBeenVisible
                  ? "animate__animated animate__fadeInUp animate__fast"
                  : ""
              }`}
            >
              faster
            </span>
            <span
              ref={headingObserver4.ref}
              className={`${
                headingObserver4.hasBeenVisible
                  ? "animate__animated animate__fadeInUp animate__slow"
                  : ""
              }`}
            >
              and
            </span>
            <span
              ref={headingObserver5.ref}
              className={`${
                headingObserver5.hasBeenVisible
                  ? "animate__animated animate__fadeInUp animate__slower"
                  : ""
              }`}
            >
              more
            </span>
          </li>
        </ul>
        <div className="task-product-content">
          <div className="task-product-image">
            <img
              src="assets/images/stars.jpg"
              alt="star-image"
              ref={imageObserver.ref}
              className={`${
                imageObserver.hasBeenVisible
                  ? "animate__animated animate__fadeIn animate__faster"
                  : ""
              }`}
            />
            <p
              style={{ display: "flex", gap: "0.5rem" }}
              ref={textGroup1Observer.ref}
            >
              <span
                className={`${
                  textGroup1Observer.hasBeenVisible
                    ? "animate__animated animate__fadeInUp animate__faster"
                    : ""
                }`}
              >
                Try
              </span>
              <span
                className={`${
                  textGroup1Observer.hasBeenVisible
                    ? "animate__animated animate__fadeInUp animate__faster"
                    : ""
                }`}
              >
                Gcore
              </span>
              <span
                className={`${
                  textGroup1Observer.hasBeenVisible
                    ? "animate__animated animate__fadeInUp animate__fast"
                    : ""
                }`}
              >
                Interference
              </span>
              <span
                className={`${
                  textGroup1Observer.hasBeenVisible
                    ? "animate__animated animate__fadeInUp animate__slow"
                    : ""
                }`}
              >
                At
              </span>
              <span
                className={`${
                  textGroup1Observer.hasBeenVisible
                    ? "animate__animated animate__fadeInUp animate__slower"
                    : ""
                }`}
              >
                Edge
              </span>
            </p>

            <p
              style={{ display: "flex", gap: "0.5rem" }}
              ref={textGroup2Observer.ref}
            >
              <span
                className={`${
                  textGroup2Observer.hasBeenVisible
                    ? "animate__animated animate__fadeInUp animate__faster"
                    : ""
                }`}
              >
                Speed
              </span>
              <span
                className={`${
                  textGroup2Observer.hasBeenVisible
                    ? "animate__animated animate__fadeInUp animate__faster"
                    : ""
                }`}
              >
                Up
              </span>
              <span
                className={`${
                  textGroup2Observer.hasBeenVisible
                    ? "animate__animated animate__fadeInUp animate__fast"
                    : ""
                }`}
              >
                Ai,
              </span>
              <span
                className={`${
                  textGroup2Observer.hasBeenVisible
                    ? "animate__animated animate__fadeInUp animate__slow"
                    : ""
                }`}
              >
                Reduce
              </span>
              <span
                className={`${
                  textGroup2Observer.hasBeenVisible
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
                ref={descriptionObserver1.ref}
                className={`${
                  descriptionObserver1.hasBeenVisible
                    ? "animate__animated animate__fadeInUp animate__fast"
                    : ""
                }`}
              >
                Gcore inference at the Edge reduces the
              </li>
              <li
                ref={descriptionObserver2.ref}
                className={`${
                  descriptionObserver2.hasBeenVisible
                    ? "animate__animated animate__fadeInUp animate__slow"
                    : ""
                }`}
              >
                latency of your ML model output and improves
              </li>
              <li
                ref={descriptionObserver3.ref}
                className={`${
                  descriptionObserver3.hasBeenVisible
                    ? "animate__animated animate__fadeInUp animate__slower"
                    : ""
                }`}
              >
                the performance of AI-enabled applications.{" "}
              </li>
            </ul>
            <div className="task-product-badges">
              {badgeData.map((row, rowIndex) => (
                <div
                  ref={badgeObserver.ref}
                  className={`task-product-badges-row task-product-badges-row2 ${
                    badgeObserver.hasBeenVisible
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
