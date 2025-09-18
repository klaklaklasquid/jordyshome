import { useFrame, useThree } from "@react-three/fiber";

function CameraUpdater({ cameraAngles }) {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.x += (cameraAngles.x - camera.position.x) * 0.08;
    camera.position.y += (cameraAngles.y - camera.position.y) * 0.08;
    camera.position.z += (cameraAngles.z - camera.position.z) * 0.08;

    camera.updateProjectionMatrix();
  });
  return null;
}

export default CameraUpdater;
