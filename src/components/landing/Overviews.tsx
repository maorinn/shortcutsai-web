import OverviewCard from "../common/OverviewCard";

const Overviews = () => {
	return (
		<div className="flex items-center justify-center gap-4 md:gap-32 flex-col m-auto w-full">
			<OverviewCard
				subtitle="Enhanced Financial Insights"
				title="Gain a deeper understanding of your business finances"
				description="Our tool provides comprehensive financial analysis, helping you make informed decisions. Get a clearer picture of your financial health."
				features={[
					{
						text: "Detailed financial data and insights at your fingertips.",
					},
					{
						text: "Real-time tracking of expenses and revenue.",
					},
					{
						text: "Customized reports to suit your business needs.",
					},
				]}
			/>
			<OverviewCard
				subtitle="Enhanced Financial Insights"
				title="Gain a deeper understanding of your business finances"
				description="Our tool provides comprehensive financial analysis, helping you make informed decisions. Get a clearer picture of your financial health."
				reverse
				features={[
					{
						text: "Detailed financial data and insights at your fingertips.",
					},
					{
						text: "Real-time tracking of expenses and revenue.",
					},
					{
						text: "Customized reports to suit your business needs.",
					},
				]}
			/>
		</div>
	);
};

export default Overviews;
