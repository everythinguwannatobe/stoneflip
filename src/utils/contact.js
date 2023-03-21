const imageDesktopVariants = {
	offscreen: {
		x: -1900
	},
	onscreen: {
		x: 0,
		transition: {
			type: "spring",
			delay: 0.5,
			duration: 2
		}
	}
};

const imageLaptopVariants = {
	offscreen: {
		x: -500
	},
	onscreen: {
		x: 0,
		transition: {
			type: "spring",
			duration: 1
		}
	}
};

const imageMobileVariants = {
	offscreen: {
		x: -350
	},
	onscreen: {
		x: 0,
		transition: {
			type: "spring",
			duration: 1
		}
	}
};

const infoDesktopVariants = {
	offscreen: {
		x: -450
	},
	onscreen: {
		x: 0,
		transition: {
			type: "spring",
			delay: 0.5,
			duration: 2
		}
	}
};

const infoLaptopVariants = {
	offscreen: {
		x: -200
	},
	onscreen: {
		x: 0,
		transition: {
			type: "spring",
			duration: 1
		}
	}
};

const infoMobileVariants = {
	offscreen: {
		x: -100
	},
	onscreen: {
		x: 0,
		transition: {
			type: "spring",
			duration: 1
		}
	}
};


export { imageDesktopVariants, imageLaptopVariants, imageMobileVariants, infoDesktopVariants, infoLaptopVariants, infoMobileVariants };