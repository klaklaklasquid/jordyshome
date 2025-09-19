import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

import windowVertexShader from "./shaders/windowShader/vertex.glsl";
import windowFragmentShader from "./shaders/windowShader/fragment.glsl";

import doorVertexShader from "./shaders/doorShader/vertex.glsl";
import doorFragmentShader from "./shaders/doorShader/fragment.glsl";

export default function HouseOutside(props) {
  const { nodes, scene } = useGLTF("/models/house14.glb");

  const windowMaterial = new THREE.ShaderMaterial({
    vertexShader: windowVertexShader,
    fragmentShader: windowFragmentShader,
    uniforms: {
      uColor: { value: new THREE.Color("#8dcae9") },
    },
    transparent: true,
  });

  const doorMaterial = new THREE.ShaderMaterial({
    vertexShader: doorVertexShader,
    fragmentShader: doorFragmentShader,
    uniforms: {
      uColor: { value: new THREE.Color("#181818") },
    },
    transparent: true,
  });

  if (nodes.windows) {
    nodes.windows.material = windowMaterial;
  } else {
    console.warn("⚠️ No mesh called 'windows' found in model");
  }

  if (nodes.entranceDoorShader) {
    nodes.entranceDoorShader.material = doorMaterial;
  } else {
    console.warn("⚠️ No mesh called 'entranceDoor' found in model");
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

useGLTF.preload("/models/house14.glb");
