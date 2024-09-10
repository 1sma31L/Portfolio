import React from "react";
import Link from "next/link";
import Icons from "@/data/icons";
import { FaGithub } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import Image from "next/image";
function ProjectCard({
	title,
	description,
	techStack,
	previewLink,
	githubLink,
}: {
	title: string;
	description: string;
	techStack: string[];
	previewLink: string;
	githubLink: string;
}) {
	return (
		<div className="flex flex-col gap-4 p-4 border  border-l-zinc-950 dark:border-l-zinc-100 border-l-2 rounded-r-lg">
			<div className="flex gap-2 text-[22px] md:text-[28px]">
				<h2 className={`font-bold capitalize`}>{title}</h2>
			</div>
			<p className="text-[14px] md:text-[18px] text-zinc-600 dark:text-zinc-400">
				{description}
			</p>
			<div className="flex gap-2 flex-wrap">
				{techStack.map((tech) => (
					<div
						key={tech}
						className="border rounded-sm px-2 py-1 text-[10px] sm:text-[12px] md:text-[14px] bg-zinc-50 dark:bg-zinc-900 flex justify-start items-center gap-2">
						{tech in Icons ? (
							<Image
								width={50}
								height={50}
								priority
								src={Icons[tech]}
								alt={tech}
								className="w-4 h-4 rounded-sm"
							/>
						) : null}
						<p>{tech}</p>
					</div>
				))}
			</div>
			<div className="flex gap-2">
				{previewLink && (
					<Link href={previewLink} target="_blank">
						<button className="px-2 py-1 border bg-black text-white dark:bg-white dark:text-black rounded-sm text-[14px] md:text-[18px] flex gap-2 items-center dark:hover:bg-zinc-300 duration-300 transition-colors hover:bg-zinc-700">
							<p>Preview</p>
							<CiLocationArrow1 className="text-lg md:text-xl" />
						</button>
					</Link>
				)}
				{githubLink && (
					<Link href={githubLink} target="_blank">
						<button className="px-2 py-1 border bg-black text-white dark:bg-white dark:text-black rounded-sm text-[14px] md:text-[18px] flex gap-2 items-center dark:hover:bg-zinc-300 duration-300 transition-colors hover:bg-zinc-700">
							<FaGithub className="text-md md:text-xl" />
							<p>Github</p>
						</button>
					</Link>
				)}
			</div>
		</div>
	);
}

export default ProjectCard;
