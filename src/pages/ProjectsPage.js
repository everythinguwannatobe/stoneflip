import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useCurrentWidth } from "../hooks/useCurrentWidht";
import HorizontalScroll from "react-horizontal-scrolling";

const ProjectsPage = () => {
	const ref = useRef(null);
	const { scrollY } = useScroll();
	const [currentY, setCurrentY] = useState(0);
	const width = useCurrentWidth();

	const [position1, setPosition1] = useState({x: 250, y: 200});
	const [position2, setPosition2] = useState({x: -150, y: 150});
	const [position3, setPosition3] = useState({x: -550, y: -50});
	const [position4, setPosition4] = useState({x: 300, y: 0});
	const [position5, setPosition5] = useState({x: 100, y: -300});
	const [position6, setPosition6] = useState({x: -400, y: -50});

	const handleScroll = () => {
		console.log("Project scroll", scrollY.current);
		console.log("Project current Y", currentY);
		setCurrentY(scrollY.current);
		
		if (scrollY.current > 7200 && scrollY.current < 7500) {
			setCurrentY(scrollY.current);
			setPosition1({x: 250 - (250 / 200) * (scrollY.current - 7400), y: 150 - (150 / 200) * (scrollY.current - 7400)});
			setPosition2({x: -150 + (150 / 200) * (scrollY.current - 7400), y: 100 - (100 / 200) * (scrollY.current - 7400)});
			setPosition3({x: -550 + (550 / 200) * (scrollY.current - 7400), y: -100 + (100 / 200) * (scrollY.current - 7400)});
			setPosition4({x: 300 - (300 / 200) * (scrollY.current - 7400), y: -50 + (50 / 200) * (scrollY.current - 7400)});
			setPosition5({x: 100 - (100 / 200) * (scrollY.current - 7400), y: -350 + (350 / 200) * (scrollY.current - 7400)});
			setPosition6({x: -400 + (400 / 200) * (scrollY.current - 7400), y: -100 + (100 / 200) * (scrollY.current - 7400)});
		}
		if (scrollY.current > 7500) {
			setCurrentY(scrollY.current);
			setPosition1({x: 0, y: 0});
			setPosition2({x: 0, y: 0});
			setPosition3({x: 0, y: 0});
			setPosition4({x: 0, y: 0});
			setPosition5({x: 0, y: 0});
			setPosition6({x: 0, y: 0});
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	},[handleScroll]);

	const imageList = (width > 1600) ?
		<div id="projects" ref={ref} className="flex flex-wrap justify-around mx-20" >
			<motion.div className="z-0 m-10" initial={{x: 250, y: 150}} animate={position1} viewport={{amount: 0.8, once: false}} transition={{duration: 0.5}}>
				<img src="Rectangle 13.png" />
			</motion.div>
			<motion.div className="z-10 m-10" initial={{x: -150, y: 100}} animate={position2} viewport={{amount: 0.8, once: false}} transition={{duration: 0.5}}>
				<img src="Rectangle 14.png" />
			</motion.div>
			<motion.div className="z-20 m-10" initial={{x: -550, y: -100}} animate={position3} viewport={{amount: 0.8, once: false}} transition={{duration: 0.5}}>
				<img src="Rectangle 15.png" />
			</motion.div>
			<motion.div className="z-40 m-10" initial={{x: 300, y: -50}} animate={position4} viewport={{amount: 0.8, once: false}} transition={{duration: 0.5}}>
				<img src="Rectangle 18.png" />
			</motion.div>
			<motion.div className="z-30 m-10" initial={{x: 100, y: -350}} animate={position5} viewport={{amount: 0.8, once: false}} transition={{duration: 0.5}}>
				<img src="Rectangle 16.png" />
			</motion.div>
			<motion.div className="z-50 m-10" initial={{x: -400, y: -100}} animate={position6} viewport={{amount: 0.8, once: false}} transition={{duration: 0.5}}>
				<img src="Rectangle 17.png" />
			</motion.div>
		</div> :
		// <div className="flex flex-col items-center justify-center">
		<div className="flex items-center justify-center w-screen h-screen p-[3vw]">
			<HorizontalScroll>
				<motion.div key={6} className="z-0 mx-[1vh] inline-block">
					<img className="w-96 h-96" src="Rectangle 13.png" />
				</motion.div>
				<motion.div key={5} className="z-10 mx-[1vh] inline-block">
					<img className="w-96 h-96" src="Rectangle 14.png" />
				</motion.div>
				<motion.div key={4} className="z-20 mx-[1vh] inline-block">
					<img className="w-96 h-96" src="Rectangle 15.png" />
				</motion.div>
				<motion.div key={3} className="z-40 mx-[1vh] inline-block">
					<img className="w-96 h-96" src="Rectangle 18.png" />
				</motion.div>
				<motion.div key={2} className="z-30 mx-[1vh] inline-block">
					<img className="w-96 h-96" src="Rectangle 16.png" />
				</motion.div>
				<motion.div key={1} className="z-50 mx-[1vh] inline-block">
					<img className="w-96 h-96" src="Rectangle 17.png" />
				</motion.div>
			</HorizontalScroll>
		</div>
	return (
		<div className="relative w-screen h-full p-0 bg-no-repeat bg-cover bg-slate-100">
			<div className="absolute left-[5vw] top-0">
				<img src="Projects.png" alt="Project Image here" />
			</div>
			{imageList}
		</div>
	);
};

export default ProjectsPage;