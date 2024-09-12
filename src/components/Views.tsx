"use client"; // Ensure this is the first line in the file

import React, { useEffect, useState } from "react";
import { db } from "@/config/firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

interface ViewsProps {
	slug: string;
	autoIncrement: boolean;
}

async function getViews(slug: string) {
	const viewsRef = doc(db, "views", slug);
	const docSnap = await getDoc(viewsRef);

	if (docSnap.exists()) {
		return docSnap.data().views || 0;
	} else {
		// If document does not exist, initialize it with 0 views
		await setDoc(viewsRef, { views: 0 });
		return 0;
	}
}

async function incrementViews(slug: string) {
	const viewsRef = doc(db, "views", slug);
	const docSnap = await getDoc(viewsRef);

	if (docSnap.exists()) {
		// Update the existing document
		await updateDoc(viewsRef, {
			views: (docSnap.data().views || 0) + 1,
		});
	} else {
		// Create the document if it does not exist
		await setDoc(viewsRef, { views: 1 });
	}
}

const Views: React.FC<ViewsProps> = ({ slug, autoIncrement }) => {
	const [viewCount, setViewCount] = useState<number | null>(null); // `null` represents loading
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchAndIncrementViews = async () => {
			try {
				if (autoIncrement) {
					await incrementViews(slug);
				}
				const currentViews = await getViews(slug);
				setViewCount(currentViews);
			} catch (error) {
				console.error("Error fetching view count:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchAndIncrementViews();
	}, [slug]);

	return (
		<div className="relative w-fit">
			{loading ? (
				<div className="flex items-center gap-2">
					<div className="w-9 h-4 bg-zinc-300 dark:bg-zinc-800 animate-pulse  rounded"></div>
					<div className="w-4 h-4 bg-zinc-300 dark:bg-zinc-800 animate-pulse rounded"></div>
				</div>
			) : (
				<p className="">
					<span className="font-bold">Views: </span>
					{viewCount !== null ? viewCount : "N/A"}
				</p>
			)}
		</div>
	);
};

export default Views;