"use client";

import AnimatedDiv from "@/components/AnimatedDiv";
import BlogNavBar from "@/components/BlogNavBar";
import { usePathname } from "next/navigation";
export default function PortfolioLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	let pathName = usePathname();
	return (
		<div className="w-full bg-zinc-50 dark:bg-zinc-950">
			{pathName.split("/")[1] === "blog" &&
				!["post", "tag"].includes(pathName.split("/")[2]) && (
					<AnimatedDiv id={189}>
						<BlogNavBar />
					</AnimatedDiv>
				)}
			{children}
		</div>
	);
}
