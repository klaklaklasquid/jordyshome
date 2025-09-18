import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
// import { Perf } from "r3f-perf";
import Scene from "./Scene";
import CameraUpdater from "./helper/CameraUpdater";

export default function App() {
  const [cameraAngles, setCameraAngles] = useState({
    x: 10,
    y: 3.5,
    z: 25,
  });

  console.log(cameraAngles);

  return (
    <Canvas
      camera={{
        position: [cameraAngles.x, cameraAngles.y, cameraAngles.z],
        fov: 30,
      }}>
      {/* <Perf position="bottom-left" /> */}

      <Suspense>
        <Scene setCameraAngles={setCameraAngles} />
        <Environment
          files="/background/background.hdr"
          background
          backgroundIntensity={0.15}
          environmentIntensity={0.7}
          backgroundRotation={[0, Math.PI / 1.4, 0]}
        />
      </Suspense>
      <CameraUpdater cameraAngles={cameraAngles} />
      <OrbitControls enabled={false} />
    </Canvas>
  );
}
