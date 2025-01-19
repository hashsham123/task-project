import { useEffect, useState, useRef } from "react";

/**
 * A custom hook to track the visibility of an element using Intersection Observer.
 * Allows managing separate visibility states for different components and ensures
 * animations only play once when the element is visible for the first time.
 * 
 * @param {Object} options - Options for the Intersection Observer (e.g., threshold).
 * @param {string} context - Optional context identifier to differentiate state usage.
 * @returns {Object} - An object containing the `ref`, `isVisible`, and `hasBeenVisible`.
 */
const useVisibilityObserver = (options = { threshold: 0.5 }, context = "default") => {
  const [visibilityState, setVisibilityState] = useState<any>(() => ({
    default: { isVisible: false, hasBeenVisible: false },
    landingPage: { isVisible: false, hasBeenVisible: false },
    productInfo: { isVisible: false, hasBeenVisible: false },
  }));

  const elementRef = useRef(null); // Ref for the target element

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisibilityState((prev: any) => {
          const wasVisible = prev[context]?.hasBeenVisible;
          return {
            ...prev,
            [context]: {
              isVisible: entry.isIntersecting,
              hasBeenVisible: wasVisible || entry.isIntersecting, // Retain true once visible
            },
          };
        });
      },
      options
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options, context]);

  return {
    ref: elementRef,
    isVisible: visibilityState[context]?.isVisible || false, // Current visibility
    hasBeenVisible: visibilityState[context]?.hasBeenVisible || false, // If visible once
  };
};

export default useVisibilityObserver;
