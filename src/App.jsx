import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Scene from "./Scene";

export default function App() {
  return (
    <Canvas camera={{ position: [7, 6, 15], fov: 60 }}>
      <Suspense>
        <Scene />
        <Environment
          files="/background/background.hdr"
          background
          backgroundIntensity={0.15}
          backgroundRotation={[0, Math.PI / 1.4, 0]}
        />
      </Suspense>
      <OrbitControls enabled={true} />
    </Canvas>
  );
}
