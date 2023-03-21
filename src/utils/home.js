const titleDesktopVariants = {
	offscreen: {
		x: -1320
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

const titleLaptopVariants = {
	offscreen: {
		x: -500
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

const titleMobileVariants = {
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

const descriptionDesktopVariants = {
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

const descriptionLaptopVariants = {
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

const descriptionMobileVariants = {
	offscreen: {
		y: 40
	},
	onscreen: {
		y: 0,
		transition: {
			type: "spring",
			duration: 1
		}
	}
};


export { titleDesktopVariants, titleLaptopVariants, titleMobileVariants, descriptionDesktopVariants, descriptionLaptopVariants, descriptionMobileVariants };