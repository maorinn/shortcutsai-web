import "./globals.css";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import { Session } from "../providers/SessionProvider";
import { siteConfig } from "../config/site";
import dynamic from "next/dynamic";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { PHProvider } from "../providers/PosthogProvider";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		"Next.js",
		"React",
		"Tailwind CSS",
		"Server Components",
		"Radix UI",
		"SaaS",
		"Boilerplate",
		"Template",
		"Saas boilerplate",
		"Saas starter kit",
	],
	authors: [
		{
			name: "salmandotweb",
			url: "https://www.salmandotweb.me",
		},
	],
	creator: "salmandotweb",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [`${siteConfig.url}/og.jpg`],
		creator: "@salmandotweb",
	},
	icons: {
		icon: "/brand/favicon.svg",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: `${siteConfig.url}/site.webmanifest`,
};

const font = Bricolage_Grotesque({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const CrispWithNoSSR = dynamic(() => import("../config/crisp"));
	return (
		<html lang="en">
			<CrispWithNoSSR />
			<PHProvider>
				<body className={font.className}>
					<NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
					<Session>
						<ThemeProvider
							attribute="class"
							defaultTheme="system"
							enableSystem
							disableTransitionOnChange
						>
							{children}
						</ThemeProvider>
					</Session>
				</body>
			</PHProvider>
		</html>
	);
}
