import { Html } from "@react-three/drei";
import HouseOutside from "./HouseOutside";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Scene({ setLookAtMode }) {
  const [showButton, setShowButton] = useState(true);
  const { camera } = useThree();
  const lookAtTarget = useRef(new THREE.Vector3(0, 2, 0));
  const animating = useRef(false);

  useFrame(() => {
    if (animating.current) {
      camera.lookAt(lookAtTarget.current);
    }
  });

  const handleEnterHouseClick = () => {
    setShowButton(false);
    setLookAtMode("animated");
    animating.current = true;

    gsap.to(camera.position, {
      x: -1,
      y: 1.5,
      z: 25,
      duration: 0.7,
      ease: "power2.inOut",
      onUpdate: () => camera.updateProjectionMatrix(),
      onComplete: () => {
        gsap.to(camera.position, {
          z: 7,
          duration: 0.7,
          ease: "power2.inOut",
          onUpdate: () => camera.updateProjectionMatrix(),
        });
        gsap.to(lookAtTarget.current, {
          x: -1,
          y: 1,
          duration: 0.7,
          ease: "power2.inOut",
        });
      },
    });
  };

  return (
    <>
      {showButton && (
        <Html position={[-9, 5, 5]}>
          <div className="question__box">
            <p>
              Hello! Let’s dive into my world, meet <span>Jordy</span>!
            </p>
            <button onClick={handleEnterHouseClick}>Enter</button>
          </div>
        </Html>
      )}
      <HouseOutside rotation={[0, -Math.PI / 2, 0]} />
    </>
  );
}

export default Scene;
