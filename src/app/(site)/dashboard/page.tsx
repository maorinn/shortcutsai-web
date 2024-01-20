import Title, { Subtitle } from "@/components/common/Title";

const Dashboard = () => {
	return (
		<div className="flex flex-col items-start gap-4 w-full h-full">
			<div className="bg-gradient-to-br from-black via-slate-900 to-violet-600 w-full px-10 py-16 flex items-start gap-6 flex-col">
				<Title className="uppercase md:text-5xl">
					Welcome Back, <br /> Muhammad Salman
				</Title>
				<div className="flex items-center justify-between w-full">
					<Subtitle className="md:text-lg">
						{"Here's"} {"what's"} happening with your projects today.
					</Subtitle>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
