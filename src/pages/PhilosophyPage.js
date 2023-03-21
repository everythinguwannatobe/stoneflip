import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { useScroll } from "framer-motion";
import { Controller, Scene } from "react-scrollmagic";
import Title from "../components/Animation/Philosophy/Title";

import CPScene from "../components/CPScene";
import Description from "../components/Animation/Philosophy/Description";

const PhilosophyPage = () => {
	const [currentY, setCurrentY] = useState(0);
	const { scrollY } = useScroll();
	console.log(scrollY.current);

	const handleScroll = () => {
		if (scrollY.current > 1750) {
			setCurrentY(scrollY.current);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
	}, [handleScroll]);

	return (
		<Controller>
			<Scene
				triggerHook="onLeave"
				duration={200}
				pin>
				<div className="relative w-screen h-screen overflow-hidden bg-no-repeat bg-cover bg-waterslide">
					<div className="absolute top-0 left-[0%]">
						<CPScene />
					</div>
					
					<Fade top>
						<div className="absolute top-[10%] left-[5%]">
							<img src="Philosophy.png" />
						</div>
					</Fade>
					<div className="flex justify-center text-black tablet-laptop-desktop:my-[10%] mobile:mt-[35%] text-[7vw]">
						<Title>
							Working with the <br /> Best Clients and <br /> Partners
						</Title>
					</div>
					<div className="text-[2vw] text-right tablet-laptop-desktop:-my-[5%] tablet-laptop-desktop:mx-[10%]	mobile:mt-[5%] mobile:mx-[10%]">
						<Description>
							Stone Flip builds bridges to <br />connect people with stories <br /> and brands based on research<br /> and creative innovation
						</Description>
					</div>
				</div>
			</Scene>
		</Controller>
	);
};

export default PhilosophyPage;