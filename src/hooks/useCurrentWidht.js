import React, { useEffect, useState } from "react";

const getWidth = () => window.innerWidth;

const useCurrentWidth = () => {
    const [width, setWidth] = useState(getWidth());

		let timeOutId = null;

    useEffect(() => {
			const resizeListener = () => {
				clearTimeout(timeOutId);

				timeOutId = setTimeout(() => setWidth(getWidth()), 150);
			};

			window.addEventListener('resize', resizeListener);

			return () => window.removeEventListener('resize', resizeListener);
		},[]);

		return width;
}

export { useCurrentWidth };