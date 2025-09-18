import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

import vertexShader from "./shaders/windowShader/vertex.glsl";
import fragmentShader from "./shaders/windowShader/fragment.glsl";

export default function HouseOutside(props) {
  const { nodes, scene } = useGLTF("/models/house11.glb");

  const windowMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uColor: { value: new THREE.Color("#8dcae9") },
    },
    transparent: true,
  });

  if (nodes.windows) {
    nodes.windows.material = windowMaterial;
  } else {
    console.warn("⚠️ No mesh called 'windows' found in model");
  }

  return (
    <primitive
      object={scene}
      {...props}
      position={[0, 0, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={1}
    />
  );
}

useGLTF.preload("/models/house11.glb");
