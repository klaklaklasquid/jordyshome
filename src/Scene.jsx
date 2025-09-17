import { useGLTF } from "@react-three/drei";

useGLTF.preload("/models/house8.glb");

function Scene() {
  const { scene } = useGLTF("/models/house8.glb");

  return (
    <primitive
      object={scene}
      position={[0, 0, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={1}
    />
  );
}

export default Scene;
