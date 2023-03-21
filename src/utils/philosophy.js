const titleDesktopVariants = {
	offscreen: {
		y: -620
	},
	onscreen: {
		y: 0,
		transition: {
			type: "spring",
			delay: 0.9,
			duration: 1
		}
	}
};

const titleLaptopVariants = {
	offscreen: {
		y: -250
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

const titleMobileVariants = {
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

const descriptionDesktopVariants = {
	offscreen: {
		x: 700
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
		x: 200
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
		x: 150
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
    titleDesktopVariants, 
    titleLaptopVariants, 
    titleMobileVariants, 
    descriptionDesktopVariants, 
    descriptionLaptopVariants, 
    descriptionMobileVariants };