import Wavy from "@/components/icons/Wavy";
import FeatureCard from "@/components/shared/FeatureCard";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";

const Features = () => {
	return (
		<div
			className="flex items-center justify-start gap-12 flex-col w-full min-h-[92vh]"
			id="features"
		>
			<div className="flex flex-col items-center justify-center gap-5">
				<Title className="relative">
					Explore Key <span className="text-primary relative">Features</span>
					<Wavy className="absolute -bottom-7 right-0" />
				</Title>
				<Subtitle>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
					voluptas.
				</Subtitle>
			</div>
			<div className="grid auto-rows-[250px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
				{features.map((feature, index) => (
					<FeatureCard
						key={index}
						title={feature.title}
						description={feature.description}
						image={feature.image}
						large={feature.large}
						className={
							feature.large
								? "lg:col-span-2 col-span-1 lg:min-h-[400px] flex-col-reverse justify-end"
								: ""
						}
					/>
				))}
			</div>
		</div>
	);
};

export default Features;

const features = [
	{
		title: "Secure Payments",
		description: "Lock your account with a secure password.",
		image: "/images/features/chart.png",
	},
	{
		title: "Worldwide Delivery",
		description: "We deliver to over 100 countries around the world.",
		image: "/images/features/lineChart.png",
	},
	{
		title: "24/7 Support",
		description: "Our support team is always available to help.",
		image: "/images/features/signup.png",
	},
	{
		title: "Easy Returns",
		description: "We offer free returns within 30 days of purchase.",
		image: "/images/features/signin.png",
	},
	{
		title: "Original Products",
		description: "We guarantee you only authentic products.",
		large: true,
		image: "/images/features/main1.png",
	},
	{
		title: "Cash On Delivery",
		description: "Pay cash on delivery. No credit card required.",
		large: true,
		image: "/images/features/main2.png",
	},
];
