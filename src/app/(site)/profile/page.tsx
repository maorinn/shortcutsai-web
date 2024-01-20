import Title, { Subtitle } from "@/src/components/common/Title";
import ChangeProfile from "@/src/components/common/UserImage";
import { Badge } from "@/src/components/ui/badge";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { getCurrentUser } from "@/src/lib/session";
import { getUserSubscription } from "@/src/lib/subscription";
import { User } from "next-auth";
import Image from "next/image";

const Profile = async () => {
	const user = (await getCurrentUser()) as User;
	const subscription = (await getUserSubscription(user.id)) as {
		isPro: boolean;
	};

	return (
		<div className="p-10 flex flex-col items-start gap-6 w-full h-full">
			<div className="flex items-start justify-between w-full">
				<div className="flex flex-col items-start gap-4">
					<Title className="flex items-center gap-3">
						Profile
						<Badge variant="default" className="rounded-sm">
							{subscription.isPro ? "Pro" : "Free"}
						</Badge>
					</Title>
					<Subtitle>
						Your profile information is only visible to you and your
						organization.
					</Subtitle>
				</div>
				{user?.image && (
					<Image
						src={user.image}
						width={110}
						height={110}
						alt=""
						className="rounded-full"
					/>
				)}
			</div>
			<div className="flex justify-between items-center gap-4 flex-wrap w-full">
				<div className="grid w-full max-w-sm items-center gap-3">
					<Label htmlFor="email">Email</Label>
					<Input
						type="email"
						id="email"
						placeholder="Email"
						value={user.email!}
					/>
				</div>
				<ChangeProfile />
			</div>
		</div>
	);
};

export default Profile;
