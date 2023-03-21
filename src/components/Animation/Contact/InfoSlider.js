import React from "react";
import { motion } from "framer-motion";
import { useCurrentWidth } from "../../../hooks/useCurrentWidht";
import { infoDesktopVariants, infoLaptopVariants, infoMobileVariants } from "../../../utils/contact";

const InfoSlider = ({ children }) => {
  const width = useCurrentWidth();

	const dynamicInfo = (width > 1300) ?
		<motion.div
			variants={infoDesktopVariants} 
			initial="offscreen" 
			whileInView="onscreen">
			{children}
		</motion.div> : 
		(width > 700 && width < 1300) ? 
		<motion.div 
			variants={infoLaptopVariants} 
			initial="offscreen" 
			whileInView="onscreen" >
			{children}
		</motion.div> : 
		<motion.div 
			variants={infoMobileVariants} 
			initial="offscreen" 
			whileInView="onscreen" >
			{children}
		</motion.div>;

		return dynamicInfo;
};

export default InfoSlider;