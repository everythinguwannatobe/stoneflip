import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { useCurrentWidth } from "../../../hooks/useCurrentWidht";

import { lowerDesktopVariants, lowerLaptopVariants, lowerMobileVariants } from "../../../utils/logos";

const LogoLower = ({children}) => {
	const width = useCurrentWidth();

	const rawContent = <Fragment>{children}</Fragment>

	const lowerLogos = (width > 1300) ?
		<motion.Fragment 
			variants={lowerDesktopVariants} 
			initial="offscreen" 
			whileInView="onscreen"
			className="flex justify-evenly w-screen"
			>
			{children}
		</motion.Fragment> : 
		(width > 700 && width < 1300) ? 
		<motion.Fragment 
			variants={lowerLaptopVariants} 
			initial="offscreen" 
			whileInView="onscreen">
			{children}
		</motion.Fragment> : 
		<motion.Fragment 
			variants={lowerMobileVariants} 
			initial="offscreen" 
			whileInView="onscreen">
			{children}
		</motion.Fragment>;


	return lowerLogos;
};

export default LogoLower;