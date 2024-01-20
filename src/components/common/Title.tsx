"use client";

import { cn } from "@/src/utils";

const Title = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<h1
			className={cn(
				"text-2xl sm:text-3xl md:text-4xl font-semibold capitalize",
				className
			)}>
			{children}
		</h1>
	);
};

export default Title;

export const Subtitle = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<p
			className={cn(
				"text-[15px] md:text-md leading-normal font-light w-[95%] md:w-[100%] opacity-80",
				className
			)}>
			{children}
		</p>
	);
};
