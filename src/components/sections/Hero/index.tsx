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

const Hero = ({ user }: { user?: User }) => {
	return (
		<>
			<Navbar user={user} />
			<motion.div
				className="w-full flex items-center mt-28 flex-col text-center gap-14 min-h-[calc(100vh-15rem)] lg:mb-0"
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
						className="text-4xl font-semibold sm:text-5xl xl:text-6xl/none flex flex-col sm:gap-3"
						variants={FADE_UP_ANIMATION}
					>
						更聪明更好的<br />{" "}
						<span className="text-primary relative">
							快捷指令{" "}
							{/* <span>
								ease
								<Box className="absolute top-0 md:block hidden md:right-[20px] lg:right-[40px]" />
							</span> */}
						</span>
					</motion.h1>
					<motion.p
						className="text-black max-w-xs sm:max-w-full sm:text-base text-sm"
						variants={FADE_UP_ANIMATION}
					>
						ShortcutsAI 是一个由人工智能驱动的快捷指令集合，可以让工作和生活更愉快。
					</motion.p>
					<motion.div
						className="flex items-center justify-center gap-6"
						variants={FADE_UP_ANIMATION}
					>
						<Button variant="default" className="flex items-center gap-2">
							<PaperPlaneIcon />
							Start free trial
						</Button>
						<Button variant="secondary">Learn more</Button>
					</motion.div>
				</div>
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
