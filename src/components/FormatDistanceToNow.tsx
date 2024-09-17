"use client";

import React, { useEffect, useState } from "react";

import formatDate from "@/lib/formatDate";
import { formatDistanceToNow } from "date-fns";

function FormatDistanceToNow({ frontMatter }: { frontMatter: any }) {
	const [loading, setLoading] = useState<boolean>(true);
	useEffect(() => {
		setLoading(false);
	}, []);
	return (
		<div className="relative w-fit">
			{loading ? (
				<div className="flex items-center gap-2 flex-wrap mb-5">
					<div className="w-56 h-4 bg-zinc-300 dark:bg-zinc-800 animate-pulse  rounded"></div>
					<div className="w-20 h-4 bg-zinc-300 dark:bg-zinc-800 animate-pulse rounded"></div>
				</div>
			) : (
				<div className="text-xs md:text-sm">
					<p className="!p-0 !m-0">
						<span className="font-bold">Last modified: </span>
						{`${formatDate(
							new Date(frontMatter.lastmod).toISOString()
						)} at ${new Date(frontMatter.lastmod)
							.toTimeString()
							.split(":")
							.slice(0, 2)
							.join(":")}`}{" "}
						⋆ {formatDistanceToNow(new Date(frontMatter.lastmod))}
					</p>
				</div>
			)}
		</div>
	);
}

export default FormatDistanceToNow;
