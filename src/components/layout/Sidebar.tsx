import {
	ArchiveIcon,
	CrumpledPaperIcon,
	DashboardIcon,
	EnvelopeClosedIcon,
	GearIcon,
	LightningBoltIcon,
	PersonIcon,
} from "@radix-ui/react-icons";
import Title, { Subtitle } from "../common/Title";
import Link from "next/link";

const TopLinks = [
	{
		title: "Dashboard",
		href: "/dashboard",
		icon: <DashboardIcon />,
	},
	{
		title: "Projects",
		href: "/projects",
		icon: <ArchiveIcon />,
	},
	{
		title: "Messages",
		href: "/messages",
		icon: <EnvelopeClosedIcon />,
	},
	{
		title: "Payments",
		href: "/payments",
		icon: <CrumpledPaperIcon />,
	},
	{
		title: "Analytics",
		href: "/analytics",
		icon: <LightningBoltIcon />,
	},
];

const BottomLinks = [
	{
		title: "Profile",
		href: "/profile",
		icon: <PersonIcon />,
	},
	{
		title: "Settings",
		href: "/settings",
		icon: <GearIcon />,
	},
];

const Sidebar = () => {
	return (
		<div className="flex flex-col py-3 px-6 h-full w-full justify-between items-start">
			<div className="flex flex-col items-start gap-12 h-full">
				<Link href="/">
					<Title className="text-xl md:text-2xl">Indiespace.</Title>
				</Link>
				<div className="flex flex-col items-start gap-6">
					{TopLinks.map((link, index) => (
						<Link href={link.href} key={index}>
							<div
								key={index}
								className="flex items-center gap-3 cursor-pointer hover:underline">
								<div>{link.icon}</div>
								<Subtitle className="md:text-lg">{link.title}</Subtitle>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className="flex flex-col items-start gap-6">
				{BottomLinks.map((link, index) => (
					<Link href={link.href} key={index}>
						<div className="flex items-center gap-3 cursor-pointer hover:underline">
							<div>{link.icon}</div>
							<Subtitle className="md:text-lg">{link.title}</Subtitle>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
