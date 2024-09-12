"use client";
import React, { use, useEffect, useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { ImSpinner9 } from "react-icons/im";
import {
	doc,
	getDoc,
	setDoc,
	updateDoc,
	increment,
	DocumentData,
} from "firebase/firestore";
import { db } from "@/config/firebase";

async function getStats(slug: string): Promise<
	| {
			likes: number;
			dislikes: number;
	  }
	| DocumentData
> {
	const docRef = doc(db, "stats", slug);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		return docSnap.data();
	} else {
		await setDoc(docRef, { likes: 0, dislikes: 0 });
		return { likes: 0, dislikes: 0 };
	}
}

async function sentStats(
	slug: string,
	type: "like" | "dislike"
): Promise<void> {
	const docRef = doc(db, "stats", slug);

	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		if (type === "like") {
			await updateDoc(docRef, {
				likes: increment(1),
			});
		} else if (type === "dislike") {
			await updateDoc(docRef, {
				dislikes: increment(1),
			});
		}
	} else {
		if (type === "like") {
			await setDoc(docRef, { likes: 1, dislikes: 0 });
		} else if (type === "dislike") {
			await setDoc(docRef, { likes: 0, dislikes: 1 });
		}
	}
}

export default function FeedBack({ slug }: { slug: string }) {
	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [likes, setLikes] = useState(0);
	const [dislikes, setDislikes] = useState(0);
	const handleClick = (type: "like" | "dislike") => {
		setLoading(true);
		sentStats(slug, type).then(() => {
			setLoading(false);
			setSubmitted(true);
		});
	};
	useEffect(() => {
		getStats(slug).then((data) => {
			setLikes(data.likes);
			setDislikes(data.dislikes);
		});
	}, []);
	return (
		<div className="flex flex-col justify-center items-center gap-3 w-full sm:w-[500px] mx-auto my-20 border rounded-lg min-h-[200px]">
			{!(loading || submitted) && (
				<>
					<h2 className="font-bold text-sm sm:text-lg">
						Did You Find This Article Usefull?
					</h2>
					<div className="flex gap-4 justify-between items-center">
						<button
							disabled={loading || submitted}
							onClick={() => {
								handleClick("like");
							}}
							className="flex justify-between items-center gap-2 py-1 px-2 rounded-sm cursor-pointer border hover:bg-zinc-200 transition-all duration-150 dark:hover:bg-zinc-800">
							<BiSolidLike className="text-lg md:text-xl" />
							<p>
								<span className="text-sm">{likes}</span>
							</p>
						</button>
						<button
							disabled={loading || submitted}
							onClick={() => {
								handleClick("dislike");
							}}
							className="flex justify-between items-center gap-2  py-1 px-2 rounded-sm cursor-pointer border hover:bg-zinc-200 transition-all duration-150 dark:hover:bg-zinc-800 ">
							<BiSolidDislike className="text-lg md:text-xl" />
							<p>
								<span className="text-sm">{dislikes}</span>
							</p>
						</button>
					</div>
				</>
			)}
			{loading && (
				<p>
					<ImSpinner9 className="text-lg animate-spin" />
				</p>
			)}
			{submitted && <p>Thanks for your review!.</p>}
		</div>
	);
}
