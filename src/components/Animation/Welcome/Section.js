import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { useParallax } from "../../../hooks/useParallax";

const Section = ({ children }) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({target: ref});
	const y = useParallax(scrollYProgress, 100);

	return (
		<section>
			<div ref={ref}>
				{children}
			</div>
		</section>
	);
};

export default Section;