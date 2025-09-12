import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";

export default function App() {
  return (
    <Canvas camera={{ position: [7, 6, 15], fov: 50 }}>
      <color attach="background" args={["#000"]} />
      <Scene />
      <OrbitControls enabled={false} />
    </Canvas>
  );
}
