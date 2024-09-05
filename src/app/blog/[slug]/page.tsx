import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownToHtml from "@/lib/markdownToHtml";
import React from "react";

type PostProps = {
	params: {
		slug: string;
	};
};

export async function generateStaticParams() {
	const postsDirectory = path.join(process.cwd(), "src", "blog-posts");
	const files = fs.readdirSync(postsDirectory);
	const paths = files.map((fileName) => ({
		slug: fileName.replace(".md", ""),
	}));

	return paths.map((path) => ({ params: path }));
}

async function getPostData(slug: string): Promise<{
	frontMatter: Record<string, any>;
	content: string;
}> {
	const postsDirectory = path.join(process.cwd(), "src", "blog-posts");
	const filePath = path.join(postsDirectory, `${slug}.md`);
	if (!fs.existsSync(filePath)) {
		throw new Error("File not found");
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
		<main className="py-12 container mx-auto px-2 md:px-0" id="slug">
			<div
				className="container mx-auto 
				prose dark:prose-dark dark:prose-invert ">
				<h1 className="sm:!text-[80px] !text-[47px]">{frontMatter.title}</h1>
				<div className="text-xs md:text-sm ">
					<p className="my-1 p-0">
						<span className="font-bold">Last edited: </span>
						{new Date().toLocaleString()}
					</p>
					{frontMatter.author && (
						<p className="m-0 p-0">
							<span className="font-bold">Author: </span>
							{frontMatter.author}
						</p>
					)}
					{frontMatter.readTime && (
						<p className="m-0 p-0">
							<span className="font-bold">Read time: </span>
							{frontMatter.readTime}
						</p>
					)}
				</div>
				<div className="h-1 w-full bg-black dark:bg-white my-10"></div>
				<div dangerouslySetInnerHTML={{ __html: content }}></div>
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
	);
}
