import { Instances, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { data } from "../../utils/sub-store";
import LeftInstance from "./LeftInstance";

const Icosahedrone = ({ args }) => {
	return (
		<Canvas style={{
			backgroundColor: "transparent",
			width: "23vw",
			height: "30vh"
		}}>
			<directionalLight position={[0, 5, 0]}  />
			<directionalLight position={[2, -5, 0]}  />
			<ambientLight color={"white"} intensity={0.2} />
			<Instances range={1}>
				<octahedronGeometry args={args} />
				<meshStandardMaterial wireframe roughness={0} metalness={0.1} color={"rgb(228, 229, 236)"} />
				{data.map((props, i) => (
					<LeftInstance key={i} position={[0,0,0]} {...props} />
				))}
			</Instances>
			<OrbitControls enableZoom={false} />
		</Canvas>
	);
};

export default Icosahedrone;