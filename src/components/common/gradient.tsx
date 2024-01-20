import { cn } from "@/src/utils";

const Gradient = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn(
				"absolute top-0 w-[100%] h-[50px] dark:h-[70px] bg-gradient-to-b from-primary/90 to-primary/100 dark:from-primary/40 dark:to-primary/60 filter blur-[70px] dark:blur-[100px]",
				className
			)}
			style={{ transform: "scale(1.5)" }}
		/>
	);
};

export default Gradient;
