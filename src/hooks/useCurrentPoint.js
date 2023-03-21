import React, { useEffect, useState } from "react";

const useCurrentPoint = (ref) => {
  const [point, setPoint] = useState({x: 0, y: 0});

	useEffect(() => {
		const handleMouseMove = ({ clientX, clientY }) => {
		const element = ref.current;
			
		const x = clientX - element.offsetLeft - element.offsetWidth / 2;
    	const y = clientY - element.offsetTop - element.offsetHeight / 2;
    	setPoint({ x, y });
		};

		window.addEventListener('pointermove', handleMouseMove);

		return () => window.removeEventListener('pointermove', handleMouseMove);
	}, []);

	return point;
};

export { useCurrentPoint };