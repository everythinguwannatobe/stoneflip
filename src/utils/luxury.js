const titleDesktopVariants = {
	offscreen: {
		y: -520
	},
	onscreen: {
		y: 0,
		transition: {
			type: "spring",
            delay: 1,
			duration: 1
		}
	}
};

const titleLaptopVariants = {
	offscreen: {
		y: -150
	},
	onscreen: {
		y: 0,
		transition: {
			type: "spring",
			duration: 1
		}
	}
};

const titleMobileVariants = {
	offscreen: {
		y: -100
	},
	onscreen: {
		y: 0,
		transition: {
			type: "spring",
			duration: 1
		}
	}
};

const descriptionDesktopVariants = {
	offscreen: {
		y: 150
	},
	onscreen: {
		y: 0,
		transition: {
			type: "spring",
			duration: 1
		}
	}
};

const descriptionLaptopVariants = {
	offscreen: {
		y: 100
	},
	onscreen: {
		y: 0,
		transition: {
			type: "spring",
			duration: 1
		}
	}
};

const descriptionMobileVariants = {
	offscreen: {
		y: 80
	},
	onscreen: {
		y: 0,
		transition: {
			type: "spring",
			duration: 1
		}
	}
};


export { 
    titleDesktopVariants, 
    titleLaptopVariants, 
    titleMobileVariants, 
    descriptionDesktopVariants, 
    descriptionLaptopVariants, 
    descriptionMobileVariants };