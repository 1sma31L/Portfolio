"use client";

import { useEffect, useState } from "react";

import Command from "@/components/Command";
import Link from "next/link";
import ThemeToggler from "@/components/ThemeToggler";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
	{
		path: "/",
		name: "Portfolio",
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
			pathname.startsWith("/projects") ||
			pathname.startsWith("/portfolio")
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

	const [clicked, setClicked] = useState(true);
	useEffect(() => {
		const saved = localStorage.getItem("clicked");
		if (!saved) {
			setClicked(false);
		}
	}, []);
	const handleClick = () => {
		setClicked(true);
		localStorage.setItem("clicked", "true");
	};
	return (
		<>
			{/* {!clicked && (
				<div className="bg-black">
					<div className="w-full max-w-[1600px] mx-auto  flex justify-between md:justify-around items-center text-[9px] sm:text-[11px] md:text-sm text-white py-3 px-4 gap-4">
						<div className="hidden md:block"></div>
						<p className="text-left md:text-center">
							Note: This website is currently under development, If you find any
							bug please{" "}
							<Link href="/contact" className="hover:underline font-bold">
								contact me
							</Link>{" "}
							and report it or raise an issue on{" "}
							<Link
								target="_blank"
								href="https://github.com/1sma31L/Portfolio/issues"
								className="hover:underline font-bold">
								GitHub
							</Link>
							. Thank you!
						</p>
						<button onClick={handleClick} className="text-sm md:text-lg">
							<TiDelete className="opacity-75 hover:opacity-100 duration-150" />
						</button>
					</div>
					<div className="border-b-2"></div>
				</div>
			)} */}
			<header className="backdrop-blur-sm md:backdrop-blur-md sticky top-0 left-0 w-full z-[20] shadow-sm h-[7.5vh]">
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
