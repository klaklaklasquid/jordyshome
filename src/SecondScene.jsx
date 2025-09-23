import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import * as THREE from "three";

function SecondScene() {
  const { camera } = useThree();
  const { nodes, scene } = useGLTF("/models/insideHouse10.glb");

  //* to re-align the camera
  //! this is also the reason orbitcontrol is not working
  // gsap.to(camera.position, {
  //   x: 0,
  //   y: 0,
  //   z: 0,
  //   duration: 0.5,
  //   ease: "power3.inOut",
  //   onUpdate: () => {
  //     camera.lookAt(0, 0, 0);
  //     camera.updateProjectionMatrix();
  //   },
  // });

  gsap.to(camera, {
    fov: 45,
    duration: 0.5,
    ease: "power3.inOut",
    onUpdate: () => camera.updateProjectionMatrix(),
  });

  const PATH = "/images/textures/";

  // Load all maps at once
  const textures = useTexture({
    map: PATH + "granite_tile_diff_1k.jpg", // diffuse / color
    normalMap: PATH + "granite_tile_nor_dx_1k.jpg", // normal
    roughnessMap: PATH + "granite_tile_rough_1k.jpg", // roughness
    aoMap: PATH + "granite_tile_ao_1k.jpg", // ambient occlusion
    displacementMap: PATH + "granite_tile_disp_1k.jpg", // displacement
  });

  // Ensure repeating if floor is large
  Object.values(textures).forEach((tex) => {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 4);
  });

  if (nodes.floor) {
    nodes.floor.material = new THREE.MeshStandardMaterial({
      ...textures,
      displacementScale: 0.01,
    });
  }

  return (
    <>
      <primitive object={scene} position={[0, -1.8, 0]} />;
      <OrbitControls />
    </>
  );
}

useGLTF.preload("/models/insideHouse10.glb");

export default SecondScene;
