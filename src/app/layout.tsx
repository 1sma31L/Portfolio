import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans"; // Your actual font import
// import { GeistMono } from "geist/font/mono"; // Your actual font import
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import "./globals.css";
import NavBar from "@/components/Navbar";

// Optionally, you can configure your fonts if needed, like specifying subsets or weights.
// For example, if you're using @next/font or a similar package:

export const metadata: Metadata = {
	title: "Ismail M. Boussekine",
	description: "I am a student who happend to fall in love with the web.",
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
					disableTransitionOnChange>
					<NavBar />
					<hr className="border" />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
