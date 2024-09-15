import getPosts from "@/lib/getPosts";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const posts = await getPosts();
		return NextResponse.json(posts);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch posts" },
			{ status: 500 }
		);
	}
}
