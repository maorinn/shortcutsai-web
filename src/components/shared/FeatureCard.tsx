import { cn } from "@/utils";
import Image from "next/image";

const FeatureCard = ({
	className,
	title,
	description,
	image,
	large,
}: {
	className?: string;
	title: string;
	description: string;
	image: string;
	large?: boolean;
}) => {
	return (
		<div
			className={cn(
				"row-span-1 rounded-2xl border-2 border-slate-400/10 bg-muted p-4 dark:bg-neutral-900 flex flex-col items-start gap-4 relative",
				className
			)}
		>
			<div className="w-full h-[100%] bg-white rounded-lg border-2 border-slate-500/10 relative overflow-hidden">
				{image && (
					<Image
						src={image}
						alt={title}
						layout="fill"
						objectFit={large ? "cover" : "contain"}
						objectPosition="top"
					/>
				)}
			</div>
			<div className="flex flex-col items-start gap-2">
				<p className="text-[18px] font-medium text-neutral-900 dark:text-neutral-100">
					{title}
				</p>
				<p className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
					{description}
				</p>
			</div>
		</div>
	);
};

export default FeatureCard;
