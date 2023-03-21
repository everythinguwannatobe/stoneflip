import React from "react";
import { motion } from "framer-motion";
import { Bounce } from "react-reveal";
import { useCurrentWidth } from "../hooks/useCurrentWidht";
import { upperDesktopVariants, upperLaptopVariants, upperMobileVariants, lowerDesktopVariants, lowerLaptopVariants, lowerMobileVariants } from "../utils/logos";

import LogoUpper from "../components/Animation/Logo/LogoUpper";
import LogoLower from "../components/Animation/Logo/LogoLower";

const LogosPage = () => {
	const width = useCurrentWidth();

	const dynamicUpperLogos = (width > 1300) ?
		<motion.div 
			variants={upperDesktopVariants} 
			initial="offscreen" 
			whileInView="onscreen">
			<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
				<img className="tablet-laptop-desktop:w-[15vw] mobile:w-[25vw]" src="BAZAAR.png" />
			</div>
			<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
				<img className="tablet-laptop-desktop:w-[15vw] mobile:w-[30vw]" src="bonappet.png" />
			</div>
			<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
				<img className="tablet-laptop-desktop:w-[7vw] mobile:w-[20vw]" src="NIKE.png" />
			</div>
		</motion.div> : 
		(width > 700 && width < 1300) ? 
		<motion.h1 
			variants={upperLaptopVariants} 
			initial="offscreen" 
			whileInView="onscreen">
			<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
				<img className="tablet-laptop-desktop:w-[15vw] mobile:w-[25vw]" src="BAZAAR.png" />
			</div>
			<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
				<img className="tablet-laptop-desktop:w-[15vw] mobile:w-[30vw]" src="bonappet.png" />
			</div>
			<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
				<img className="tablet-laptop-desktop:w-[7vw] mobile:w-[20vw]" src="NIKE.png" />
			</div>
		</motion.h1> : 
		<motion.h1 
			variants={upperMobileVariants} 
			initial="offscreen" 
			whileInView="onscreen">
			<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
				<img className="tablet-laptop-desktop:w-[15vw] mobile:w-[25vw]" src="BAZAAR.png" />
			</div>
			<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
				<img className="tablet-laptop-desktop:w-[15vw] mobile:w-[30vw]" src="bonappet.png" />
			</div>
			<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
				<img className="tablet-laptop-desktop:w-[7vw] mobile:w-[20vw]" src="NIKE.png" />
			</div>
		</motion.h1>;

	const dynamicLowerLogos = (width > 1300) ?
		<motion.h3 
			variants={lowerDesktopVariants}
			initial="offscreen"
			whileInView="onscreen">
			<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
				<img className="tablet-laptop-desktop:w-[17vw] mobile:w-[25vw]" src="oculus.png" />
			</div>
			<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
				<img className="tablet-laptop-desktop:w-[20vw] mobile:w-[25vw]" src="domino.png" />
			</div>
			<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
				<img className="tablet-laptop-desktop:w-[6vw] mobile:w-[15vw]" src="amc.png" />
			</div>
		</motion.h3> :
		(width > 700 && width < 1300) ?
		<motion.h3 
			variants={lowerLaptopVariants}
			initial="offscreen"
			whileInView="onscreen">
			<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
				<img className="tablet-laptop-desktop:w-[17vw] mobile:w-[25vw]" src="oculus.png" />
			</div>
			<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
				<img className="tablet-laptop-desktop:w-[20vw] mobile:w-[25vw]" src="domino.png" />
			</div>
			<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
				<img className="tablet-laptop-desktop:w-[6vw] mobile:w-[15vw]" src="amc.png" />
			</div>
		</motion.h3> :
		<motion.h3 
			variants={lowerMobileVariants}
			initial="offscreen"
			whileInView="onscreen">
			<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
				<img className="tablet-laptop-desktop:w-[17vw] mobile:w-[25vw]" src="oculus.png" />
			</div>
			<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
				<img className="tablet-laptop-desktop:w-[20vw] mobile:w-[25vw]" src="domino.png" />
			</div>
			<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
				<img className="tablet-laptop-desktop:w-[6vw] mobile:w-[15vw]" src="amc.png" />
			</div>
		</motion.h3>;

	return (
		//<div className="w-screen tablet-laptop-tablet-laptop-desktop:h-[50vh] mobile:h-screen">
		<div className="bg-white tablet-laptop-desktop:flex tablet-laptop-desktop:flex-row tablet-laptop-desktop:flex-wrap tablet-laptop-desktop:w-screen tablet-laptop-desktop:my-[15%] mobile:flex mobile:flex-col mobile:justify-around mobile:items-center mobile:h-screen">
			<LogoUpper>
				<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
					<img className="tablet-laptop-desktop:w-[15vw] mobile:w-[25vw]" src="BAZAAR.png" />
				</div>
				<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
					<img className="tablet-laptop-desktop:w-[15vw] mobile:w-[30vw]" src="bonappet.png" />
				</div>
				<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
					<img className="tablet-laptop-desktop:w-[7vw] mobile:w-[20vw]" src="NIKE.png" />
				</div>
			</LogoUpper>
			<LogoLower>
				<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
					<img className="tablet-laptop-desktop:w-[17vw] mobile:w-[25vw]" src="oculus.png" />
				</div>
				<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
					<img className="tablet-laptop-desktop:w-[20vw] mobile:w-[25vw]" src="domino.png" />
				</div>
				<div className="tablet-laptop-desktop:mx-[8vw] tablet-laptop-desktop:my-[4vh] mobile:py-[5vh]">
					<img className="tablet-laptop-desktop:w-[6vw] mobile:w-[15vw]" src="amc.png" />
				</div>
			</LogoLower>
			{/* <div className="px-[5vw] py-[5vh]">
				<div className="tablet-laptop-desktop:w-auto tablet-laptop-desktop:mx-50 tablet:w-screen tablet:h-[50vh]">
					<div className="tablet-laptop-desktop:mx-20 tablet-laptop-desktop:my-8 tablet-laptop-desktop:inline-block tablet:w-screen tablet:flex tablet:flex-col tablet:items-center tablet:justify-center tablet:my-[10vh]">
						<img className="w-[15vw]" src="BAZAAR.png" />
					</div>
					<div className="tablet-laptop-desktop:mx-20 tablet-laptop-desktop:my-8 tablet-laptop-desktop:inline-block tablet:w-screen tablet:flex tablet:flex-col tablet:items-center tablet:justify-center tablet:my-[10vh]">
						<img className="w-[15vw]" src="bonappet.png" />
					</div>
					<div className="tablet-laptop-desktop:mx-20 tablet-laptop-desktop:my-8 tablet-laptop-desktop:inline-block tablet:w-screen tablet:flex tablet:flex-col tablet:items-center tablet:justify-center tablet:my-[10vh]">
						<img className="w-[7vw]" src="NIKE.png" />
					</div>
				</div>
				<div className="tablet-laptop-desktop:w-auto tablet-laptop-desktop:mx-50 tablet:w-screen tablet:h-[50vh]">
					<div className="tablet-laptop-desktop:mx-20 tablet-laptop-desktop:my-8 tablet-laptop-desktop:inline-block tablet:w-screen tablet:flex tablet:flex-col tablet:items-center tablet:justify-center tablet:my-[10vh]">
						<img className="w-[17vw]" src="oculus.png" />
					</div>
					<div className="tablet-laptop-desktop:mx-20 tablet-laptop-desktop:my-8 tablet-laptop-desktop:inline-block tablet:w-screen tablet:flex tablet:flex-col tablet:items-center tablet:justify-center tablet:my-[10vh]">
						<img className="w-[20vw]" src="domino.png" />
					</div>
					<div className="tablet-laptop-desktop:mx-20 tablet-laptop-desktop:my-8 tablet-laptop-desktop:inline-block tablet:w-screen tablet:flex tablet:flex-col tablet:items-center tablet:justify-center tablet:my-[10vh]">
						<img className="w-[6vw]" src="amc.png" />
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default LogosPage;