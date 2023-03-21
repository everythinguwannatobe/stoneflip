import React, { useEffect } from "react";
import { useScroll, motion } from "framer-motion";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap/dist";
import styled from "styled-components";

import PhilosophyPage from "./PhilosophyPage";
import Gallery from "./Gallery";
import Home from "./Home";
import LogosPage from "./LogosPage";
import StoryProdPage from "./StoryProdPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import ServicesPage from "./ServicesPage";
import LuxuryPage from "./LuxuryPage";

const StickyStyled = styled.div`
	.sticky {
		background-color: black;
		width: 100%;
		height: 100vh;
	}
	.animation {
		position: absolute;
		width: 50px;
		height: 50px;
		background-color: red;
	}
`;

const Welcome = () => {
	return (
		<>
			<motion.div>
				<Home />
			</motion.div>
			<motion.div>
				<Gallery />
			</motion.div>
			<motion.div>
				<PhilosophyPage />
			</motion.div>
			<motion.div>
				<LogosPage />
			</motion.div>
			<motion.div>
				<ServicesPage />
			</motion.div>
			<motion.div>
				<StoryProdPage />
			</motion.div>
			<motion.div>
				<ProjectsPage />
			</motion.div>
			<motion.div>
				<LuxuryPage />
			</motion.div>
			<motion.div>
				<ContactPage />
			</motion.div>
		</>
	);
};

export default Welcome;