"use client";

import React, { useEffect, useState } from "react";

import { IoTriangle } from "react-icons/io5";

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup on component unmount
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button
			onClick={scrollToTop}
			className={`
          fixed bottom-5 md:bottom-4 right-5
          bg-white dark:bg-black
          hover:bg-black hover:text-white
          dark:hover:bg-white dark:hover:text-black
          p-3 rounded-full
          shadow-lg
          z-[1080]
          flex items-center justify-center
          transition-all duration-300
          focus:outline-none ${isVisible ? "opacity-100" : "opacity-0"}
        `}>
			<IoTriangle className="text-sm" />
		</button>
	);
};

export default ScrollToTopButton;
