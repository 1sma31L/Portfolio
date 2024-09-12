import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { BiCategory } from "react-icons/bi";
import AnimatedDiv from "@/components/AnimatedDiv";
// import { Metadata } from "next";
import { postsDirectory } from "@/constants/index";
import BlogCard from "@/components/BlogCard";
import { GiMaterialsScience } from "react-icons/gi";
import { RiCodeSSlashFill } from "react-icons/ri";
import { MdNaturePeople, MdRateReview } from "react-icons/md";
import Capitalize from "@/lib/Capitalize";
import path from "path";

const navItems = [
	{ path: "/blog", name: "All" },
	{
		path: "/blog/category/science",
		name: "Science",
		icon: <GiMaterialsScience />,
	},
	{
		path: "/blog/category/tech",
		name: "Tech",
		icon: <RiCodeSSlashFill />,
	},
	// { path: "/blog/category/programming", name: "Programming" },
	{ path: "/blog/category/reviews", name: "Reviews", icon: <MdRateReview /> },
	{ path: "/blog/category/life", name: "Life", icon: <MdNaturePeople /> },
];

export async function generateStaticParams(): Promise<{ category: string }[]> {
	const files = fs.readdirSync(postsDirectory);
	const categories = new Set<string>();

	files.forEach((file) => {
		if (!file.startsWith("_")) {
			const readFile = fs.readFileSync(
				path.join(postsDirectory, file),
				"utf-8"
			);
			const { data: frontMatter } = matter(readFile);
			frontMatter.categories?.forEach((category: string) => {
				categories.add(category.toLowerCase().replace(/\s+/g, "-"));
			});
		}
	});

	const categoryArray = Array.from(categories).map((category) => ({
		category,
	}));
	categoryArray.push({ category: "life" }, { category: "reviews" }); // Temporary fix for missing category
	return categoryArray;
}

async function getPostsByCategory(category: string) {
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
		.filter((post) =>
			post.frontMatter.categories?.includes(Capitalize(category))
		)
		.sort((a, b) => {
			const dateA = new Date(a.frontMatter.date).getTime();
			const dateB = new Date(b.frontMatter.date).getTime();
			return dateB - dateA;
		});
	return filteredPosts;
}

export default async function Tag({
	params,
}: {
	params: { category: string };
}) {
	const category = Capitalize(params.category.split("-").join(" "));
	const posts = await getPostsByCategory(category);
	return (
		<AnimatedDiv id={2}>
			<main className="container mx-auto min-h-[93vh] font-bold text-[24px] sm:text-[32px]  py-6 px-4 sm:px-0">
				<div className="flex gap-3 justify-start items-center px-2">
					{navItems
						.filter(
							(item) => item.name.toLowerCase() === category.toLowerCase()
						)
						.map((item) => {
							return (
								<div key={item.name} className="mb-1">
									{item.icon}
								</div>
							);
						}) || <BiCategory />}
					<h1 className={`text-[30px] md:text-[40px] font-bold`}>{category}</h1>
				</div>
				{posts.length > 0 ? (
					<div className="flex flex-col justify-start items-start w-full h-full gap-4 py-4">
						{posts.map(({ slug, frontMatter }) => (
							<BlogCard key={slug} slug={slug} frontMatter={frontMatter} />
						))}
					</div>
				) : (
					<p className="text-sm sm:text-md font-bold text-left py-10 px-2">
						No blog posts found for &quot;{category}&quot;...
					</p>
				)}
			</main>
		</AnimatedDiv>
	);
}
