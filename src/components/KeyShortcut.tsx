"use client";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";

const KeyboardShortcutCtrlI: React.FC = () => {
	const { resolvedTheme, setTheme } = useTheme();
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			// Detecting Ctrl+I
			if (event.ctrlKey && event.key.toLowerCase() === "i") {
				event.preventDefault(); // Prevent default behavior if needed
				setTheme(resolvedTheme === "light" ? "dark" : "light");
			}
		};

		// Add event listener for keydown
		window.addEventListener("keydown", handleKeyDown);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [resolvedTheme]);

	return null;
};

export { KeyboardShortcutCtrlI };
