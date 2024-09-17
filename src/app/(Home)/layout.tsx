import AnimatedDiv from "@/components/AnimatedDiv";
import PortfolioNavBar from "@/components/HomeNavBar";
export default function PortfolioLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="w-full bg-zinc-50 dark:bg-zinc-950">
			<PortfolioNavBar />
			{children}
		</div>
	);
}
