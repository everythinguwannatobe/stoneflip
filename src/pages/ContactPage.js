import React, { useRef, useState } from "react";
import { useCurrentWidth } from "../hooks/useCurrentWidht";
import { Bounce, Fade } from "react-reveal";
import { motion, useScroll } from "framer-motion";
import { useCurrentPoint } from "../hooks/useCurrentPoint";
import ImageSlider from "../components/Animation/Contact/ImageSlider";
import InfoSlider from "../components/Animation/Contact/InfoSlider";

const ContactPage = () => {
	const ref = useRef(null);
	const width = useCurrentWidth();
	const [status, setStatus] = useState("block");
	const {x, y} = useCurrentPoint(ref);
	const { scrollY } = useScroll();
	const [currentY, setCurrentY] = useState(scrollY.current);

	const setShow = ()=> {
		setStatus("block");
	};

	const hideShow =() => {
		setStatus("none");
	};

	const handleScroll = () => {
		setCurrentY(scrollY.current);
	};

	window.addEventListener('scroll', handleScroll);

    return (
      	<motion.div id="contacts" className="relative w-screen h-screen bg-no-repeat bg-cover bg-slate-100 bg-waterslide">
			{currentY > 9500 ?
			<motion.div ref={ref} animate={{ x, y }} transition={{ type: "spring", damping: 3, stiffness: 50, restDelta: 0.001 }} style={{display: status}} className={`bg-pink-300 rounded-full px-[3vw] py-[4vw] font-libre-franklin text-[1vw] text-center  absolute z-0`}>Contact</motion.div>
			: 
			<></>}
			<div onMouseEnter={hideShow} onMouseOut={setShow}>
      			<ImageSlider />
			</div>
			<div className="tablet-laptop-desktop:mx-[7vw] tablet-laptop-desktop:my-[1vh] mobile:mx-[5vw] mobile:my-[3vh]">
				<img src="Contact.png" />
			</div>
			<InfoSlider>
				<motion.div className="tablet-laptop-desktop:mx-[5vw] tablet-laptop-desktop:text-[1.2vw] text-left mobile:mx-[3vw] h-auto">
					<h3 className="tablet-laptop-desktop:my-[2vh] mobile:my-[1vh]">
						STONE FLIP
					</h3>
					<h3 className="tablet-laptop-desktop:my-[2vh] mobile:my-[1vh]">
						530 W 7th St. PH 2<br />
						Los Angeles, CA 90014
					</h3>
					<h3 className="tablet-laptop-desktop:my-[2vh] mobile:my-[1vh]">
						info@stone-flip.com<br />
						+1 202 607 3394
					</h3>

					<div className="px-[0.5vw] py-[1vh] w-[6vw] text-center text-[1.2vw] bg-slate-500 hover:text-white hover:bg-black z-10">EMAIL</div>
				</motion.div>
			</InfoSlider>
        </motion.div>
    );
};

export default ContactPage;