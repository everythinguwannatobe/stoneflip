import { useSphere } from "@react-three/cannon"
import { useFrame, useThree } from "@react-three/fiber";
import React from "react";

const Pointer = () => {
	const viewport = useThree((state) => state.viewport)
	const [, api] = useSphere(() => ( {type: "Kinematic", args: [3], position: [0, 0, 0]}))

	return (
		useFrame((state) => api.position.set((state.mouse.x * viewport.width) / 3, (state.mouse.y * viewport.height) / 3, 0))
	);
};

export default Pointer;