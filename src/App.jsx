import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Perf } from "r3f-perf";
import Scene from "./Scene";

export default function App() {
  return (
    <Canvas camera={{ position: [10, 3.5, 25], fov: 30 }}>
      <Perf position="bottom-left" />

      <Suspense>
        <Scene />
        <Environment
          files="/background/background.hdr"
          background
          backgroundIntensity={0.15}
          environmentIntensity={0.7}
          backgroundRotation={[0, Math.PI / 1.4, 0]}
        />
      </Suspense>
      <OrbitControls enabled={true} />
    </Canvas>
  );
}
