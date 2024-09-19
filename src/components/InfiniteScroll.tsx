import React from "react";
import { TItem } from "@/types/types";

function InfiniteScroll({ icons }: { icons: TItem[] }) {
	const colorVariants = {
		Red: "hover:text-red-500 ",
		Green: "hover:text-green-500 ",
		Blue: "hover:text-blue-500 ",
		Yellow: "hover:text-yellow-500 ",
		Purple: "hover:text-purple-500 ",
		Gray: "hover:text-gray-500 ",
		Zinc: "hover:text-zinc-500 ",
		Orange: "hover:text-orange-500 ",
		Cyan: "hover:text-cyan-600 ",
	};
	return (
		<div
			className="flex w-full overflow-hidden whitespace-nowrap
      relative bg-zinc-50 dark:bg-zinc-950 
  before:absolute before:left-0 before:top-0 before:z-[2] before:h-full md:before:w-[80px] before:w-[30px] 
  before:bg-[linear-gradient(to_right,theme(colors.background)_0%,rgba(255,255,255,0)_100%)] 
  dark:before:bg-[linear-gradient(to_right,theme(colors.background)_0%,rgba(0,0,0,0)_100%)] 
  before:content-[''] 
  after:absolute after:right-0 after:top-0 after:z-[2] after:h-full 
  md:after:w-[80px] after:w-[30px] 
  after:scale-x-[-1] 
  after:bg-[linear-gradient(to_right,theme(colors.background)_0%,rgba(255,255,255,0)_100%)] 
  dark:after:bg-[linear-gradient(to_right,theme(colors.background)_0%,rgba(0,0,0,0)_100%)] 
  after:content-['']
    group    pt-1">
			{["", ""].map((_, i) => (
				<div className="animate-scroll group-hover:pause inline-block" key={i}>
					{icons.map((icon, index) => (
						<div
							className={`text-4xl md:text-5xl mx-5 md:mx-7 inline-block 
                ${colorVariants[icon.color]}
                transition-all duration-75
                `}
							key={index}>
							{icon.icon}
						</div>
					))}
				</div>
			))}
		</div>
	);
}

export default InfiniteScroll;
