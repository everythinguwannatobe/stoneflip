import * as THREE from "three";
import { Mesh } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef, useState } from "react";

const CustomSphere = ({ scale, position }) => {
	const [obj, setObj] = useState();
	const mesh = useRef();

	// const mat = new THREE.MeshStandardMaterial({color: "rgb(251, 206, 56)", metalness: 0, roughness: 0});
	// position={[-77, -220, 23]}

	const mat = new THREE.MeshStandardMaterial({color: "rgb(225, 225, 233)", metalness: 0, roughness: 0.3});
	// const url = "sphere_OBJ.obj";
	const url = "main_sphere.obj";

	useMemo(() => new OBJLoader().load(url, setObj), [url]);
	if (obj) {
		obj.traverse((child) => {
		if (child instanceof Mesh) {
			child.material = mat;
		}
		});
		return <primitive ref={mesh} position={position} object={obj} scale={scale} />;
	}

		return null;

	// useMemo(() => setObj(sphereObj));

	// if(obj) {
	// 	obj.traverse((child) => {
	// 		if (child instanceof Mesh) {
	// 			child.material = mat;
	// 		}
	// 	});
	// }

	// console.log("3D model object",sphereObj);

	// return (
	// 	<primitive position={[0,0,0]} object={obj} scale={2} />
	// );
};

export default CustomSphere;