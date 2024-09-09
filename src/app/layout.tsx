import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/Footer";
import "./globals.css";
import NavBar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { KeyboardShortcutCtrlI } from "@/components/KeyShortcut";

export const metadata: Metadata = {
	title: {
		default: "Ismail M. Boussekine",
		template: "%s | Ismail M. Boussekine",
	},
	description:
		"My personal website, Blog, and portfolio. Here you can find my projects, blog posts, and more.",
	twitter: {
		card: "summary_large_image",
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<SpeedInsights />
				<Analytics />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<KeyboardShortcutCtrlI />
					<NavBar />
					<hr className="" />
					{children}
					<hr className="w-full" />
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
