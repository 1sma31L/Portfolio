/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";

import Link from "next/link";
import SkeletonLoader from "@/components/ImageSkeltonLoading";
import { TSong } from "@/types/types";

// SongLink Component
interface SongLinkProps {
	song: TSong;
}

const SongLink: React.FC<SongLinkProps> = ({ song }) => {
	const [imageLoaded, setImageLoaded] = useState(false);

	const youtubeSearchQuery =
		song.track.artists[0].name.split(" ").join("+") +
		" - " +
		song.track.name.split(" ").join("+");

	// Handler to mark the image as loaded
	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	return (
		<Link
			href={`https://www.youtube.com/results?search_query=${youtubeSearchQuery}`}
			target="_blank"
			className="flex gap-3 cursor-pointer items-center">
			{/* Image Skeleton Loader */}
			<div className="w-12 h-12">
				{!imageLoaded && <SkeletonLoader />}
				<img
					src={song.track.album.images[0].url}
					alt={song.track.name}
					className={`w-12 h-12 rounded-sm transition-opacity duration-500 ${
						imageLoaded ? "opacity-100" : "opacity-0"
					}`}
					onLoad={handleImageLoad}
				/>
			</div>

			{/* Song Information */}
			<div className="flex flex-col justify-evenly items-start">
				<h2 className="text-sm font-normal">{song.track.name}</h2>
				<p className="text-xs font-normal">{song.track.artists[0].name}</p>
			</div>
		</Link>
	);
};

export default SongLink;
