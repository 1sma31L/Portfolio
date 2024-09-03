"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import ThemeToggler from "@/components/ThemeToggler";
const navItems = [
	{
		path: "/",
		name: "About",
	},
	{
		path: "/projects",
		name: "Projects",
	},
	{
		path: "/blog",
		name: "Blog",
	},
	// {
	// 	path: "/intrests",
	// 	name: "Intrests",
	// },
	{
		path: "/contact",
		name: "Contact",
	},
];

export default function NavBar() {
	let pathname = usePathname() || "/";

	const [hoveredPath, setHoveredPath] = useState(pathname);
	return (
		<header
			className={`container mx-auto p-3 md:px-0 rounded-lg  text-[13px] md:text-[18px] flex justify-between items-center`}>
			<nav className=" gap-1 relative justify-start w-full z-[100]  rounded-lg flex">
				{navItems.map((item, index) => {
					const isActive = item.path === pathname;

					return (
						<Link
							key={item.path}
							className={`md:px-4 md:py-2 py-1 px-2  relative duration-150 ease-in rounded-sm ${
								GeistSans.className
							} ${
								isActive
									? "dark:text-black text-white bg-black dark:bg-white"
									: "text-zinc-600 dark:text-zinc-400 dark:hover:text-white hover:text-black"
							}`}
							data-active={isActive}
							href={item.path}
							onMouseOver={() => setHoveredPath(item.path)}
							onMouseLeave={() => setHoveredPath(pathname)}>
							<span>{item.name}</span>
							{item.path === hoveredPath && (
								<motion.div
									className="absolute bottom-0 left-0 h-full bg-zinc-200  dark:bg-zinc-800 -z-10 rounded-md hidden md:block"
									layoutId="navbar"
									aria-hidden="true"
									style={{
										width: "100%",
									}}
									transition={{
										type: "just",
										bounce: 0.1,
										stiffness: 130,
										damping: 9,
										duration: 0.3,
									}}
								/>
							)}
						</Link>
					);
				})}
			</nav>

			<ThemeToggler />
		</header>
	);
}
