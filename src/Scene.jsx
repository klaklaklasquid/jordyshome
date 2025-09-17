import { useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import * as THREE from "three";

useGLTF.preload("/models/house4.glb");

function Scene() {
  const { scene } = useGLTF("/models/house7.glb");

  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        if (obj.material?.map) {
          obj.material.map.encoding = THREE.sRGBEncoding;
          obj.material.map.needsUpdate = true;
        }
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      position={[0, 0, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={1}
    />
  );
}

export default Scene;
