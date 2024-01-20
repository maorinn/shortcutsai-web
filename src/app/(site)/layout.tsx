import Sidebar from "@/src/components/layout/Sidebar";

const LandingLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex items-start h-screen w-full py-6 pr-4">
			<div className="h-full w-[250px]">
				<Sidebar />
			</div>
			<div className="h-full w-[100%] border rounded-lg bg-secondary dark:bg-zinc-900 overflow-hidden">
				{children}
			</div>
		</main>
	);
};
export default LandingLayout;
