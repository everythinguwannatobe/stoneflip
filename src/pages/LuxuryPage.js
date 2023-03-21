import React from "react";
import { Bounce, Fade } from "react-reveal";
import { Controller, Scene } from "react-scrollmagic";
import Description from "../components/Animation/Luxury/Description";
import Title from "../components/Animation/Luxury/Title";

const LuxuryPage = () => {
	return (
		<Controller>
			<Scene
				triggerHook="onLeave"
				duration={200}
				pin>
				<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-slate-100">
					<div className="text-center tablet-laptop-desktop:text-[6vw] mobile:text-[8vw] font-libre-franklin">
						<Title>
							<h1>
								Luxury Brandling and <br />
								Digital Creative Agency
							</h1>
						</Title>
					</div>
					<div className="tablet-laptop-desktop:text-[2vw] mobile:text-[3.5vw] mobile:my-[4vh] text-center">
						<Description>
							<h3>
								Based in LA, we help high-profile and <br />
								leading brands in the beauty, fine jewelry, <br />
								fashion, fine food. wines & spicies, real<br />
								estate. and Luxury lifestyle space.
							</h3>
						</Description>
					</div>
				</div>
			</Scene>
		</Controller>
	);
};

export default LuxuryPage;