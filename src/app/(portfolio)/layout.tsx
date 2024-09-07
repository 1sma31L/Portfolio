import PortfolioNavBar from "@/components/PortfolioNavBar";
export default function PortfolioLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<PortfolioNavBar />
			{children}
		</div>
	);
}
