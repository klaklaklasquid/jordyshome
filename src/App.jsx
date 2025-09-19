import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense, useState } from "react";
import Scene from "./Scene";
import CameraSmooth from "./helper/CameraSmooth";
import Loader from "./Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [lookAtMode, setLookAtMode] = useState("interactive");

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <Canvas
        camera={{
          position: [10, 3.5, 25],
          fov: 30,
        }}>
        <Suspense>
          <Scene setLookAtMode={setLookAtMode} setIsLoading={setIsLoading} />
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
    </>
  );
}
