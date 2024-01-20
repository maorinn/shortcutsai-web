import { Button } from "@/components/ui/button";
import { UserSubscriptionPlan } from "@/types";
import {
	CheckIcon,
	MagicWandIcon,
	PaperPlaneIcon,
} from "@radix-ui/react-icons";
import axios from "axios";
import { User } from "next-auth";
import { useRouter } from "next/navigation";

interface Plan {
	currency: string;
	name: string;
	price: number;
	description: string;
	planType: string;
	recommended: boolean;
	features: string[];
}

interface PriceCardProps {
	plan: Plan;
	user?: User;
	userSubscription: UserSubscriptionPlan | null;
}

const PriceCard = ({ plan, user, userSubscription }: PriceCardProps) => {
	const router = useRouter();

	const handleSubscription = async (priceId: string) => {
		if (!user) return router.push("/sign-in");
		try {
			const response = await axios.get(`/api/stripe`, {
				headers: {
					priceId,
				},
			});
			window.location.href = response.data.url;
		} catch (err) {
			console.log(err);
		}
	};
	const handleLemonCheckout = async () => {
		if (!user) return router.push("/sign-in");
		try {
			const response = (await axios.post("/api/lemon")) as {
				data: { url: string };
			};

			window.location.href = response.data.url;
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div
			className={`flex flex-col items-start justify-start p-6 rounded-2xl ${plan.recommended
				? "bg-gradient-to-br from-primary/80 to-primary text-white"
				: "border-2 border-slate-400/10 bg-white"
				} w-[95%] sm:w-[350px] gap-1`}
		>
			<h3 className="text-lg font-medium">{plan.name}</h3>
			<h2 className="text-4xl font-semibold">
				<span className="text-[16px] font-medium">{plan.currency}</span>
				{plan.price}
				<span className="text-[14px] font-normal">/{plan.planType}</span>
			</h2>
			<h3 className="text-md font-light">{plan.description}</h3>

			<div className="flex items-start gap-3 flex-col mt-4">
				<p className="text-md font-normal">Includes:</p>
				{plan.features.map((feature, index) => (
					<div className="flex items-center gap-2 w-full" key={index}>
						<CheckIcon
							className={`w-5 h-5 ${plan.recommended ? "text-white" : "text-black"
								}`}
						/>
						<p className="text-sm font-normal">{feature}</p>
					</div>
				))}
			</div>

			<Button
				className={`w-full mt-6 ${plan.recommended ? "bg-white text-zinc-900 hover:bg-slate-200" : ""
					}`}
				onClick={() => {
					handleSubscription(plan.name);
				}}
			>
				{plan.recommended && <MagicWandIcon className="mr-2" />}
				{!userSubscription?.isPro ? "Get Started" : "Upgrade"}
			</Button>
		</div>
	);
};

export default PriceCard;
