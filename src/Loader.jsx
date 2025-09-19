import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import createStripe from "./helper/createStripe";

function Loader({ isLoading, setSceneActive, setIsLoading }) {
  const containerRef = useRef(null);
  const spawnRef = useRef(null);

  //? test
  const [isLoadingCheck, setIsLoadingCheck] = useState(true);

  useEffect(() => {
    //* show & start spawning when loading
    if (isLoadingCheck) {
      //*  slowly add background
      gsap.to(containerRef.current, {
        backgroundColor: "rgb(0,0,255)",
        duration: 4,
        ease: "power2.inOut",
        onComplete: () => {
          setTimeout(() => {
            setSceneActive("secondScene");
            setIsLoadingCheck(false);
          }, 2000);
        },
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
              containerRef.current
                ?.querySelectorAll(".stripe")
                .forEach((s) => s.remove());
            setIsLoading(false);
          },
        });
      }, 500);
    }

    return () => clearInterval(spawnRef.current);
  }, [isLoading, setSceneActive, setIsLoading, isLoadingCheck]);

  return (
    <section id="loader" ref={containerRef}>
      <h1 className="loader-text">Loading…</h1>
    </section>
  );
}

export default Loader;
