import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import { getCurrentUser } from "@/lib/session";
import { getUserSubscription } from "@/lib/subscription";

export default async function Home() {
	const user = await getCurrentUser();
	const userSubscription = user ? await getUserSubscription(user?.id!) : null;
	return (
		<main className="relative">
			<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
				<div className="absolute left-0 right-0 top-20 -z-10 m-auto h-[60vh] w-[50vw] rounded-full bg-gradient-to-tr from-violet-500 to-orange-300 opacity-20 blur-[120px]"></div>
			</div>
			<section className="flex flex-col items-center justify-center w-[95%] lg:max-w-7xl mx-auto relative">
				<Hero user={user} />
				<Features />
				<Pricing user={user} userSubscription={userSubscription} />
				<Testimonials />
				<CTA />
			</section>
			<Footer />
		</main>
	);
}
