"use client";

import { UploadButton } from "@/src/config/uploadThing";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

export default function ChangeProfile() {
	const router = useRouter();

	const updateImage = async (url: string) => {
		return axios
			.post("/api/updateUser", {
				image: url,
			})
			.then((e) => {
				router.refresh();
				alert("Image updated successfully!");
			})
			.catch((e) => {
				console.error(e);
			});
	};

	return (
		<UploadButton
			appearance={{
				button: "p-2 text-sm bg-primary mb-2",
			}}
			content={{
				button({ ready }) {
					if (ready) return <div>Change Profile</div>;

					return "Changing...";
				},
				allowedContent({ ready, fileTypes, isUploading }) {
					if (isUploading) return <ClipLoader color="#fff" size={10} />;
					return `Max 4mb size allowed`;
				},
			}}
			endpoint="imageUploader"
			onClientUploadComplete={(res) => {
				updateImage(res[0].url);
			}}
			onUploadError={(error: Error) => {
				alert(`ERROR! ${error.message}`);
			}}
		/>
	);
}
