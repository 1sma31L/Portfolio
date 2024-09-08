import PortfolioNavBar from "@/components/PortfolioNavBar";
import AnimatedDiv from "@/components/AnimatedDiv";
export default function PortfolioLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<AnimatedDiv id={4}>
				<PortfolioNavBar />
			</AnimatedDiv>
			{children}
		</div>
	);
}
