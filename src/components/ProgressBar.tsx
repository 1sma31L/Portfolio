"use client";
import { useEffect, useState } from "react";

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
		<div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
			<div
				className="h-full bg-black dark:bg-white"
				style={{ width: `${scrollProgress}%` }}></div>
		</div>
	);
}
