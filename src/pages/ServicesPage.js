import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useCurrentWidth } from "../hooks/useCurrentWidht";
import { Controller, Scene } from "react-scrollmagic";
import Description from "../components/Animation/Services/Description";

const ServicesPage = () => {
	const {scrollY} = useScroll();
	const ref = useRef(null);
	const width = useCurrentWidth();
	const [titleColor, setTitleColor] = useState(255);
	const [backgroundColor, setBackgroundColor] = useState(0);
	const [current, setCurrent] = useState({x: 300, y: -3000, scale: 30});
	const [currentY, setCurrentY] = useState(scrollY.current);

	const handleScroll = () => {
		console.log("Services scroll", scrollY.current);
		if (currentY < 5100) {
			setCurrentY(scrollY.current);
			setTitleColor(255);
			setBackgroundColor(0);
			setCurrent({x: 300, y: -3000, scale: 30});
		}
		if (scrollY.current > 5100 && scrollY.current < 5300) {
			setCurrentY(scrollY.current);
			setTitleColor(255 - (255 / 200) * (scrollY.current - 5100));
			setBackgroundColor(0 + (255 / 200) * (scrollY.current - 5100));
			setCurrent({x: 300 - (300 / 200) * (scrollY.current - 5100), y: -3000 + (3000 / 200) * (scrollY.current - 5100), scale: 30 - (29 / 200) * (scrollY.current - 5100)})
		}
		if (scrollY.current > 5300) {
			setCurrentY(scrollY.current);
			setTitleColor(0);
			setBackgroundColor(255);
			setCurrent({x:0, y: 0, scale: 1})
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, [handleScroll]);

	const titleContainer = (width > 950) ? 
		<motion.h1 initial={{scale: 30, color: "rgb(255, 255, 255)", y: -3000, x: 300}} animate={{...current, color: `rgb(${titleColor}, ${titleColor}, ${titleColor})`}} transition={{duration: 1}}>
			There's no ONE<br /> formula for success
		</motion.h1> :
		<motion.h1 initial={{color: "#fff"}} whileInView={{color: "#000"}} viewport={{amount: 0.8}} transition={{duration: 1}}>
			There's no ONE<br /> formula for success
		</motion.h1>;
	return (
		<Controller>
			<Scene 
				triggerHook="onLeave"
				duration={1000}
				pin>
				<div id="services" className="relative w-screen h-screen m-0">
					<div className="absolute bottom-0 left-0">
						<img className="w-[35vw]" src="circles.png" />
					</div>
					<div ref={ref} className="w-screen h-screen overflow-hidden">
						<motion.div className="flex flex-col items-center justify-center w-screen h-screen p-14" initial={{backgroundColor: "rgb(0, 0, 0)"}} whileInView={{backgroundColor: `rgb(${backgroundColor}, ${backgroundColor}, ${backgroundColor})`}} transition={{duration: 1}}>
							<div className="absolute tablet-laptop-desktop:top-[10vh] tablet-laptop-desktop:left-[5vw] mobile:top-[10vh] mobile:left-[5vw]">
								<img className="desktop:w-[1.2vw] laptop:w-[1.8vw] tablet:w-[2.5vw] mobile:w-[3vw]" src="Services.png" />
							</div>
							<div className="flex justify-center tablet-laptop-desktop:text-[6vw] mobile:text-[8vw] font-libre-franklin">
								{titleContainer}
							</div>
							<div className="absolute flex justify-end tablet-laptop-desktop:text-[1.5vw] text-end tablet-laptop-desktop:top-[70vh] tablet-laptop-desktop:right-[5vw] mobile:top-[80vh] mobile:right-[6vw]">
								<Description>
									<h3>
										No matter the company size, every company <br />
										is unique and requires round-the-clock<br /> 
										attention from industry experts to deliver<br />
										content that will connect them to their <br />
										audience - that's where we come in
									</h3>
								</Description>
							</div>
						</motion.div>
					</div>
				</div>
			</Scene>
		</Controller>
	);
};

export default ServicesPage;