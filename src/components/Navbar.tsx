"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeToggler from "@/components/ThemeToggler";
import Image from "next/image";

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

function isActive(pathname: string, itemPath: any) {
	// Exact match or pathname starts with itemPath followed by a slash or end of the pathname
	const regex = new RegExp(`^${itemPath}(?:/|$)`);
	return regex.test(pathname);
}

export default function NavBar() {
	let pathname = usePathname() || "/";
	const [hoveredPath, setHoveredPath] = useState(pathname);

	useEffect(() => {
		// Reset hoveredPath to the current pathname when it changes
		setHoveredPath(pathname);
	}, [pathname]);

	return (
		<header className="w-full max-w-[1600px] mx-auto p-3 gap-2 rounded-lg text-[13px] md:text-[18px] flex justify-end items-center h-[8vh] px-4">
			<div>
				<Link href="/">
					<Image
						height={100}
						width={100}
						priority
						src="/vercel.png"
						className="w-6 dark:invert"
						alt=""
					/>
				</Link>
			</div>
			<nav className="gap-1 relative justify-end w-full z-[100] rounded-lg flex md:gap-2">
				{navItems.map((item) => {
					const isActiveClass = isActive(pathname, item.path);

					return (
						<Link
							key={item.path}
							className={`md:px-3 md:py-1 py-1 px-2 relative duration-150 ease-in rounded font-bold ${
								isActiveClass
									? "dark:text-black text-white bg-black dark:bg-white"
									: "text-zinc-600 dark:text-zinc-400 dark:hover:text-white hover:text-black"
							}`}
							data-active={isActiveClass}
							href={item.path}
							onMouseOver={() => setHoveredPath(item.path)}
							onMouseLeave={() => setHoveredPath(pathname)}>
							<span>{item.name}</span>
							{item.path === hoveredPath && (
								<motion.div
									className="absolute bottom-0 left-0 h-full bg-zinc-200 dark:bg-zinc-800 -z-10 rounded hidden md:block"
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
			<div className="ml-1">
				<ThemeToggler />
			</div>
		</header>
	);
}
