const upperDesktopVariants = {
  offscreen: {
		x: -1700
	},
	onscreen: {
		x: 0,
		transition: {
			type: "spring",
			delay: 0.5,
			duration: 1
		}
	}
};

const upperLaptopVariants = {
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

const upperMobileVariants = {
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

const lowerDesktopVariants = {
	offscreen: {
		x: 1700
	},
	onscreen: {
		x: 0,
		transition: {
			type: "spring",
			delay: 0.5,
			duration: 1
		}
	}
};

const lowerLaptopVariants = {
	offscreen: {
		x: 700
	},
	onscreen: {
		x: 0,
		transition: {
			type: "spring",
			duration: 1
		}
	}
};

const lowerMobileVariants = {
	offscreen: {
		x: 500
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
	upperDesktopVariants,
	upperLaptopVariants,
	upperMobileVariants,
	lowerDesktopVariants,
	lowerLaptopVariants,
	lowerMobileVariants
};