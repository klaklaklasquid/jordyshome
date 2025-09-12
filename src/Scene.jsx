import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
// import { useThree } from "@react-three/fiber";
// import { useControls } from "leva";

useGLTF.preload("/models/house.glb");
export function Scene() {
  const { scene } = useGLTF("/models/house.glb");
  // const { camera } = useThree();

  // Leva controls for camera position
  // const { camX, camY, camZ } = useControls({
  //   camX: { value: camera.position.x, min: -20, max: 20 },
  //   camY: { value: camera.position.y, min: -20, max: 20 },
  //   camZ: { value: camera.position.z, min: -50, max: 50 },
  // });

  // camera.position.set(camX, camY, camZ);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      <Suspense fallback={null}>
        <primitive object={scene} rotation={[0, -Math.PI / 2, 0]} />
      </Suspense>
    </>
  );
}
