

const descriptionDesktopVariants = {
	offscreen: {
		x: 640
	},
	onscreen: {
		x: 0,
		transition: {
			type: "spring",
            delay: 1,
			duration: 1
		}
	}
};

const descriptionLaptopVariants = {
	offscreen: {
		x: 300
	},
	onscreen: {
		x: 0,
		transition: {
			type: "spring",
			duration: 1
		}
	}
};

const descriptionMobileVariants = {
	offscreen: {
		x: 80
	},
	onscreen: {
		x: 0,
		transition: {
			type: "spring",
			duration: 1
		}
	}
};

export { 
    descriptionDesktopVariants, 
    descriptionLaptopVariants, 
    descriptionMobileVariants
     };