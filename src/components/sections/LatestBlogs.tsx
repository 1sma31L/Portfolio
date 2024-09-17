"use client";

import React, { useEffect, useState } from "react";

import BlogCard from "../BlogCard";
import { Post } from "@/types/types";

function LatestBlogs() {
	const [posts, setPosts] = useState<Post[]>([]);
	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch("/api/posts", {
				cache: "force-cache",
			} as RequestInit);
			const data = await response.json();
			setPosts(data);
		};

		fetchPosts();
	}, []);
	return (
		<section className="w-full flex flex-col">
			<h1 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">
				Latest Blog Posts
			</h1>
			<div className="flex flex-col gap-3">
				{posts.map((post, i) => (
					<BlogCard key={i} slug={post.slug} frontMatter={post.frontMatter} />
				))}
			</div>
		</section>
	);
}

export default LatestBlogs;
