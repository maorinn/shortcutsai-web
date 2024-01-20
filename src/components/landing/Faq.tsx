"use client";

import React, { useState } from "react";
import Title, { Subtitle } from "../common/Title";
import { PlusIcon } from "@radix-ui/react-icons";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const data = [
	{
		id: 1,
		question: "What is the capital of France?",
		answer: "The capital of France is Paris.",
		active: false,
	},
	{
		id: 2,
		question: "How can I contact customer support?",
		answer:
			"You can reach our customer support team via email at support@example.com.",
		active: false,
	},
	{
		id: 3,
		question: "What are our office hours?",
		answer:
			"Our office is open from 9:00 AM to 5:00 PM, Monday through Friday.",
		active: false,
	},
	{
		id: 4,
		question: "Where can I find our company's privacy policy?",
		answer:
			"You can access our company's privacy policy on our website under the 'Privacy Policy' section.",
		active: false,
	},
	{
		id: 5,
		question: "What payment methods do we accept?",
		answer:
			"We accept credit cards, PayPal, and bank transfers as payment methods.",
		active: false,
	},
	{
		id: 6,
		question: "What is the capital of France?",
		answer: "The capital of France is Paris.",
		active: false,
	},
	{
		id: 7,
		question: "How can I contact customer support?",
		answer:
			"You can reach our customer support team via email at support@example.com.",
		active: false,
	},
	{
		id: 8,
		question: "What are our office hours?",
		answer:
			"Our office is open from 9:00 AM to 5:00 PM, Monday through Friday.",
		active: false,
	},
];

const Faq = () => {
	const [faqs, setFaqs] = useState(data);
	return (
		<div
			className="flex items-start lg:justify-between justify-center gap-4 w-full lg:flex-row flex-col"
			id="faqs">
			<div className="flex flex-col items-start gap-3 w-full lg:w-auto">
				<Badge variant="outline" className="py-1">
					<p className="text-primary font-normal">
						Have a question? {"We've"} got answers.
					</p>
				</Badge>
				<Title>Frequently asked questions</Title>
				<Subtitle>
					Use premium features for free for 14 days. <br /> No credit card
					required.
				</Subtitle>
			</div>
			<div className="flex flex-col gap-3 w-full lg:w-[36rem]">
				{faqs.map((faq, index) => (
					<SingleFaq
						key={index}
						{...faq}
						onClick={(id) => {
							setFaqs((prev) =>
								prev.map((faq) => {
									if (faq.id === id) {
										return {
											...faq,
											active: !faq.active,
										};
									} else {
										return {
											...faq,
											active: false,
										};
									}
								})
							);
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default Faq;

type FaqProps = {
	id: number;
	question: string;
	answer: string;
	active: boolean;
	onClick: (id: number) => void;
};

const SingleFaq = (props: FaqProps) => {
	return (
		<div
			className="flex items-start flex-col py-4 w-full cursor-pointer gap-2 border-b-2"
			id={props.id.toString()}
			onClick={() => {
				props.onClick(props.id);
			}}>
			<div className="flex items-start gap-6 justify-between w-full">
				<Title className="text-sm md:text-lg md:font-semibold">
					{props.question}
				</Title>
				<PlusIcon className="w-6 h-6 text-primary" />
			</div>
			{props.active && <Subtitle className="mt-2">{props.answer}</Subtitle>}
		</div>
	);
};
