import { OrbitControls, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

function SecondScene() {
  const { camera } = useThree();
  const { scene } = useGLTF("/models/insideHouse2.glb");

  //* to re-align the camera
  gsap.to(camera.position, {
    x: 0,
    y: 0,
    z: 0,
    duration: 0.5,
    ease: "power3.inOut",
    onUpdate: () => {
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    },
  });

  gsap.to(camera, {
    fov: 60,
    duration: 0.5,
    ease: "power3.inOut",
    onUpdate: () => camera.updateProjectionMatrix(),
  });

  return (
    <>
      <primitive object={scene} position={[0, -1.8, 0]} />;
      <OrbitControls />
    </>
  );
}

useGLTF.preload("/models/insideHouse2.glb");

export default SecondScene;
