"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
function AnimatedDiv({
	children,
	className,
	id,
}: {
	children: React.ReactNode;
	className?: string;
	id?: number | string;
}) {
	const controls = useAnimation();

	useEffect(() => {
		controls.start("animate");
	}, [controls]);

	const animation = {
		initial: { opacity: 0, y: 100 },
		animate: {
			opacity: [0, 0.5, 1],
			y: [20, -5, 0],
			transition: {
				duration: 1,
				times: [0, 0.2, 1],
				ease: [0.175, 0.885, 0.32, 1.275],
			},
		},
		exit: { opacity: 0, y: -100 },
	};

	return (
		<motion.div
			key={id}
			initial="initial"
			animate={controls}
			exit="exit"
			transition={{ duration: 0.3 }}
			variants={animation}>
			<div className={className}>{children}</div>
		</motion.div>
	);
}
export default AnimatedDiv;
