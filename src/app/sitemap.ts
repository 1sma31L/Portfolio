import { MetadataRoute } from "next";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postsDirectory } from "@/constants";

const BASE_URL = "https://ismailboussekine.me";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const files = fs.readdirSync(postsDirectory);
	const postsEntries: MetadataRoute.Sitemap = files.map((fileName) => {
		const filePath = path.join(postsDirectory, fileName);
		const fileContent = fs.readFileSync(filePath, "utf-8");
		const { data: frontMatter } = matter(fileContent);
		const slug = fileName.replace(".md", "");
		return {
			url: `${BASE_URL}/blog/post/${slug}`,
			priority: 0.9,
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
			priority: 1,
		},
		{
			url: `${BASE_URL}/blog`,
			changeFrequency: "daily",
			priority: 1,
		},
		...postsEntries,
	];
}
