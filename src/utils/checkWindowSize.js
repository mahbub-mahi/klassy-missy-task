import { useState, useEffect } from "react";

export default function checkWindowSize() {
  const hasWindow = typeof window !== "undefined";

  function getWindowWidth() {
    const width = hasWindow ? window.innerWidth : null;

    return width;
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowWidth());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowWidth());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions <= 1200;
}
