"use client";

import React, { useEffect, useState } from "react";

import BlogCard from "../BlogCard";
import Link from "next/link";
import { Post } from "@/types/types";

function LatestBlogs() {
	const [posts, setPosts] = useState<Post[]>([]);
	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch("/api/posts", {
				next: { revalidate: 60 * 60 * 12 },
			} as RequestInit);
			const data = await response.json();
			setPosts(data);
		};

		fetchPosts();
	}, []);
	return (
		<section className="w-full flex flex-col">
			<h1 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-10">
				Latest Blog Posts
			</h1>
			<div className="flex flex-col gap-3">
				{posts.map((post, i) => (
					<BlogCard key={i} slug={post.slug} frontMatter={post.frontMatter} />
				))}
			</div>
			<div className="self-end m-4">
				<Link
					href={"/blog"}
					className="text-muted-foreground hover:text-foreground transition-all duration-300">
					See More &gt;&gt;&gt;
				</Link>
			</div>
		</section>
	);
}

export default LatestBlogs;
