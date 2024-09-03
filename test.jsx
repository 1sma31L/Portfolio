import type React from "react";
import { type Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Head } from "@/components/head";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { Toaster as ToasterProvider } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";
import "./globals.css";

const metadata: Metadata = {
	title: "Portfolio | Emanuel Peire",
	description: "My personal portfolio: showcasing my work and skills.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode,
}) {
	return (
		<html
			lang="en"
			className={cn(
				"min-h-screen bg-background font-sans antialiased overflow-y-scroll",
				GeistSans.variable,
				GeistMono.variable
			)}
			suppressHydrationWarning>
			<Head metadata={metadata} />
			<body className="w-full">
				<ViewTransitions>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange>
						<TooltipProvider>
							<main className="flex flex-col items-center justify-center min-h-screen pt-24 pb-8 px-4">
								<Header />
								{children}
								<Footer />
							</main>
						</TooltipProvider>
						<Toaster />
						<ToasterProvider />
					</ThemeProvider>
					<Analytics />
					<SpeedInsights />
				</ViewTransitions>
			</body>
		</html>
	);
}
