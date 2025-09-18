import { Html } from "@react-three/drei";
import HouseOutside from "./HouseOutside";

function Scene() {
  return (
    <>
      <Html position={[-9, 5, 5]}>
        <div className="question__box">
          <p>
            Hello! Let’s dive into my world, meet <span>Jordy</span>!
          </p>
          <button>Enter</button>
        </div>
      </Html>
      <HouseOutside rotation={[0, -Math.PI / 2, 0]} />
    </>
  );
}

export default Scene;
