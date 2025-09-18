import { Html } from "@react-three/drei";
import HouseOutside from "./HouseOutside";

function Scene({ setCameraAngles }) {
  const handleEnterHouseClick = () => {
    setCameraAngles({
      x: -1,
      y: 1.5,
      z: 25,
    });
  };

  return (
    <>
      <Html position={[-9, 5, 5]}>
        <div className="question__box">
          <p>
            Hello! Let’s dive into my world, meet <span>Jordy</span>!
          </p>
          <button onClick={() => handleEnterHouseClick()}>Enter</button>
        </div>
      </Html>
      <HouseOutside rotation={[0, -Math.PI / 2, 0]} />
    </>
  );
}

export default Scene;
