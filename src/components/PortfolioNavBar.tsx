"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
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
		path: "/contact",
		name: "Contact",
	},
];

function isActive(pathname: string, itemPath: string) {
	const regex = new RegExp(`^${itemPath}(?:/|$)`);
	return regex.test(pathname);
}

function PortfolioNavBar() {
	let pathname = usePathname() || "/";
	const [hoveredPath, setHoveredPath] = useState(pathname);
	useEffect(() => {
		setHoveredPath(pathname);
	}, [pathname]);

	return (
		<nav
			className="gap-2 relative w-full z-[100] flex justify-center items-center mt-6 md:gap-3     
		
		text-[13px] md:text-[18px]
		
		">
			{navItems.map((item) => {
				const isActiveClass = isActive(pathname, item.path);

				return (
					<Link
						key={item.path}
						className={`md:px-3 md:py-[0.3rem] py-1 px-2 relative duration-150 ease-in rounded-sm font-bold -z-100 ${
							isActiveClass
								? "dark:text-black text-white"
								: "text-zinc-600 dark:text-zinc-400 dark:hover:text-white md:hover:text-black md:hover:bg-zinc-200 md:dark:hover:bg-zinc-800 "
						}`}
						data-active={isActiveClass}
						href={item.path}
						onMouseOver={() => setHoveredPath(item.path)}
						onMouseLeave={() => setHoveredPath(pathname)}>
						<span>{item.name}</span>
						{isActive(pathname, item.path) && (
							<motion.div
								layoutId="clickedbutton2"
								transition={{
									type: "spring",
									bounce: 0.9,
									stiffness: 150,
									damping: 12,
									duration: 0.3,
								}}
								className={
									"absolute inset-0 -z-10 bg-black dark:bg-white rounded-sm "
								}
							/>
						)}
					</Link>
				);
			})}
		</nav>
	);
}

export default PortfolioNavBar;
