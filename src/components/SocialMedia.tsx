// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import SocialMediaAccs from "@/data/social-media";
// import Link from "next/link";

// const SocialMediaLinks = () => {
// 	const [hoveredItem, setHoveredItem] = useState<string | null>(null);

// 	return (
// 		<div className="flex flex-row gap-2 flex-wrap mt-8">
// 			{SocialMediaAccs.map((item, index) => (
// 				<Link
// 					href={item.url}
// 					key={item.name}
// 					className="relative border border-black dark:border-white flex flex-row justify-between items-center gap-2 px-2 py-2 shadow-md"
// 					onMouseOver={() => setHoveredItem(item.name)}
// 					onMouseLeave={() => setHoveredItem(null)}
// 				>
// 					<p className="text-lg">{item.icon}</p>
// 					<p className={`text-sm hidden sm:block`}>
// 						{item.name}
// 					</p>
// 					{item.name === hoveredItem && (
// 						<motion.div
// 							className="absolute bottom-0 left-0 h-full bg-zinc-300/75 dark:bg-zinc-700/75 -z-10"
// 							layoutId="social-media"
// 							aria-hidden="true"
// 							initial={{ opacity: 0 }}
// 							animate={{ opacity: 1 }}
// 							exit={{ opacity: 0 }}
// 							transition={{
// 								type: "just",
// 								bounce: 0.1,
// 								stiffness: 130,
// 								damping: 9,
// 								duration: 0.3,
// 							}}
// 							style={{
// 								width: "100%",
// 							}}
// 						/>
// 					)}
// 				</Link>
// 			))}
// 		</div>
// 	);
// };

// export default SocialMediaLinks;
import React from "react";

function SocialMedia() {
	return <div>SocialMedia</div>;
}

export default SocialMedia;
