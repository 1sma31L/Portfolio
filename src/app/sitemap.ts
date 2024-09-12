import path from "path";
import fs from "fs";
import { MetadataRoute } from "next";
import { generateStaticParams } from "./blog/post/[slug]/page";
import matter from "gray-matter";
import { postsDirectory } from "@/constants";

const BASE_URL = "https://ismailboussekine.me";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const slugs = await generateStaticParams();
	const postsEntries: MetadataRoute.Sitemap = slugs.map((slug) => {
		const filePath = path.join(postsDirectory, `${slug}.md`);
		const fileContent = fs.readFileSync(filePath, "utf-8");
		const { data: frontMatter } = matter(fileContent);
		return {
			url: `${BASE_URL}/blog/${slug}`,
			priority: 0.7,
			lastModified: frontMatter.lastmod,
		};
	});
	return [
		{
			url: `${BASE_URL}/`,
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${BASE_URL}/projects`,
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${BASE_URL}/contact`,
			changeFrequency: "never",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/blog`,
			changeFrequency: "daily",
			priority: 1,
		},
		...postsEntries,
	];
}
