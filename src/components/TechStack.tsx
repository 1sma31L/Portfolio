import React from "react";
import { TItem } from "@/types/types";

function TechStack({ item }: { item: TItem }) {
	const colorVariants = {
		Red: "hover:text-red-500 hover:bg-red-500/[0.05]",
		Green: "hover:text-green-500 hover:bg-green-500/[0.05]",
		Blue: "hover:text-blue-500 hover:bg-blue-500/[0.05]",
		Yellow: "hover:text-yellow-500 hover:bg-yellow-500/[0.05]",
		Purple: "hover:text-purple-500 hover:bg-purple-500/[0.05]",
		Gray: "hover:text-gray-500 hover:bg-gray-500/[0.05]",
		Zinc: "hover:text-zinc-500 hover:bg-zinc-500/[0.05]",
		Orange: "hover:text-orange-500 hover:bg-orange-500/[0.05]",
		Cyan: "hover:text-cyan-600 hover:bg-cyan-600/[0.05]",
	};
	return (
		<div
			className={`flex flex-col p-4  border hover:border-zinc-300 aspect-square dark:hover:border-zinc-600 transition-colors duration-200 justify-center items-center gap-4 cursor-default bg-white dark:bg-black ${
				colorVariants[item.color]
			}`}>
			<p className="text-3xl md:text-4xl">{item.icon}</p>
			<p className="text-sm md:text-md">{item.name}</p>
		</div>
	);
}

export default TechStack;
