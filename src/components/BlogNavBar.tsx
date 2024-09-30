"use client";

import React, { useEffect, useState } from "react";

import { BlogNavItems } from "@/data/nav-items";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

function isActive(pathname: string, itemPath: string) {
	return pathname === itemPath;
}

export default function BlogNavBar() {
	let pathname = usePathname() || "/";
	const [hoveredPath, setHoveredPath] = useState(pathname);
	useEffect(() => {
		setHoveredPath(pathname);
	}, [pathname]);

	return (
		<nav
			className="gap-1 justify-start relative w-full z-[10] flex items-center pt-6 text-[13px] md:text-[18px] container px-4 md:px-0"
			id="pheader">
			{BlogNavItems.map((item) => {
				const isActiveClass = isActive(pathname, item.path);

				return (
					<Link
						key={item.path}
						className={`md:px-3 md:py-[0.3rem] py-1 px-2 relative duration-300 transition-all rounded-sm -z-100 ${
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
								layoutId="clickedbutton2"
								transition={{
									type: "spring",
									bounce: 0.9,
									stiffness: 150,
									damping: 12,
									duration: 0.3,
								}}
								style={{ originY: "top" }}
								className={
									"absolute inset-0 -z-10 bg-black dark:bg-white rounded-sm"
								}
							/>
						)}
					</Link>
				);
			})}
		</nav>
	);
}
