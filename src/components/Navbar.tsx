"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeToggler from "@/components/ThemeToggler";
import Image from "next/image";
import { TiDelete } from "react-icons/ti";

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
			{!clicked && (
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
			)}
			<header className="bg-white dark:bg-black">
				<div
					className="flex justify-between items-center container mx-auto py-3 px-4 md:px-0 lg:px-0 gap-2 rounded-lg text-[14px] sm:text-[16px] md:text-[18px]"
					id="header">
					{/* <div>
					<Link href="/">
						<Image
							height={100}
							width={100}
							priority
							src="/icons/vercel.webp"
							className="w-6 dark:invert"
							alt=""
						/>
					</Link>
				</div> */}
					<nav className="gap-3 relative justify-start w-full z-[100] flex md:gap-4">
						{navItems.map((item) => {
							const isActiveClass = isActive(pathname, item.path);

							return (
								<Link
									key={item.path}
									className={`md:px-3 md:py-[0.3rem] py-1 px-2 relative duration-75 rounded-sm font-bold -z-100 ${
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
											layoutId="clickedbutton1"
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
					<div className="ml-1">
						<ThemeToggler />
					</div>
				</div>
			</header>
		</>
	);
}
