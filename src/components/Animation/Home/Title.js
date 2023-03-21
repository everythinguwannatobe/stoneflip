import React from "react";
import { motion } from "framer-motion";
import { useCurrentWidth } from "../../../hooks/useCurrentWidht";
import { titleDesktopVariants, titleLaptopVariants, titleMobileVariants } from "../../../utils/home";

const Title = ({ children }) => {
  const width = useCurrentWidth();

	const dynamicTitle = (width > 1300) ?
		<motion.h1 
			variants={titleDesktopVariants} 
			initial="offscreen" 
			whileInView="onscreen" 
			className="
				z-10 
				font-libre-franklin 
				mobile:leading-[6vh] 
				tablet-laptop-desktop:leading-[15vh]">
			{children}
		</motion.h1> : 
		(width > 700 && width < 1300) ? 
		<motion.h1 
			variants={titleLaptopVariants} 
			initial="offscreen" 
			whileInView="onscreen" 
			className="
				z-10 
				font-libre-franklin 
				mobile:leading-[6vh] 
				tablet-laptop-desktop:leading-[15vh]">
			{children}
		</motion.h1> : 
		<motion.h1 
			variants={titleMobileVariants} 
			initial="offscreen" 
			whileInView="onscreen" 
			className="
				z-10 
				font-libre-franklin 
				mobile:leading-[6vh] 
				tablet-laptop-desktop:leading-[15vh]">
			{children}
		</motion.h1>;

	return dynamicTitle;
};

export default Title;