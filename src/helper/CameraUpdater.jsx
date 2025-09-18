import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

function CameraUpdater({ cameraAngles }) {
  const { camera } = useThree();
  const lookAtTarget = useRef({ x: -1, y: 2, z: 0 });

  useFrame(() => {
    camera.position.x += (cameraAngles.x - camera.position.x) * 0.08;
    camera.position.y += (cameraAngles.y - camera.position.y) * 0.08;
    camera.position.z += (cameraAngles.z - camera.position.z) * 0.08;

    camera.lookAt(
      lookAtTarget.current.x,
      lookAtTarget.current.y,
      lookAtTarget.current.z
    );

    camera.updateProjectionMatrix();
  });
  return null;
}

export default CameraUpdater;
