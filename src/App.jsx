import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";
import { Suspense } from "react";

export default function App() {
  return (
    <Canvas camera={{ position: [7, 6, 15], fov: 50 }}>
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
