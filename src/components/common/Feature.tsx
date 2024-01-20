import Title, { Subtitle } from "./Title";

const Feature = ({
	title,
	description,
	icon,
}: {
	title: string;
	description: string;
	icon?: React.ReactNode;
}) => {
	return (
		<div className="flex md:items-start md:justify-start gap-6 w-fit flex-col justify-center items-center">
			<div className="min-h-[60px] w-[60px] bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 rounded-full flex items-center justify-center">
				{icon}
			</div>
			<div className="w-[100%] flex flex-col items-center md:items-start gap-3 text-center md:text-left">
				<Title className="md:text-2xl font-normal">{title}</Title>
				<Subtitle className="font-light">{description}</Subtitle>
			</div>
		</div>
	);
};

export default Feature;
