"use client";

import React from "react";
import SocialLinks from "../common/Socials";
import Title, { Subtitle } from "../common/Title";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
	return (
		<div className="flex items-start gap-10 justify-between w-full md:pt-[50px] pb-[50px] md:pb-[120px] md:flex-row flex-col md:gap-4">
			<div className="flex items-start gap-4 flex-col">
				<Title>Indiespace</Title>
				<Subtitle>
					Indiespace is a platform that helps you find the best indie games.
				</Subtitle>
				<SocialLinks />
				<Subtitle className="text-[13px]">
					Copywrite © 2023 Indiespace. All rights reserved.
				</Subtitle>
			</div>

			{Links.map((link, i) => (
				<div key={i} className="flex items-start gap-4 flex-col">
					<Subtitle className="font-normal text-[16px]">
						{link.heading}
					</Subtitle>
					{link.items.map((item, i) => (
						<Subtitle key={i} className="text-[13px]">
							{item.name}
						</Subtitle>
					))}
				</div>
			))}
			<div className="flex items-start gap-4 flex-col">
				<Subtitle className="font-normal text-[16px]">Newsletter</Subtitle>
				<Subtitle className="text-[13px]">
					Subscribe to our newsletter to get the latest news and updates.
				</Subtitle>
				<div className="flex items-start gap-4 md:flex-row flex-col md:w-fit w-full">
					<Input placeholder="Email Address" />
					<Button>Subscribe</Button>
				</div>
			</div>
		</div>
	);
};

export default Footer;

const Links = [
	{
		heading: "Pages",
		items: [
			{
				name: "Home",
				link: "/",
			},
			{
				name: "About",
				link: "/about",
			},
			{
				name: "Contact",
				link: "/contact",
			},
		],
	},
	{
		heading: "Legal",
		items: [
			{
				name: "Terms & Conditions",
				link: "/terms",
			},
			{
				name: "Privacy Policy",
				link: "/privacy",
			},
			{
				name: "Cookie Policy",
				link: "/cookie",
			},
		],
	},
];
