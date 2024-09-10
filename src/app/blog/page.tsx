import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { LuPenLine } from "react-icons/lu";
import AnimatedDiv from "@/components/AnimatedDiv";
import { Metadata } from "next";
import { postsDirectory } from "@/constants/index";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Discover my blog posts where I share insights, tutorials, and updates on various topics in web development, technology, and more. Stay informed and inspired by exploring my latest articles and posts.",
	icons: {
		icon: "/favicon.ico",
	},
	robots: {
		index: true,
		follow: true,
	},
};

async function getPosts() {
	const files = fs.readdirSync(postsDirectory);
	const posts = files
		.filter((file) => !file.startsWith("_"))
		.map((fileName) => {
			const slug = fileName.replace(".md", "");
			const readFile = fs.readFileSync(
				`${postsDirectory}/${fileName}`,
				"utf-8"
			);
			const { data: frontMatter } = matter(readFile);
			return {
				slug,
				frontMatter,
			};
		});
	posts.sort((a, b) => {
		const dateA = new Date(a.frontMatter.date).getTime();
		const dateB = new Date(b.frontMatter.date).getTime();
		return dateB - dateA;
	});
	return posts;
}

export default async function Blog() {
	const posts = await getPosts();
	return (
		<AnimatedDiv id={2}>
			<main className="container mx-auto min-h-[93vh] font-bold text-[24px] sm:text-[32px]  py-6 px-4 sm:px-0">
				<div className="flex gap-3 justify-start items-center px-2">
					<LuPenLine className="text-xl md:text-2xl" />
					<h1 className={`text-[30px] md:text-[40px] font-bold`}>Blog</h1>
				</div>
				<div className="flex flex-col justify-start items-start w-full h-full gap-4 py-4">
					{posts.map(({ slug, frontMatter }) => (
						<article
							key={slug}
							className="flex flex-col gap-4 p-4 border rounded-lg w-full">
							<Link
								href={`/blog/${slug}`}
								className=" flex justify-start gap-3 p-2">
								<div className="flex flex-col gap-3">
									<h2 className="text-[22px] md:text-[32px]">
										{frontMatter.title}
									</h2>
									<p className="text-[12px] md:text-[18px] text-zinc-600 dark:text-zinc-400">
										{frontMatter.metaDescription}
									</p>
									<div>
										<p className="text-xs sm:text-xs text-zinc-700 dark:text-zinc-400">
											{new Date(frontMatter.date).toLocaleDateString("en-GB")}
										</p>
									</div>
								</div>
							</Link>
						</article>
					))}
				</div>
			</main>
		</AnimatedDiv>
	);
}
