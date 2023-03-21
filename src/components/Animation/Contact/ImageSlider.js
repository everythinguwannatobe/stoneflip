import React from "react";
import { motion } from "framer-motion";
import { useCurrentWidth } from "../../../hooks/useCurrentWidht";
import HorizontalScroll from "react-horizontal-scrolling";
import { imageDesktopVariants, imageLaptopVariants, imageMobileVariants } from "../../../utils/contact";

const ImageSlider = ({ children }) => {
	const width = useCurrentWidth();
	const imageList = (width > 1600) ? 
		<motion.div initial={{}} viewport={{once: false, amount: 0.8}}>
			<div className="inline-block tablet-laptop-desktop:mx-[2vw] tablet-laptop-desktop:my-[14vh]">
				<img className="tablet-laptop-desktop:w-[13vw] mobile:w-[50vw]" src="Rectangle 2.png" />
			</div>
			<div className="inline-block tablet-laptop-desktop:mx-[2vw] tablet-laptop-desktop:my-[14vh]">
				<img className="tablet-laptop-desktop:w-[13vw] mobile:w-[50vw]" src="Rectangle 3.png" />
			</div>
			<div className="inline-block tablet-laptop-desktop:mx-[2vw] tablet-laptop-desktop:my-[14vh]">
				<img className="tablet-laptop-desktop:w-[13vw] mobile:w-[50vw]" src="Rectangle 4.png" />
			</div>
			<div className="inline-block tablet-laptop-desktop:mx-[2vw] tablet-laptop-desktop:my-[14vh]">
				<img className="tablet-laptop-desktop:w-[13vw] mobile:w-[50vw]" src="Rectangle 5.png" />
			</div>
			<div className="inline-block tablet-laptop-desktop:mx-[2vw] tablet-laptop-desktop:my-[14vh]">
				<img className="tablet-laptop-desktop:w-[13vw] mobile:w-[50vw]" src="Rectangle 6.png" />
			</div>
			<div className="inline-block tablet-laptop-desktop:mx-[2vw] tablet-laptop-desktop:my-[14vh]">
				<img className="tablet-laptop-desktop:w-[5vw] mobile:w-[20vw]" src="Rectangle 7.png" />
			</div>
		</motion.div> :
		<div className="mx-[5vw] py-[10vh]">
			<HorizontalScroll>
				<div className="mx-[2vw]" key={1}>
					<img src="Rectangle 2.png" />
				</div>
				<div className="mx-[2vw]" key={2}>
					<img src="Rectangle 3.png" />
				</div>
				<div className="mx-[2vw]" key={3}>
					<img src="Rectangle 4.png" />
				</div>
				<div className="mx-[2vw]" key={4}>
					<img src="Rectangle 5.png" />
				</div>
				<div className="mx-[2vw]" key={5}>
					<img src="Rectangle 6.png" />
				</div>
				<div className="mx-[2vw]" key={6}>
					<img src="Rectangle 7.png" />
				</div>
			</HorizontalScroll>
		</div>;

	const imageContainer = (width > 1300) ?
	<motion.Fragment 
		variants={imageDesktopVariants} 
		initial="offscreen" 
		whileInView="onscreen"
		className="flex w-screen justify-evenly"
		>
		{imageList}
	</motion.Fragment> : 
	(width > 700 && width < 1300) ? 
	<motion.Fragment 
		variants={imageLaptopVariants} 
		initial="offscreen" 
		whileInView="onscreen">
		{imageList}
	</motion.Fragment> : 
	<motion.Fragment 
		variants={imageMobileVariants} 
		initial="offscreen" 
		whileInView="onscreen">
		{imageList}
	</motion.Fragment>;

	return imageContainer; 
};

export default ImageSlider;