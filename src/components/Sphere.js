import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Sphere = (props) => {
    const mesh = useRef();
	const texture = useTexture("texture2.png");
	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		mesh.current.rotation.set(0, t, 0);
	});

	return (
		<mesh {...props} ref={mesh}>
			<sphereGeometry args={[3, 64, 32]} />
			<meshStandardMaterial map={texture} metalness={0} roughness={0} color={"white"} />
		</mesh>
	);
};

export default Sphere;