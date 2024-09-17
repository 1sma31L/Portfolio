import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import React from "react";
import formatDate from "@/lib/formatDate";
function BlogCard({
	slug,
	frontMatter,
	from,
}: {
	slug: string;
	frontMatter: any;
	from?: string;
}) {
	return (
		<article className="flex flex-col gap-4 p-4 border rounded-lg w-full transition-all duration-150 hover:-translate-y-[1px] hover:translate-x-[2px] hover:shadow-md hover:border-zinc-400 dark:hover:border-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 group bg-white dark:bg-black">
			<Link
				href={`/blog/post/${slug}${from ? `?${from}` : ""}`}
				className=" flex justify-start gap-3 p-2 ">
				<div className="flex flex-col gap-2 w-full">
					<div className="flex justify-between items-center ">
						<h2 className="text-[22px] md:text-[32px]">{frontMatter.title}</h2>
						<GoArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
					</div>
					<p className="text-[12px] md:text-[16px] text-zinc-600 dark:text-zinc-400 font-normal">
						{frontMatter.metaDescription}
					</p>
					<div>
						<p className="text-[10px] md:text-[14px] text-zinc-500 font-normal dark:text-zinc-400">
							{formatDate(new Date(frontMatter.date).toISOString())}
						</p>
						{/* <div className="text-xs text-zinc-700 dark:text-zinc-400">
							<Views slug={slug} autoIncrement={false} />
						</div> */}
					</div>
				</div>
			</Link>
		</article>
	);
}

export default BlogCard;
