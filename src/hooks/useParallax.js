import React from "react";
import { useTransform, MotionValue } from "framer-motion";

const useParallax = (value, distance) => {
	return useTransform(value, [0, -1], [-distance, distance]);
};

export {useParallax};