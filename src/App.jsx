import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
useGLTF.preload("/models/house.glb");

function App() {
  const { scene } = useGLTF("/models/house.glb");

  return (
    <Canvas camera={{ position: [7, 8, 15], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      <Suspense>
        <primitive
          position={[0, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          object={scene}
        />
      </Suspense>
    </Canvas>
  );
}

export default App;
