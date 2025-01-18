import { useEffect, useState, useRef } from "react";

/**
 * A custom hook to track the visibility of an element using Intersection Observer.
 * Allows managing separate visibility states for different components.
 * 
 * @param {Object} options - Options for the Intersection Observer (e.g., threshold).
 * @param {string} context - Optional context identifier to differentiate state usage.
 * @returns {Object} - An object containing the `ref`, `isVisible`, and `setIsVisible`.
 */
const useVisibilityObserver = (options = { threshold: 0.5 }, context = "default") => {
  const [visibilityState, setVisibilityState] = useState<any>(() => ({
    default: false,
    landingPage: false, // Separate state for LandingPage
  }));

  const elementRef = useRef(null); // Ref for the target element

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisibilityState((prev: any) => ({
          ...prev,
          [context]: entry.isIntersecting,
        }));
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
    isVisible: visibilityState[context], // Visibility for the current context
    setIsVisible: (value: any) =>
      setVisibilityState((prev: any) => ({
        ...prev,
        [context]: value,
      })),
  };
};

export default useVisibilityObserver;
