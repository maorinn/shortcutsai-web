"use client";

import React, { FC } from "react";
import {
	InstagramLogoIcon,
	TwitterLogoIcon,
	LinkedInLogoIcon,
	GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { motion, useInView } from "framer-motion";
import { FADE_UP_ANIMATION } from "@/src/utils";

const SocialLinks: FC = () => {
	const ref = React.useRef(null);
	const isInView = useInView(ref);
	return (
		<motion.div
			className="flex items-center gap-2"
			ref={ref}
			initial="hidden"
			animate={isInView ? "show" : "hidden"}
			viewport={{ once: false }}
			variants={{
				hidden: {},
				show: {
					transition: {
						staggerChildren: 0.15,
					},
				},
			}}>
			<motion.span variants={FADE_UP_ANIMATION}>
				<InstagramLogoIcon />
			</motion.span>
			<motion.span variants={FADE_UP_ANIMATION}>
				<TwitterLogoIcon />
			</motion.span>
			<motion.span variants={FADE_UP_ANIMATION}>
				<LinkedInLogoIcon />
			</motion.span>
			<motion.span variants={FADE_UP_ANIMATION}>
				<GitHubLogoIcon />
			</motion.span>
		</motion.div>
	);
};

export default SocialLinks;
