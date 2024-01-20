"use client";

import { User } from "next-auth";
import Gradient from "../common/gradient";
import Navbar from "../layout/Navbar";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Title, { Subtitle } from "../common/Title";
import { Badge } from "../ui/badge";
import UsedBy from "../common/UsedBy";
import SalesCard from "../charts/SalesCard";
import LineChartCard from "../charts/LineChartCard";

const Header = ({ user }: { user?: User }) => {
	return (
		<motion.div
			className="w-full flex items-center justify-start flex-col overflow-hidden relative mb-[100px] z-50"
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
			<Navbar user={user} />
			<Gradient className="w-[100%] dark:block hidden" />
			<div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full mt-[40px] md:mt-[80px] sm:mt-[100px] px-4 md:px-14 xl:px-24 min-h-[50vh]">
				<div className="flex flex-col items-center lg:items-start gap-6 lg:text-left text-center">
					<Badge variant="outline" className="py-1">
						<p className="text-primary font-normal">Empower your business</p>
					</Badge>
					<Title className="text-4xl md:text-6xl">
						Powerful solutions for <br className="md:block hidden" /> your
						business
					</Title>
					<Subtitle className="md:text-lg">
						We provide solutions to grow your business. We are a team of{" "}
						<br className="md:block hidden" />
						developers and designers.
					</Subtitle>
					<div className="flex items-center justify-start gap-8 md:flex-row flex-col">
						<Button>Get started</Button>
						<UsedBy />
					</div>
				</div>
				<div className="w-[100%] md:w-[80%] lg:w-[50%] flex gap-4 items-center relative lg:flex-row flex-col">
					<div className="lg:w-[50%] z-10 w-[100%]">
						<LineChartCard />
					</div>
					<div className="w-[50%] hidden flex-row lg:flex-col gap-4 lg:flex">
						<SalesCard />
						<SalesCard />
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Header;
