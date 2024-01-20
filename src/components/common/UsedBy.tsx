import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Subtitle } from "./Title";

const list = [
	{
		name: "Amazon",
		logo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=3280&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		name: "Spotify",
		logo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=3280&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		name: "Shopify",
		logo: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&q=80&w=1856&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

const UsedBy = () => {
	return (
		<div className="flex items-center justify-center gap-3">
			<div className="flex items-center justify-center">
				{list.map((item, index) => {
					return (
						<Avatar key={index} className="ml-[-10px] border-2 border-black">
							<AvatarImage src={item.logo} />
							<AvatarFallback>{item.name}</AvatarFallback>
						</Avatar>
					);
				})}
			</div>
			<Subtitle>
				Used by <span className="font-bold text-primary">1000+</span> users
			</Subtitle>
		</div>
	);
};

export default UsedBy;
