"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION } from "@/utils";
import Box from "@/components/icons/Box";
import LogoCloud from "@/components/shared/LogoCloud";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { User } from "next-auth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Device from "./device";


const Hero = ({ user }: { user?: User }) => {
	return (
		<>
			<Navbar user={user} />
			<motion.div
				className="w-full flex items-center mt-20 flex-col text-center gap-14 min-h-[calc(100vh-15rem)] lg:mb-0"
				initial="hidden"
				animate="show"
				viewport={{ once: true }}
				variants={{
					hidden: {},
					show: {
						transition: {
							staggerChildren: 0.15,
						},
					},
				}}
			>
				<div className="flex flex-col items-center justify-center gap-6">
					<motion.h1
						className="text-[2.7rem] text-[#544350] not-italic font-semibold sm:text-5xl xl:text-6xl/none flex flex-col sm:gap-3"
						variants={FADE_UP_ANIMATION}
					>
						更聪明更好的<br />{" "}
						<span >
							快捷指令{" "}

						</span>
					</motion.h1>
					<motion.p
						className="text-black max-w-xs sm:max-w-full sm:text-base text-[1.25rem] text-[rgba(122,103,116,.76)] leading-[125%]"
						variants={FADE_UP_ANIMATION}
					>
						ShortcutsAI 是一个由人工智能驱动的快捷指令集合，可以让工作和生活更愉快。
					</motion.p>
					<motion.div
						className="flex items-center justify-center gap-6"
						variants={FADE_UP_ANIMATION}
					>
						<Button variant="default" className="flex  gap-2 bg-[linear-gradient(#b169ff,#653dbb)] h-12 w-52 font-bold text-base" >
							<PaperPlaneIcon />
							开始免费体验
						</Button>
						{/* <Button variant="secondary">Learn more</Button> */}
					</motion.div>
				</div>
				<Tabs defaultValue="tally" className="w-[400px]">
					<TabsContent value="tally">
						<Device
							laptopPoster="https://files.rewind.ai/hero-mac-search-poster.webp"
							laptopWebm="https://files.rewind.ai/hero-mac-search.webm"
							laptopMp4="https://files.rewind.ai/hero-mac-search.mp4"
							laptopFrameImg="https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bdfef079e0f267cc6172c6_hero-mba-frame.webp"
							iphonePoster="https://files.rewind.ai/hero-iphone-search-poster.webp"
							iphoneWebm="https://files.rewind.ai/hero-iphone-search.webm"
							iphoneMp4="https://files.rewind.ai/hero-iphone-search.mp4"
							iphoneFrameImg="https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bdff2f7b1cd77bf80cb89b_hero-iphone-frame.webp"
						/>
					</TabsContent>
					<TabsContent value="summary">
						<Device
							laptopPoster="https://files.rewind.ai/hero-mac-ask-poster.webp"
							laptopWebm="https://files.rewind.ai/hero-mac-ask.webm"
							laptopMp4="https://files.rewind.ai/hero-mac-ask.mp4"
							laptopFrameImg="https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bdfef079e0f267cc6172c6_hero-mba-frame.webp"
							iphonePoster="https://files.rewind.ai/hero-iphone-ask-poster.webp"
							iphoneWebm="https://files.rewind.ai/hero-iphone-ask.webm"
							iphoneMp4="https://files.rewind.ai/hero-iphone-ask.mp4"
							iphoneFrameImg="https://assets-global.website-files.com/635dda7647d1612d7d877c36/64bdff2f7b1cd77bf80cb89b_hero-iphone-frame.webp"
						/>
					</TabsContent>
					<TabsList className="flex justify-center items-center mx-7">
						<TabsTrigger className="flex" value="tally">AI记账</TabsTrigger>
						<TabsTrigger className="flex" value="summary">会议纪要</TabsTrigger>
					</TabsList>
				</Tabs>
				<div className="flex flex-col items-center justify-center gap-20">
					<div className="flex flex-col items-center gap-5">
						<div className="flex items-center justify-center">
							{Users.map((user, index) => {
								return (
									<Image
										key={index}
										src={user.image}
										alt="User"
										height={40}
										width={40}
										objectFit="cover"
										className="rounded-full -m-[5px] border border-white"
									/>
								);
							})}
						</div>
						<p className="text-sm text-gray-600">
							Trusted by over{" "}
							<span className="text-primary font-semibold text-base">
								1,000+
							</span>{" "}
							businesses worldwide
						</p>
					</div>
					{/* <LogoCloud /> */}
				</div>
			</motion.div>
		</>
	);
};

export default Hero;

const Users = [
	{
		image: "/images/users/1.png",
	},
	{
		image: "/images/users/2.png",
	},
	{
		image: "/images/users/3.png",
	},
	{
		image: "/images/users/4.png",
	},
	{
		image: "/images/users/5.png",
	},
];


