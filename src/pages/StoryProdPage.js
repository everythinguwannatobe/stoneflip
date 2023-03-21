import React from "react";
import { Bounce, Fade } from "react-reveal";
import { Controller, Scene } from "react-scrollmagic";

import StoryTorusKnotScene from "../components/StoryTorusKnotScene";
import StoryTorusScene from "../components/StoryTorusScene";
import Title from "../components/Animation/Story/Title";
import Description from "../components/Animation/Story/Description";

const StoryProdPage = () => {
	return (
		<Controller>
			<Scene
				triggerHook="onLeave"
				duration={200}
				pin>
				<div className="relative w-screen h-[120vh] overflow-hidden bg-slate-100">
					<Bounce top>
						<div className="absolute tablet-laptop-desktop:left-[20vw] mobile:left-[1vw]">
							<StoryTorusKnotScene />
						</div>
					</Bounce>
					<Bounce left>
						<div className="absolute tablet-laptop-desktop:top-[20vh] mobile:top-[35vh]">
							<StoryTorusScene />
						</div>
					</Bounce>
					<div className="mt-[40vh] text-right tablet-laptop-desktop:text-[4.5vw] mobile:text-[6vw]">
						<Title>
							<h1 className="mx-[8vw] font-libre-franklin">
								Storytelling Production<br />
								and Development
							</h1>
						</Title>
					</div>
					<div className="">
						<Description>
							<div className="flex flex-col tablet-laptop-desktop:mx-[7.5vw] tablet-laptop-desktop:my-[0vh] mobile:mx-[10vw] mobile:my-[0.5vh] tablet-laptop-desktop:text-[2vw] mobile:text-[4vw] text-right">
								<h3 className="my-[1.5vh]">Digital Storytelling</h3>
								<h3 className="my-[1.5vh]">Video Production</h3>
								<h3 className="my-[1.5vh]">Story Development</h3>
							</div>
						</Description>
					</div>
				</div>
			</Scene>
		</Controller>
	);
};

export default StoryProdPage;