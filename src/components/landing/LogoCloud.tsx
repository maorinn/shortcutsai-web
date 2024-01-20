import Image from "next/image";
import { FC } from "react";
import Marquee from "react-fast-marquee";

const Images = [
	{
		name: "Nextjs",
		image: "/techstack/nextjs.svg",
		height: 50,
		width: 50,
	},
	{
		name: "Tailwindcss",
		image: "/techstack/tailwind.svg",
		height: 30,
		width: 30,
	},
	{
		name: "Typescript",
		image: "/techstack/typescript.svg",
		height: 30,
		width: 30,
	},
	{
		name: "Prisma",
		image: "/techstack/prisma.svg",
		height: 30,
		width: 30,
	},
	{
		name: "Javascript",
		image: "/techstack/javascript.svg",
		height: 30,
		width: 30,
	},
	{
		name: "Postgresql",
		image: "/techstack/postgresql.svg",
		height: 30,
		width: 30,
	},
	{
		name: "Git",
		image: "/techstack/git.svg",
		height: 30,
		width: 30,
	},
	{
		name: "React Query",
		image: "/techstack/reactquery.svg",
		height: 30,
		width: 30,
	},
	{
		name: "React",
		image: "/techstack/react.svg",
		height: 30,
		width: 30,
	},
	{
		name: "Google",
		image: "/techstack/google.svg",
		height: 30,
		width: 30,
	},
	{
		name: "Stripe",
		image: "/techstack/stripe.svg",
		height: 50,
		width: 50,
	},
	{
		name: "Resend",
		image: "/techstack/resend.png",
		height: 40,
		width: 40,
	},
];

const LogoCloud: FC = () => {
	return (
		<div className="md:max-w-2xl mt-10 w-[100%]">
			<Marquee direction="left" autoFill pauseOnHover>
				{Images.map((image, index) => (
					<div className="mx-4" key={index}>
						<Image
							src={image.image}
							alt={image.name}
							width={image.width}
							height={image.height}
							objectFit="cover"
							className="filter grayscale hover:filter-none transition-all duration-300 cursor-pointer"
						/>
					</div>
				))}
			</Marquee>
		</div>
	);
};

export default LogoCloud;
