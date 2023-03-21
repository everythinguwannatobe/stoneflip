import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useSpring } from "framer-motion";
import HorizontalScroll from "react-horizontal-scrolling";
import Home from "./Home";
import { Controller, Scene } from "react-scrollmagic";

const Gallery = () => {
	const { scrollY, scrollYProgress } = useScroll();
	const [currentY, setY] = useState(0);
	const [opacity, setOpacity] = useState(0);
	const [backgroundColor, setBackgroundColor] = useState(255);
	const scrollRef = useRef(null);

	const scale = useSpring(1);
	
	const handleScroll = () => {
		console.log("scrolled Y", scrollY.current);
		console.log("current Y", currentY);
		setY(scrollY.current);
		if (scrollY.current > 1000 && scrollY.current < 1600) {
			scale.set(1.2-(scrollY.current * 1.1 - 800)/window.innerHeight);
			setBackgroundColor(255 - (255 / 600) * (scrollY.current - 1000));
		}
		if (scrollY.current > 1300 && scrollY.current < 1600) {
			setBackgroundColor(255 - (255 / 200) * (scrollY.current - 1300));
			setOpacity((1 / 500) * (scrollY.current - 1300));
		}
		if (scrollY.current <= 1100) {
			scale.set(1.2);
			setOpacity(0);
			setBackgroundColor(255);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
	}, [handleScroll]);


	// className={`${(scrollY.current > window.innerHeight && scrollY.current < window.innerHeight * 2) ? "fixed top-0" : ""} 			

	return (
		<Controller>
			<Scene
				triggerHook="onLeave"
				duration={1000}
				pin>
			<div id="gallery" className="w-screen h-screen m-0 overflow-hidden">
				<div className={`z-20 w-screen h-screen absolute top-0 left-0 ${(scrollY.current < 1300) ? 'bg-transparent' : ''}`} style={{backgroundColor: `rgb(${backgroundColor},${backgroundColor},${backgroundColor})`, opacity: opacity, }}></div>
				<div ref={scrollRef} 
					className="w-screen h-screen bg-no-repeat bg-cover tablet-laptop-desktop:px-56 tablet-laptop-desktop:py-20 mobile:px-5 mobile:py-5 bg-waterflow">
					<div className="flex items-center overflow-hidden tablet-laptop-desktop:mx-30 tablet-laptop-desktop:my-10 tablet-laptop-desktop:h-[40vw] mobile:h-[100vh] bg-transparent relative">
						<img src="Rectangle 10.png" className="absolute z-0 w-screen" />
						<motion.img style={{scale}} src="Rectangle 9.png" className="z-10 w-screen" />
					</div>
				</div>
			</div>
			</Scene>
		</Controller>
	);
};

export default Gallery;