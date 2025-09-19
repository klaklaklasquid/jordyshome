import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense, useState } from "react";
import Scene from "./Scene";
import CameraSmooth from "./helper/CameraSmooth";

export default function App() {
  const [lookAtMode, setLookAtMode] = useState("interactive");

  return (
    <Canvas
      camera={{
        position: [10, 3.5, 25],
        fov: 30,
      }}>
      <Suspense>
        <Scene setLookAtMode={setLookAtMode} />
        <Environment
          files="/background/background.hdr"
          background
          backgroundIntensity={0.15}
          environmentIntensity={0.7}
          backgroundRotation={[0, Math.PI / 1.4, 0]}
        />
      </Suspense>

      <CameraSmooth enabled={lookAtMode === "interactive"} />
    </Canvas>
  );
}
