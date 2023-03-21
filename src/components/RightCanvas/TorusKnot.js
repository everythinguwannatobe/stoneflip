import { Instances, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { data } from "../../utils/sub-store";
import RightInstance from "./RightInstance";

const TorusKnot = ({ args }) => {
	return (
		<Canvas style={{
			backgroundColor: "transparent",
			width: "30vw",
			height: "40vh"
		}}>
			<directionalLight position={[0, 5, 0]}  />
			<directionalLight position={[2, -5, 0]}  />
			<ambientLight color={"white"} intensity={0.6} />
			<Instances range={1}>
				<torusKnotGeometry args={args} />
				<meshStandardMaterial wireframe roughness={0.1} metalness={0} color={"rgb(228, 229, 236)"} />
				{data.map((props, i) => (
					<RightInstance key={i} position={[0,0,0]} {...props} />
				))}
			</Instances>
			<OrbitControls enableZoom={false} />
		</Canvas>
	);
};

export default TorusKnot;