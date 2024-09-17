"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export default function ProgressBar() {
	const [scrollProgress, setScrollProgress] = useState(0);

	const handleScroll = () => {
		const totalHeight = document.body.scrollHeight - window.innerHeight;
		const scrollPosition = window.scrollY;
		const scrollPercentage = (scrollPosition / totalHeight) * 100;
		setScrollProgress(scrollPercentage);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="fixed top-0 left-0 w-full h-[0.4rem] bg-transparent z-50">
			<motion.div
				className="h-full bg-purple-500"
				style={{ width: `${scrollProgress}%` }}
				initial={{ width: 0 }}
				animate={{ width: `${scrollProgress}%` }}
				transition={{ ease: "easeOut", duration: 0.3 }}
			/>
		</div>
	);
}
