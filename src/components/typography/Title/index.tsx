import { cn } from "@/utils";
import { FC } from "react";

interface indexProps {
	children: React.ReactNode;
	className?: string;
}

const Title: FC<indexProps> = ({ children, className }) => {
	return (
		<h1
			className={cn(
				`text-2xl text-center font-semibold sm:text-3xl xl:text-[40px]`,
				className
			)}
		>
			{children}
		</h1>
	);
};

export default Title;
