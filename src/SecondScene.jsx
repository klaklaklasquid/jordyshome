import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useRef } from "react";

function SecondScene() {
  const { camera } = useThree();
  const cubeRef = useRef();

  //* to re-align the camera
  gsap.to(camera.position, {
    x: 0,
    y: 0,
    z: 5,
    duration: 0.5,
    onUpdate: () => camera.lookAt(0, 0, 0),
  });

  useFrame((_, delta) => {
    cubeRef.current.rotation.y += delta;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
}

export default SecondScene;
