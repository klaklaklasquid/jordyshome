import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      <Sphere args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial color="hotpink" distort={0.3} speed={2} />
      </Sphere>

      <OrbitControls />
    </Canvas>
  );
}

export default App;
