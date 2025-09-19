import { useEffect, useRef } from "react";
import gsap from "gsap";

import createStripe from "./helper/createStripe";

function Loader({ isLoading }) {
  const containerRef = useRef(null);
  const spawnRef = useRef(null);

  useEffect(() => {
    //* show & start spawning when loading
    if (isLoading) {
      //*  slowly add background
      gsap.to(containerRef.current, {
        backgroundColor: "rgb(0,0,255)",
        duration: 4,
        ease: "power2.inOut",
      });

      //* spawn frequency
      spawnRef.current = setInterval(
        () => createStripe(containerRef.current),
        5
      );
    } else {
      //* stop spawning, then fade out the whole loader after a short time
      clearInterval(spawnRef.current);
      setTimeout(() => {
        if (!containerRef.current) return;
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 2,
          ease: "power2.out",
          onComplete: () => {
            if (containerRef.current)
              containerRef.current.style.display = "none";
            containerRef.current
              ?.querySelectorAll(".stripe")
              .forEach((s) => s.remove());
          },
        });
      }, 500);
    }

    return () => clearInterval(spawnRef.current);
  }, [isLoading]);

  return (
    <section id="loader" ref={containerRef}>
      <h1 className="loader-text">Loading…</h1>
    </section>
  );
}

export default Loader;
