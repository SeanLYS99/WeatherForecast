import { useEffect, useState } from "react";

export const useSyncHeight = (sourceId, targetVar) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const syncHeight = () => {
      const sourceElement = document.getElementById(sourceId);
      if (sourceElement) {
        document.documentElement.style.setProperty(
          `--${targetVar}`,
          `${sourceElement.offsetHeight}px`
        );
      }
    };

    // Initial sync
    syncHeight();

    // Create ResizeObserver for continuous sync
    const observer = new ResizeObserver(syncHeight);
    if (document.getElementById(sourceId)) {
      observer.observe(document.getElementById(sourceId));
    }

    // Fallback for resize events
    window.addEventListener("resize", syncHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncHeight);
    };
  }, [sourceId, targetVar, isMounted]);

  return isMounted;
};
