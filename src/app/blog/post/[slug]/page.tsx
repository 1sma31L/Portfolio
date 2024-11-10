import AnimatedDiv from "@/components/AnimatedDiv";
import BlogCard from "@/components/BlogCard";
import Breadcrumb from "@/components/Breadcrumb";
import FeedBack from "@/components/Feedback";
import FormatDistanceToNow from "@/components/FormatDistanceToNow";
import Link from "next/link";
import { Metadata } from "next";
import ProgressBar from "@/components/ProgressBar";
import React from "react";
import { TFrontMatter } from "@/types/types";
import Views from "@/components/Views";
import fs from "fs";
import markdownToHtml from "@/lib/markdownToHtml";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import path from "path";
import { postsDirectory } from "@/constants";

type PostProps = {
	params: {
		slug: string;
	};
};

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
	frontMatter: TFrontMatter;
	content: string;
}> {
	const filePath = path.join(postsDirectory, `${slug}.md`);
	if (!fs.existsSync(filePath)) {
		notFound();
	}
	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(fileContent);
	const frontMatter: TFrontMatter = data as TFrontMatter;
	const { htmlContent } = await markdownToHtml(content);
	return {
		frontMatter,
		content: htmlContent,
	};
}

function getSuggestedPosts(slug: string) {
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
	const suggestedPosts = posts
		.filter((post) => post.slug !== slug)
		.sort(() => Math.random() - 0.5)
		.slice(0, 3);
	return suggestedPosts;
}

export default async function BlogPost({ params }: PostProps) {
	const { slug } = params;
	const { frontMatter, content } = await getPostData(slug);
	const suggestedPosts = getSuggestedPosts(slug);
	return (
		<AnimatedDiv id={`${frontMatter.title}`}>
			<main className="py-12 container mx-auto px-2 md:px-0 " id="slug">
				<ProgressBar />
				<div className="container mx-auto mb-8 md:mb-10">
					<Breadcrumb label={frontMatter.title} />
				</div>
				<div className="container mx-auto prose dark:prose-invert !max-w-none">
					<h1 className="sm:!text-[80px] !text-[45px]">{frontMatter.title}</h1>
					<div className="text-xs md:text-sm">
						<p>
							By<span className="font-bold"> {frontMatter.author} </span>
						</p>
						<FormatDistanceToNow frontMatter={frontMatter} />
						<p>
							<span className="font-bold">Reading time: </span>
							{frontMatter.duration}
						</p>
						<div>
							<Views slug={slug} autoIncrement={true} />
						</div>
					</div>
					<hr />
					<div dangerouslySetInnerHTML={{ __html: content }} />
					<div className="dark:text-white text-black flex flex-wrap gap-2 mt-20">
						{frontMatter.tags?.map((tag: string) => {
							return (
								<Link
									className="px-2 py-1 border border-zinc-500 dark:border-zinc-200 text-[12px] sm:text-[14px]"
									key={tag}
									href={`/blog/tag/${encodeURIComponent(
										tag.replaceAll(" ", "-").toLowerCase()
									)}`}>
									#{tag}
								</Link>
							);
						})}
					</div>
					<hr className="my-8" />
				</div>
				<div className="mx-1">
					<FeedBack slug={slug} type={frontMatter.type ?? "Article"} />
				</div>
				{suggestedPosts.length > 0 && (
					<div className="flex flex-col gap-8 mt-8 px-1">
						<h2 className="text-[26px] md:text-[30px] font-bold hover:underline cursor-pointer">
							# Suggested Posts:
						</h2>
						<div className="flex flex-col gap-4">
							{suggestedPosts.map(({ slug, frontMatter }) => (
								<BlogCard key={slug} slug={slug} frontMatter={frontMatter} />
							))}
						</div>
					</div>
				)}
			</main>
		</AnimatedDiv>
	);
}
