import Image from "next/image";
import { FC } from "react";
import Marquee from "react-fast-marquee";

const LogoCloud: FC = () => {
	return (
		<div className="md:max-w-7xl mt-10 w-[100%]">
			<Marquee direction="left" autoFill pauseOnHover>
				{Images.map((image, index) => (
					<div className="mx-6" key={index}>
						<Image
							src={image.image}
							alt={image.name}
							width={90}
							height={90}
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

const Images = [
	{
		name: "Adobe",
		image: "/images/companies/adobe.png",
	},
	{
		name: "Paypal",
		image: "/images/companies/paypal.png",
	},
	{
		name: "Framer",
		image: "/images/companies/framer.png",
	},
	{
		name: "Github",
		image: "/images/companies/github.png",
	},
	{
		name: "Atlassian",
		image: "/images/companies/atlassian.png",
	},
];
