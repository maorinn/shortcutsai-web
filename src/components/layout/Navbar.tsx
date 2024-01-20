import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { ModeToggle } from "../common/ThemeToggle";
import Link from "next/link";
import ProfileDropdown from "../common/Profile";
import { User } from "next-auth";
import { Button } from "../ui/button";

type link = {
	label: string;
	href: string;
};

const links: link[] = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "How it works",
		href: "/#how-it-works",
	},
	{
		label: "Pricing",
		href: "/#pricing",
	},
	{
		label: "FAQs",
		href: "/#faqs",
	},
];

const Navbar = ({ user }: { user?: User }) => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="flex items-center justify-between py-6 px-6 md:px-14 xl:px-24 w-full z-50">
			<div className="flex items-center justify-start">
				<a href="/" className="font-bold md:text-2xl">
					Indiespace.
				</a>
			</div>
			<div className="items-center justify-end md:flex hidden border rounded-lg border-primary/50 gap-8 px-10 py-3 bg-primary/10">
				{links.map((link) => (
					<Link
						key={link.label}
						href={link.href}
						className="text-sm font-normal text-gray-600 hover:text-neutral-400 dark:hover:text-neutral-300 dark:text-neutral-200">
						{link.label}
					</Link>
				))}
			</div>
			<div className="md:flex hidden items-center justify-center gap-6">
				{user ? (
					<ProfileDropdown user={user} />
				) : (
					<Button>
						<Link href="/auth/signin">Sign in</Link>
					</Button>
				)}
				<ModeToggle />
			</div>
			<div className="md:hidden flex flex-1 justify-end items-center gap-4">
				<HamburgerMenuIcon onClick={() => setToggle(!toggle)} />
				{user ? (
					<ProfileDropdown user={user} />
				) : (
					<Button>
						<Link href="/auth/signin">Sign in</Link>
					</Button>
				)}
				<ModeToggle />
				<div
					className={`${
						!toggle ? "hidden" : "flex"
					} p-6 bg-slate-700 absolute top-[60px] right-[40px] mx-4 my-2 min-w-[180px] rounded-lg sidebar`}>
					<ul className="list-none flex justify-start items-start flex-1 flex-col">
						{links.map((nav, index) => (
							<li
								key={nav.label}
								className={`font-poppins font-medium cursor-pointer text-[16px]
									"text-dimWhite"
								 ${index === links.length - 1 ? "mb-0" : "mb-4"}`}>
								<a href={nav.href}>{nav.label}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
