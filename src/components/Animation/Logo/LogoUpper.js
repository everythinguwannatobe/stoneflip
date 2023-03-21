import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { useCurrentWidth } from "../../../hooks/useCurrentWidht";

import { upperDesktopVariants, upperLaptopVariants, upperMobileVariants } from "../../../utils/logos";

const LogoUpper = ({children}) => {
	const width = useCurrentWidth();

	const rawContent = <Fragment>{children}</Fragment>

	const upperLogos = (width > 1300) ?
		<motion.Fragment 
			variants={upperDesktopVariants} 
			initial="offscreen" 
			whileInView="onscreen"
			className="flex justify-evenly w-screen"
			>
			{children}
		</motion.Fragment> : 
		(width > 700 && width < 1300) ? 
		<motion.Fragment 
			variants={upperLaptopVariants} 
			initial="offscreen" 
			whileInView="onscreen">
			{children}
		</motion.Fragment> : 
		<motion.Fragment 
			variants={upperMobileVariants} 
			initial="offscreen" 
			whileInView="onscreen">
			{children}
		</motion.Fragment>;


	return upperLogos;
};

export default LogoUpper;