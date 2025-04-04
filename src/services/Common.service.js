import { useEffect, useRef } from "react";

export const getTemperatureUnit = (unit) => {
  return unit === "metric" ? "C" : "F";
};

export function useDebounce(func, delay = 1000) {
  const timer = useRef();

  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);

  const debouncedFunction = (...args) => {
    const newTimer = setTimeout(() => {
      func(...args);
    }, delay);
    clearTimeout(timer.current);
    timer.current = newTimer;
  };

  return debouncedFunction;
}
