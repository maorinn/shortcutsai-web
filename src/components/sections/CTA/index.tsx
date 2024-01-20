import Subtitle from "@/components/typography/Subtitle";
import { Button } from "@/components/ui/button";

const CTA = () => {
	return (
		<div className="h-[30vh] w-full flex items-center justify-center">
			<div className="lg:w-[60%] md:w-[80%] w-[100%] h-24 bg-gradient-to-tl from-primary/60 to-primary rounded-lg flex items-center justify-center gap-4">
				<Subtitle className="text-white font-light">
					<span className="font-semibold">Need a website?</span> Get started
					Now!
				</Subtitle>
				<Button variant="secondary" size="sm" className="bg-white">
					Start free trial
				</Button>
			</div>
		</div>
	);
};

export default CTA;
