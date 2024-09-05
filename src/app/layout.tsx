import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import "./globals.css";
import NavBar from "@/components/Navbar";
export const metadata: Metadata = {
	title: "Ismail M. Boussekine",
	description: "My personal website, Blog, and portfolio.",
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
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<NavBar />
					<hr className="border" />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
