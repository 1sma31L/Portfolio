"use client";

import { useEffect, useState } from "react";

import Command from "@/components/Command";
import Link from "next/link";
import ThemeToggler from "@/components/ThemeToggler";
import UnderDevBar from "./UnderDevBar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
	{
		path: "/",
		name: "Home",
	},
	{
		path: "/blog",
		name: "Blog",
	},
];

function isActive(pathname: string, itemPath: string) {
	if (itemPath === "/") {
		return (
			pathname === "/" ||
			pathname.startsWith("/contact") ||
			pathname.startsWith("/projects")
		);
	}

	if (itemPath === "/blog") {
		return pathname.startsWith("/blog");
	}
}

export default function NavBar() {
	let pathname = usePathname() || "/";
	const [hoveredPath, setHoveredPath] = useState(pathname);
	useEffect(() => {
		setHoveredPath(pathname);
	}, [pathname]);

	return (
		<>
			<UnderDevBar />
			<header className="backdrop-blur-sm md:backdrop-blur-md sticky top-0 left-0 w-full z-[20] h-14 shadow-sm bg-white/75 dark:bg-black/75">
				<div className="flex justify-between items-center container mx-auto py-3 px-4 md:px-0 lg:px-0 gap-2 rounded-lg text-[14px] sm:text-[16px] md:text-[18px]">
					<nav className="gap-3 justify-start w-full flex md:gap-4">
						{navItems.map((item) => {
							const isActiveClass = isActive(pathname, item.path);
							return (
								<Link
									key={item.path}
									className={`md:px-3 md:py-[0.3rem] py-1 px-2 relative duration-300 rounded-sm transition-all font-bold -z-100 ${
										isActiveClass
											? "dark:text-black text-white"
											: "text-zinc-600 dark:text-zinc-400 dark:hover:text-white md:hover:text-black  "
									}`}
									data-active={isActiveClass}
									href={item.path}
									onMouseOver={() => setHoveredPath(item.path)}
									onMouseLeave={() => setHoveredPath(pathname)}>
									<span>{item.name}</span>
									{isActive(pathname, item.path) && (
										<motion.div
											layoutId="nav-active"
											transition={{
												type: "spring",
												bounce: 0.9,
												stiffness: 150,
												damping: 12,
												duration: 0.3,
											}}
											style={{ originY: "top" }}
											className={
												"absolute inset-0 -z-10 bg-black dark:bg-white rounded-sm "
											}
										/>
									)}
								</Link>
							);
						})}
					</nav>
					<div className="ml-1">
						<Command />
					</div>
					<div className="ml-1">
						<ThemeToggler />
					</div>
				</div>
			</header>
		</>
	);
}
