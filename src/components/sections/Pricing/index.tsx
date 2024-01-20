import Title from "@/components/typography/Title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Subtitle from "@/components/typography/Subtitle";
import PriceCard from "@/components/shared/PriceCard";
import Wavy from "@/components/icons/Wavy";

const Pricing = () => {
	return (
		<div
			className="flex flex-col items-center justify-center gap-10 w-full py-10 sm:mb-20"
			id="pricing"
		>
			<div className="flex flex-col items-center justify-center gap-5">
				<Title className="relative">
					Simple, transparent{" "}
					<span className="text-primary relative">pricing.</span>
					<Wavy className="absolute -bottom-7 right-0" />
				</Title>
				<Subtitle>
					No hidden fees. No credit card required. <br /> Cancel anytime.
				</Subtitle>
			</div>
			<div className="flex flex-col items-center justify-center w-full">
				<Tabs
					defaultValue="yearly"
					className="flex items-center flex-col w-full"
				>
					{/* <TabsList className="py-6 mb-10 w-[300px]">
						<TabsTrigger value="yearly" className="w-full py-2">
							Bill Yearly -20%
						</TabsTrigger>
						<TabsTrigger value="monthly" className="w-full py-2">
							Bill Monthly
						</TabsTrigger>
					</TabsList> */}
					<TabsContent
						value="yearly"
						className="flex items-start gap-6 w-full justify-center flex-wrap"
					>
						{yearlyPlans.map((plan, index) => (
							<PriceCard plan={plan} key={index} />
						))}
					</TabsContent>
					<TabsContent
						value="monthly"
						className="flex items-start gap-6 w-full justify-center flex-wrap"
					>
						{monthlyPlans.map((plan, index) => (
							<PriceCard plan={plan} key={index} />
						))}
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default Pricing;

const yearlyPlans = [
	{
		currency: "$",
		name: "Starter",
		price: 29,
		description: "Perfect for individuals and small teams getting started.",
		planType: "mo",
		recommended: false,
		features: [
			"Up to 5 projects",
			"Basic support",
			"Limited storage",
			"Essential tools",
			"Regular updates",
			"Community forum access",
		],
	},
	{
		currency: "$",
		name: "Premium",
		price: 99,
		description:
			"Ideal for businesses with growing needs and professional support.",
		planType: "mo",
		recommended: true,
		features: [
			"Unlimited projects",
			"Priority support",
			"Ample storage",
			"Advanced tools",
			"Frequent updates",
			"Dedicated account manager",
		],
	},
	{
		currency: "$",
		name: "Enterprise",
		price: 499,
		description:
			"Tailored solutions for large creative organizations with premium support.",
		planType: "mo",
		recommended: false,
		features: [
			"Unlimited projects",
			"24/7 premium support",
			"Enterprise-grade storage",
			"Full suite of advanced tools",
			"Continuous updates",
			"Customized solutions",
		],
	},
];

const monthlyPlans = [
	{
		currency: "$",
		name: "Starter",
		price: 39,
		description: "Perfect for individuals and small teams getting started.",
		planType: "mo",
		recommended: false,
		features: [
			"Up to 5 projects",
			"Basic support",
			"Limited storage",
			"Essential tools",
			"Regular updates",
			"Community forum access",
		],
	},
	{
		currency: "$",
		name: "Premium",
		price: 129,
		description:
			"Ideal for businesses with growing needs and professional support.",
		planType: "mo",
		recommended: true,
		features: [
			"Unlimited projects",
			"Priority support",
			"Ample storage",
			"Advanced tools",
			"Frequent updates",
			"Dedicated account manager",
		],
	},
	{
		currency: "$",
		name: "Enterprise",
		price: 599,
		description:
			"Tailored solutions for large creative organizations with premium support.",
		planType: "mo",
		recommended: false,
		features: [
			"Unlimited projects",
			"24/7 premium support",
			"Enterprise-grade storage",
			"Full suite of advanced tools",
			"Continuous updates",
			"Customized solutions",
		],
	},
];
