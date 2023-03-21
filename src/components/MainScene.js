import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Sphere from "./Sphere";
import Toruses from "./Toruses";
import { data } from "../utils/store";
import CustomSphere from "./CustomSphere";


const MainScene = ({ scale, position }) => {
	return (
		// current point [-30, -50, 10]
		//position={[0, 100, 150]}

		<Canvas shadows camera={{ fov: 55, near: 0.1, far: 1000, position: [300, 130, 0] }}
			style={{
				backgroundColor: 'transparent',
				width: '100vw',
				height: '90vh',
		}}
		>
			<axesHelper />
			<ambientLight color={"white"} intensity={0.5} />
			<directionalLight position={[0, 3, 10]} />
			<directionalLight position={[0, 3, -10]} />
			{/* <Sphere position={[0, 2, 0]} /> */}
			<Suspense fallback={null}>
				<CustomSphere position={position} scale={scale} />
			</Suspense>
			<OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
			{/* <Toruses data={data} range={3} /> */}
			{/* <Torus position={[10, 2, 0]} /> */}
		</Canvas>
	);
};

export default MainScene;