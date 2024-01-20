"use client";

import axios from "axios";
import Title, { Subtitle } from "../common/Title";
import { Button } from "../ui/button";
import { User } from "next-auth";
import { useRouter } from "next/navigation";
import { UserSubscriptionPlan } from "@/types";
import React from "react";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Badge } from "../ui/badge";

const Pricing = ({
	user,
	userSubscription,
}: {
	user?: User;
	userSubscription: UserSubscriptionPlan | null;
}) => {
	const router = useRouter();

	const handleSubscription = async (priceId: string) => {
		if (!user) return router.push("/sign-in");
		try {
			const response = await axios.get(`/api/stripe`, {
				headers: {
					priceId,
				},
			});
			window.location.href = response.data.url;
		} catch (err) {
			console.log(err);
		}
	};

	const handleLemonCheckout = async () => {
		if (!user) return router.push("/sign-in");
		try {
			const response = (await axios.post("/api/lemon")) as {
				data: { url: string };
			};

			window.location.href = response.data.url;
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div
			className="flex flex-col items-center justify-center gap-16"
			id="pricing"
		>
			<div className="flex items-center flex-col gap-3 text-center w-full">
				<Badge variant="outline" className="py-1">
					<p className="text-primary font-normal">Flexible Pricing</p>
				</Badge>
				<Title>
					Choose a plan that works <br /> for you
				</Title>
			</div>
			<div className="flex items-start justify-center gap-8 w-full flex-wrap lg:flex-nowrap">
				{prices.map((price, index) => (
					<div
						key={index + price.name}
						className={`flex flex-col items-start gap-6 p-8 rounded-lg border-[1px] ${
							price.recommended
								? "bg-gradient-to-br from-primary to-primary/20 text-white"
								: "bg-white dark:bg-black dark:bg-opacity-10"
						}`}
					>
						<div className="flex flex-col items-start gap-2">
							<Subtitle className="text-[20px] font-medium">
								{price.name}
							</Subtitle>
							<Subtitle>{price.description}</Subtitle>
						</div>
						<div className="flex items-baseline gap-2">
							<Title className="whitespace-nowrap">
								{price.currency}
								{price.price}
							</Title>
							<Subtitle>/{price.billingCycle}</Subtitle>
						</div>

						<div className="border-b border-dashed border-white/50 w-full"></div>

						<div className="flex flex-col items-start gap-4">
							{price.features.map((feature, index) => (
								<div className="flex items-center gap-2" key={index}>
									{feature.included ? (
										<CheckIcon />
									) : (
										<Cross1Icon className="text-white/70" />
									)}
									<Subtitle>{feature.text}</Subtitle>
								</div>
							))}
						</div>
						<Button
							className={`w-full rounded-md p-5 ${
								price.recommended
									? "bg-gradient-to-br from-blue-400 to-blue-800 text-white hover:from-blue-500 hover:to-blue-900"
									: "bg-gradient-to-br from-gray-700 via-gray-900 to-black text-white"
							}`}
							onClick={() => {
								handleSubscription(price.priceId!);
							}}
						>
							{!userSubscription?.isPro ? "Get Started" : "Upgrade"}
						</Button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Pricing;

const prices = [
	{
		name: "Enterprice",
		description: "Unlimited users, projects, and queries",
		price: 79,
		currency: "$",
		billingCycle: "month",
		recommended: false,
		priceId: process.env.NEXT_PUBLIC_STRIPE_YEAR_PRICE_ID,
		features: [
			{
				text: "Unlimited users",
				included: true,
			},
			{
				text: "Unlimited projects",
				included: true,
			},
			{
				text: "Unlimited queries",
				included: true,
			},
			{
				text: "Unlimited storage",
				included: true,
			},
			{
				text: "Unlimited API calls",
				included: false,
			},
			{
				text: "Unlimited integrations",
				included: false,
			},
			{
				text: "Unlimited support",
				included: false,
			},
		],
	},
	{
		name: "Enterprice",
		description: "Unlimited users, projects, and queries",
		price: 99,
		currency: "$",
		billingCycle: "month",
		recommended: true,
		priceId: process.env.NEXT_PUBLIC_STRIPE_YEAR_PRICE_ID,
		features: [
			{
				text: "Unlimited users",
				included: true,
			},
			{
				text: "Unlimited projects",
				included: true,
			},
			{
				text: "Unlimited queries",
				included: true,
			},
			{
				text: "Unlimited storage",
				included: true,
			},
			{
				text: "Unlimited API calls",
				included: true,
			},
			{
				text: "Unlimited integrations",
				included: true,
			},
			{
				text: "Unlimited support",
				included: true,
			},
		],
	},
	{
		name: "Enterprice",
		description: "Unlimited users, projects, and queries",
		price: 129,
		currency: "$",
		billingCycle: "month",
		recommended: false,
		priceId: process.env.NEXT_PUBLIC_STRIPE_YEAR_PRICE_ID,
		features: [
			{
				text: "Unlimited users",
				included: true,
			},
			{
				text: "Unlimited projects",
				included: true,
			},
			{
				text: "Unlimited queries",
				included: true,
			},
			{
				text: "Unlimited storage",
				included: true,
			},
			{
				text: "Unlimited API calls",
				included: true,
			},
			{
				text: "Unlimited integrations",
				included: true,
			},
			{
				text: "Unlimited support",
				included: true,
			},
		],
	},
];
