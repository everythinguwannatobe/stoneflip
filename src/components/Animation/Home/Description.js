import React from "react";
import { motion } from "framer-motion";
import { useCurrentWidth } from "../../../hooks/useCurrentWidht";
import { descriptionDesktopVariants, descriptionLaptopVariants, descriptionMobileVariants } from "../../../utils/home";

const Description = ({ children }) => {
  const width = useCurrentWidth();

	const dynamicDescription = (width > 1300) ?
		<motion.h3 
			variants={descriptionDesktopVariants}
			initial="offscreen"
			whileInView="onscreen"
			className="
				z-10
				my-10
				tablet-laptop-desktop:leading-10 
				mobile:leading-5 
				tablet-laptop-desktop:text-[2vw] 
				mobile:text-[3.5vw]">
			{children}
		</motion.h3> :
		(width > 700 && width < 1300) ?
		<motion.h3 
			variants={descriptionLaptopVariants}
			initial="offscreen"
			whileInView="onscreen"
			className="
				z-10
				my-10
				tablet-laptop-desktop:leading-10 
				mobile:leading-5 
				tablet-laptop-desktop:text-[2vw] 
				mobile:text-[3.5vw]">
			{ children }
		</motion.h3> :
		<motion.h3 
			variants={descriptionMobileVariants}
			initial="offscreen"
			whileInView="onscreen"
			className="
				z-10
				my-10
				tablet-laptop-desktop:leading-10 
				mobile:leading-5 
				tablet-laptop-desktop:text-[2vw] 
				mobile:text-[3.5vw]">
			{children}
		</motion.h3>;

		return dynamicDescription;
};

export default Description;