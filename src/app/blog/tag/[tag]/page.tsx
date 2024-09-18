import AnimatedDiv from "@/components/AnimatedDiv";
import BackButton from "@/components/BackButton";
import BlogCard from "@/components/BlogCard";
import Capitalize from "@/lib/Capitalize";
import { FaHashtag } from "react-icons/fa";
import { Metadata } from "next";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postsDirectory } from "@/constants";

export async function generateMetadata({
	params,
}: {
	params: { tag: string };
}): Promise<Metadata> {
	const tag = Capitalize(params.tag.split("-").join(" "));

	return {
		title: `${tag}${
			tag.lastIndexOf("s") === tag.length - 1 ? "' Tag" : "'s Tag"
		} | Blog`,
		description: `${tag} tag articles`,
		keywords: [tag, "blog", "articles"],
	};
}

export async function generateStaticParams() {
	const files = fs.readdirSync(postsDirectory);
	const tags = new Set<string>();

	files.forEach((file) => {
		if (!file.startsWith("_")) {
			const readFile = fs.readFileSync(
				path.join(postsDirectory, file),
				"utf-8"
			);
			const { data: frontMatter } = matter(readFile);
			frontMatter.tags?.forEach((tag: string) => {
				tags.add(tag.toLowerCase().replace(/\s+/g, "-"));
			});
		}
	});

	return Array.from(tags).map((tag) => ({
		tag,
	}));
}

async function getPostsByTag(tag: string) {
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
	const filteredPosts = posts
		.filter((post) => post.frontMatter.tags.includes(tag))
		.sort((a, b) => {
			const dateA = new Date(a.frontMatter.date).getTime();
			const dateB = new Date(b.frontMatter.date).getTime();
			return dateB - dateA;
		});
	return filteredPosts;
}

export default async function Tag({ params }: { params: { tag: string } }) {
	const oldTag = params.tag;
	const tag = Capitalize(params.tag.split("-").join(" "));
	const posts = await getPostsByTag(tag);
	return (
		<AnimatedDiv id={2}>
			<main className="container mx-auto min-h-[93vh] font-bold text-[24px] sm:text-[32px]  py-6 px-4 sm:px-0">
				<div className="text-sm sm:text-lg">
					<BackButton />
				</div>
				<div className="flex gap-3 justify-start items-center px-2">
					<FaHashtag className="text-xl md:text-2xl" />
					<h1 className={`text-[30px] md:text-[40px] font-bold`}>{tag}</h1>
				</div>
				<div className="flex flex-col justify-start items-start w-full h-full gap-4 py-4">
					{posts.length > 0 ? (
						posts.map(({ slug, frontMatter }) => (
							<BlogCard
								key={slug}
								slug={slug}
								frontMatter={frontMatter}
								from={`tag=${oldTag}`}
							/>
						))
					) : (
						<p className="text-sm sm:text-md font-bold text-left py-10 px-2">
							No posts were found for &quot;{tag}&quot; ...
						</p>
					)}
				</div>
			</main>
		</AnimatedDiv>
	);
}
