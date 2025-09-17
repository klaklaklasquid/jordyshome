import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Scene from "./Scene";
import { ACESFilmicToneMapping } from "three";
import * as THREE from "three";

export default function App() {
  return (
    <Canvas camera={{ position: [12, 6, 28], fov: 30 }}>
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
