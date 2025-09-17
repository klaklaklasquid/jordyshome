import { useGLTF } from "@react-three/drei";

const model = "/models/house11.glb";
useGLTF.preload(model);

function Scene() {
  const { scene } = useGLTF(model);

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
