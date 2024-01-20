import React from "react";
import Feature from "../common/Feature";
import Title from "../common/Title";
import { Badge } from "../ui/badge";
import {
	BlendingModeIcon,
	BookmarkIcon,
	MaskOnIcon,
	MixIcon,
	MixerHorizontalIcon,
	RocketIcon,
} from "@radix-ui/react-icons";

const features = [
	{
		title: "Innovative Solutions",
		description:
			"Explore the exciting world of Feature 1. Discover its unique qualities and functionalities. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros in lorem tristique lacinia. In hac habitasse platea dictumst.",
		icon: <RocketIcon className="h-[20px] w-[20px] text-white" />,
	},
	{
		title: "Revolutionary Tech",
		description:
			"Feature 2 offers a compelling experience like no other. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros in lorem tristique lacinia. In hac habitasse platea dictumst.",
		icon: <BookmarkIcon className="h-[20px] w-[20px] text-white" />,
	},
	{
		title: "Unleash Your Potential",
		description:
			"Dive into the world of Feature 3 and unlock its hidden potential. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros in lorem tristique lacinia. In hac habitasse platea dictumst.",
		icon: <MixerHorizontalIcon className="h-[20px] w-[20px] text-white" />,
	},
	{
		title: "Unleash Your Potential",
		description:
			"Dive into the world of Feature 3 and unlock its hidden potential. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros in lorem tristique lacinia. In hac habitasse platea dictumst.",
		icon: <MaskOnIcon className="h-[20px] w-[20px] text-white" />,
	},
	{
		title: "Unleash Your Potential",
		description:
			"Dive into the world of Feature 3 and unlock its hidden potential. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros in lorem tristique lacinia. In hac habitasse platea dictumst.",
		icon: <BlendingModeIcon className="h-[20px] w-[20px] text-white" />,
	},
	{
		title: "Unleash Your Potential",
		description:
			"Dive into the world of Feature 3 and unlock its hidden potential. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros in lorem tristique lacinia. In hac habitasse platea dictumst.",
		icon: <MixIcon className="h-[20px] w-[20px] text-white" />,
	},
];

const Features = () => {
	return (
		<div className="flex items-center justify-center gap-12 md:gap-24 text-center flex-col m-auto w-full">
			<div className="flex flex-col items-center gap-3 w-full text-center">
				<Badge variant="outline" className="py-1">
					<p className="text-primary font-normal">We offer the best features</p>
				</Badge>
				<Title>
					Meet IndieSpace, the most <br /> rare & powerful kit
				</Title>
			</div>
			<div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10">
				{features.map((feature, index) => {
					return <Feature key={index} {...feature} />;
				})}
			</div>
		</div>
	);
};

export default Features;
