/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
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
			className={`w-full max-w-[1600px] mx-auto p-3  gap-2 rounded-lg text-[13px] md:text-[18px] flex justify-end items-center h-[8vh]`}>
			<div>
				<h1 className="italic font-serif text-lg">i.</h1>
			</div>
			<nav className=" gap-1 relative justify-end w-full z-[100]  rounded-lg flex md:gap-2">
				{navItems.map((item: any, index) => {
					const isActive = item.path === pathname;

					return (
						<Link
							key={item.path}
							className={`md:px-3 md:py-1 py-1 px-2  relative duration-150 ease-in rounded font-bold ${
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
									className="absolute bottom-0 left-0 h-full bg-zinc-200  dark:bg-zinc-800 -z-10 rounded hidden md:block"
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
				<div className="ml-2">
					<ThemeToggler />
				</div>
			</nav>
		</header>
	);
}
