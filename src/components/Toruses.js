import { Instance, Instances } from "@react-three/drei";
import React from "react";
import Torus from "./Torus";

const Toruses = ({ data, range }) => {
	console.log(data, range);
	const prop = data.map((props, i) => {
		console.log(props)
	})

	return (
		<group>
			<Instances range={range}>
				<torusGeometry args={[1, 0.3, 9, 21]} />
				<meshStandardMaterial wireframe transparent />
				<group>
					{data.map((props, i) => (
						<Torus key={i} {...props} />
					))}
				</group>
			</Instances>
		</group>
	);
};

export default Toruses;