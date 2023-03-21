import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Instance } from "@react-three/drei";

const Torus = ({ random, color = new THREE.Color(), ...props }) => {
	const ref = useRef();
	const [hovered, setHover] = useState(false);
	useFrame((state) => {
		const t = state.clock.getElapsedTime() + random * 10000;
		ref.current.rotation.set(Math.cos(t / 4) / 2, Math.sin(t / 4) / 2, Math.cos(t / 1.5) / 2)
		ref.current.position.y = Math.sin(t / 1.5) / 2;
		ref.current.scale.x = ref.current.scale.y = ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z, hovered ? 1.4 : 1, 0.1);
		// ref.current.color.lerp(color.set(hovered ? 'green' : 'grey'), hovered ? 1 : 0.1);
	})


	return (
		<group {...props} ref={ref}>
			<Instance ref={ref} onPointerOver={(e) => (e.stopPropagation(), setHover(true))} onPointerOut={(e) => setHover(false)} />
		</group>
	);
};

export default Torus;