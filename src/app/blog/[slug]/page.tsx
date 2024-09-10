import React from "react";
import { TbArrowBadgeLeftFilled, TbArrowBadgeLeft } from "react-icons/tb";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Link from "next/link";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostProps } from "@/types/types";
import AnimatedDiv from "@/components/AnimatedDiv";
import { Metadata } from "next";
import ProgressBar from "@/components/ProgressBar";
import { postsDirectory } from "@/constants/index";

export async function generateMetadata({
	params,
}: PostProps): Promise<Metadata> {
	const { slug } = params;
	const { frontMatter } = await getPostData(slug);
	return {
		title: `${frontMatter.title} | Blog`,
		description: frontMatter.metaDescription,
		openGraph: {
			title: frontMatter.title,
			description: frontMatter.metaDescription,
		},
		twitter: {
			card: "summary_large_image",
			title: frontMatter.title,
			description: frontMatter.metaDescription,
		},
	};
}

export async function generateStaticParams() {
	const files = fs.readdirSync(postsDirectory);
	const paths = files
		.filter((file) => !file.startsWith("_"))
		.map((fileName) => ({
			slug: fileName.replace(".md", ""),
		}));
	return paths.map(({ slug }) => slug);
}

async function getPostData(slug: string): Promise<{
	frontMatter: Record<string, any>;
	content: string;
}> {
	const filePath = path.join(postsDirectory, `${slug}.md`);
	if (!fs.existsSync(filePath)) {
		notFound();
	}
	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data: frontMatter, content } = matter(fileContent);
	const { htmlContent } = await markdownToHtml(content);
	return {
		frontMatter,
		content: htmlContent,
	};
}

export default async function BlogPost({ params }: PostProps) {
	const { slug } = params;
	const { frontMatter, content } = await getPostData(slug);
	return (
		<AnimatedDiv id={`${frontMatter.title}`}>
			<main className="py-12 container mx-auto px-2 md:px-0" id="slug">
				<ProgressBar />
				<div className="container mx-auto prose md:prose-lg  dark:prose-dark dark:prose-invert">
					<div className="inline-block">
						<Link
							href="/blog"
							className="flex justify-start items-center mb-5 text-zinc-400 hover:text-black transition-colors duration-150 dark:text-zinc-500 dark:hover:text-white group">
							<TbArrowBadgeLeft className="mb-1 group-hover:hidden block " />
							<TbArrowBadgeLeftFilled className="mb-1 group-hover:block hidden " />
							<button className="inline-block">Back</button>
						</Link>
					</div>
					<h1 className="sm:!text-[80px] !text-[45px]">{frontMatter.title}</h1>
					<div className="text-xs md:text-sm">
						{[
							`${new Date(frontMatter.lastmod).toDateString()} ${new Date(
								frontMatter.lastmod
							)
								.toTimeString()
								.split(" ")
								.slice(0, 2)
								.join(" ")}`,
							frontMatter.author,
							frontMatter.duration,
						].map((item, index) => {
							if (item) {
								return (
									<p key={index} className="m-0 p-0">
										<span className="font-bold">
											{index === 0
												? "Last modification: "
												: index === 1
												? "Author: "
												: "Read Time: "}
										</span>
										{item}
									</p>
								);
							}
							return null;
						})}
					</div>
					<div className="h-1 w-full bg-black dark:bg-white my-10" />
					<div dangerouslySetInnerHTML={{ __html: content }} />
					<div className="dark:text-white text-black flex flex-wrap gap-2 mt-20">
						{frontMatter.tags?.map((tag: string) => {
							return (
								<span
									className="px-2 py-1 border border-zinc-500 dark:border-zinc-200 text-[12px] sm:text-[14px]"
									key={tag}>
									#{tag}
								</span>
							);
						})}
					</div>
				</div>
			</main>
		</AnimatedDiv>
	);
}
