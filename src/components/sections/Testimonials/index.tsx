"use client";

import Wavy from "@/components/icons/Wavy";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import React from "react";

const Testimonials = () => {
	return (
		<div
			className="flex flex-col items-center justify-center gap-12"
			id="testimonials"
		>
			<div className="flex flex-col items-center justify-center gap-5">
				<Title className="relative">
					What our customers are <span className="text-primary">saying</span>
					<Wavy className="absolute -bottom-7 right-0" />
				</Title>
				<Subtitle>
					{"We're"} proud to work with these founder and <br /> help them grow
					their business.
				</Subtitle>
			</div>
			<div
				className={`columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 overflow-hidden relative transition-all`}
			>
				{testimonials.map((testimonial, index) => (
					<div className="mb-4 z-0 break-inside-avoid-column" key={index}>
						<div className="bg-white border border-slate/10 rounded-lg p-4 flex flex-col items-start gap-3 h-fit">
							<div className="flex items-start justify-between w-full">
								<div className="flex items-start gap-2">
									<img
										src={testimonial.user.image}
										alt="user"
										className="w-12 h-12 rounded-full object-cover object-top"
									/>
									<div className="flex flex-col items-start">
										<h3 className="font-bold">{testimonial.user.name}</h3>
										<p className="dark:text-zinc-400">
											@{testimonial.user.username}
										</p>
									</div>
								</div>
								<TwitterLogoIcon className="text-primary" />
							</div>
							<p className="dark:text-zinc-200 text-[14px]">
								{testimonial.content}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonials;

const testimonials = [
	{
		user: {
			name: "John Doe",
			username: "johndoe",
			image:
				"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=3280&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		content:
			"What makes Indiespace stand out is the exceptional support from their team. They're not only responsive and knowledgeable but also go the extra mile to ensure our success. Finding a company so dedicated to customer satisfaction is a rare gem.",
	},
	{
		user: {
			name: "John Doe",
			username: "johndoe",
			image:
				"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=3149&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		content:
			"Indiespace truly shines through its outstanding support team. They're responsive, knowledgeable, and always willing to do whatever it takes to guarantee our success. It's a rarity to come across a company so committed to customer satisfaction.",
	},
	{
		user: {
			name: "John Doe",
			username: "johndoe",
			image:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		content:
			"Indiespace sets itself apart with the incredible support they provide. Their team is responsive, knowledgeable, and consistently goes above and beyond to secure our success.",
	},
	{
		user: {
			name: "John Doe",
			username: "johndoe",
			image:
				"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		content:
			"What distinguishes Indiespace is the exceptional level of support from their team. They're quick to respond, highly informed, and always ready to go the extra mile to ensure our success.",
	},
	{
		user: {
			name: "John Doe",
			username: "johndoe",
			image:
				"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		content:
			"Indiespace is unique for its unwavering commitment to customer success, exemplified by their exceptional support team. They're incredibly responsive, well-versed, and consistently exceed expectations.",
	},
	{
		user: {
			name: "John Doe",
			username: "johndoe",
			image:
				"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=2662&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		content:
			"What truly sets Indiespace apart is the exceptional level of support from the team. They've been responsive, knowledgeable, and willing to go the extra mile to ensure our success.",
	},
	{
		user: {
			name: "John Doe",
			username: "johndoe",
			image:
				"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=3280&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		content:
			"What makes Indiespace stand out is the exceptional support from their team. They're not only responsive and knowledgeable but also go the extra mile to ensure our success. Finding a company so dedicated to customer satisfaction is a rare gem.",
	},
	{
		user: {
			name: "John Doe",
			username: "johndoe",
			image:
				"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=3149&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		content:
			"Indiespace truly shines through its outstanding support team. They're responsive, knowledgeable, and always willing to do whatever it takes to guarantee our success. It's a rarity to come across a company so committed to customer satisfaction.",
	},
	{
		user: {
			name: "John Doe",
			username: "johndoe",
			image:
				"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=3280&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		content:
			"What makes Indiespace stand out is the exceptional support from their team. They're not only responsive and knowledgeable but also go the extra mile to ensure our success. Finding a company so dedicated to customer satisfaction is a rare gem.",
	},
	{
		user: {
			name: "John Doe",
			username: "johndoe",
			image:
				"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=3149&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		content:
			"Indiespace truly shines through its outstanding support team. They're responsive, knowledgeable, and always willing to do whatever it takes to guarantee our success. It's a rarity to come across a company so committed to customer satisfaction.",
	},
	{
		user: {
			name: "John Doe",
			username: "johndoe",
			image:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		content:
			"Indiespace sets itself apart with the incredible support they provide. Their team is responsive, knowledgeable, and consistently goes above and beyond to secure our success.",
	},
	{
		user: {
			name: "John Doe",
			username: "johndoe",
			image:
				"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		content:
			"What distinguishes Indiespace is the exceptional level of support from their team. They're quick to respond, highly informed, and always ready to go the extra mile to ensure our success.",
	},
];
