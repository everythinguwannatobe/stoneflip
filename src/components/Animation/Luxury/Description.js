import React from "react";
import { motion } from "framer-motion";
import { useCurrentWidth } from "../../../hooks/useCurrentWidht";
import { descriptionDesktopVariants, descriptionLaptopVariants, descriptionMobileVariants } from "../../../utils/luxury";

const Description = ({ children }) => {
  const width = useCurrentWidth();

	const dynamicDescription = (width > 1300) ?
		<motion.div
			variants={descriptionDesktopVariants} 
			initial="offscreen" 
			whileInView="onscreen">
			{children}
		</motion.div> : 
		(width > 700 && width < 1300) ? 
		<motion.div 
			variants={descriptionLaptopVariants} 
			initial="offscreen" 
			whileInView="onscreen" >
			{children}
		</motion.div> : 
		<motion.div 
			variants={descriptionMobileVariants} 
			initial="offscreen" 
			whileInView="onscreen" >
			{children}
		</motion.div>;

		return dynamicDescription;
};

export default Description;