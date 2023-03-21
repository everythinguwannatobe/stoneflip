import React from "react";

const Navbar = () => {
	return (
		<div className="flex text-black tablet-laptop-desktop:flex-row tablet-laptop-desktop:float-right tablet-laptop-desktop:text-[1.5vw] mobile:text-lg mobile:flex-col">
			<div className="hover:text-indigo-400 tablet-laptop-desktop:mx-10 mobile:w-screen mobile:my-3 hover:bg-slate-100"><a href="#projects">Work</a></div>
			<div className="hover:text-indigo-400 tablet-laptop-desktop:mx-10 mobile:w-screen mobile:my-3 hover:bg-slate-100"><a href="#services">About</a></div>
			<div className="hover:text-indigo-400 tablet-laptop-desktop:mx-10 mobile:w-screen mobile:my-3 hover:bg-slate-100"><a href="#contacts">Contact</a></div>
		</div>
	);
};

export default Navbar;