import React, { useState } from "react";

import Navbar from "../components/Navbar";
import MainScene from "../components/MainScene";
import LeftTorus from "../components/LeftCanvas/Torus";
import Icosahedrone from "../components/LeftCanvas/Icosahedrone";
import TorusKnot from "../components/RightCanvas/TorusKnot";
import RightTorus from "../components/RightCanvas/Torus";
import Title from "../components/Animation/Home/Title";
import Description from "../components/Animation/Home/Description";


const Home = () => {

	return (
		<div className="
				bg-slate-100
				relative 
				w-screen 
				h-screen 
				pt-[5vh]">
			<div className="flex w-screen tablet-laptop-desktop:items-center tablet-laptop-desktop:justify-around mobile:flex-col">
				<div className=" tablet-laptop-desktop:mx-40 tablet-laptop-desktop:inline-block mobile:flex mobile:justify-center">
					<img src="HQ.png" className="w-28 mobile:block" alt="Logo Icon" />
				</div>
				<div className="z-10 bg-transparent mobile:justify-center mobile:block mobile:w-screen tablet-laptop-desktop:inline-block tablet-laptop-desktop:w-auto">
					<Navbar />
				</div>
			</div>
			<div className="
					absolute 
					flex 
					justify-center 
					w-full 
					tablet-laptop-desktop:top-[20%] 
					z-0">
				{/* <MainScene position={window.innerWidth > 900 ? [0, 20, 0] : [0, 80, 0]} scale={window.innerWidth > 900 ? 0.7 : 0.4} /> */}
			</div>
			<div className="
					absolute
					top-[50%]
					left-[0%]">
				<LeftTorus args={window.innerWidth > 900 ? [1.5, 0.5, 18, 47] : [0.8, 0.2, 18, 45]} />
			</div>
			<div className="
					absolute
					top-[20%]
					left-[0%]">
				<Icosahedrone args={window.innerWidth > 900 ? [1.4, 5] : [1, 5]} />
			</div>
			<div className="
					absolute
					top-[10%]
					right-[10%]">
				<TorusKnot args={window.innerWidth > 900 ? [1.3, 0.4, 180, 20] : [0.7, 0.2, 180, 20]} />
			</div>
			<div className="
					absolute
					top-[50%]
					right-[10%]">
				<RightTorus args={window.innerWidth > 900 ? [1.5, 0.5, 15, 43] : [0.8, 0.2, 15, 43]} />
			</div>
			<div className="w-screen h-screen tablet-laptop-desktop:flex tablet-laptop-desktop:flex-col tablet-laptop-desktop:justify-center">
				<div className="
						flex 
						justify-center 
						mobile:text-5xl 
						tablet-laptop-desktop:text-[6vw]
						mobile:mt-[25%]">
					<Title>
						WE ELEVATE<br /> BRANDS
					</Title>
				</div>
				<div className="flex justify-center ">
					<Description>
						A full-service creative experiential agency - <br /> creating desire and achieving transformative growth for <br /> leading and high-profile brands and creatives
					</Description>
				</div>
			</div>
		</div>
	);
};

export default Home;