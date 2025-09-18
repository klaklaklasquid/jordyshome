import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

function CameraSmooth() {
  const { camera, pointer } = useThree();
  const target = useRef(new Vector3(0, 0, 0));

  useFrame(() => {
    const x = pointer.x * 0.5;
    const y = pointer.y * 0.5;

    target.current.lerp(new Vector3(x, y + 2, 0), 0.05);

    camera.lookAt(target.current);
  });

  return null;
}

export default CameraSmooth;
