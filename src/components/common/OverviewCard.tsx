"use client";

import { CheckIcon } from "@radix-ui/react-icons";
import Title, { Subtitle } from "./Title";
import { Badge } from "../ui/badge";
import LineChartCard from "../charts/LineChartCard";

interface OverviewCardProps {
	title: string;
	subtitle: string;
	description: string;
	features: {
		text: string;
	}[];
	reverse?: boolean;
}

const OverviewCard = ({
	title,
	subtitle,
	description,
	features,
	reverse,
}: OverviewCardProps) => {
	return (
		<div
			className={`flex items-start gap-4 w-full justify-center ${
				reverse ? "lg:flex-row-reverse flex-col" : "lg:flex-row flex-col"
			}`}>
			<div className="flex flex-col items-start gap-10 flex-1">
				<div className="flex flex-col items-start gap-3">
					<Badge variant="outline" className="py-1">
						<p className="text-primary font-normal">{subtitle}</p>
					</Badge>
					<Title>{title}</Title>
					<Subtitle className="text-[15px]">{description}</Subtitle>
				</div>
				<div className="flex flex-col items-start gap-5">
					{features.map((feature, index) => {
						return (
							<div className="flex items-center gap-3" key={index}>
								<CheckIcon className="h-[20px] w-[20px]" />
								<Subtitle>{feature.text}</Subtitle>
							</div>
						);
					})}
				</div>
			</div>
			<div
				className={`flex-1 w-full flex ${
					reverse ? "items-start justify-start" : "items-end justify-end"
				}`}>
				<div className="h-[350px] bg-transparent w-[100%] lg:w-[80%] rounded-lg flex items-center justify-center">
					<LineChartCard />
				</div>
			</div>
		</div>
	);
};

export default OverviewCard;
