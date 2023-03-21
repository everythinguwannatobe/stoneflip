import React from "react";
import { Canvas } from "@react-three/fiber";
import { Instances, OrbitControls } from "@react-three/drei";
import { data } from "../utils/sub-store";
import LeftInstance from "./LeftCanvas/LeftInstance";

const StoryTorusKnotScene = ({ args, position }) => {
	return (
		<Canvas camera={{fov:55, far: 1000, near: 0.1, position: [10, 10, 10]}} style={{
			backgroundColor: "transparent",
			width: "40vw",
			height: "40vh"
		}}>
			<directionalLight position={[0, 5, 0]}  />
			<directionalLight position={[2, -5, 0]}  />
			<ambientLight color={"white"} intensity={0.6} />
			<Instances range={1}>
				<torusKnotGeometry args={[3, 1, 180, 20]} />
				<meshStandardMaterial wireframe roughness={0} metalness={0.1} color={"rgb(228, 229, 236)"} />
				{data.map((props, i) => (
					<LeftInstance key={i} position={[0,0,0]} {...props} />
				))}
			</Instances>
			<OrbitControls enableZoom={false} />
		</Canvas>
	);
};

export default StoryTorusKnotScene;