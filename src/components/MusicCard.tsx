/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { TSong } from "@/types/types";

// SongLink Component
interface SongLinkProps {
	song: TSong;
}

const SongLink: React.FC<SongLinkProps> = ({ song }) => {
	const youtubeSearchQuery = song.track.name.split(" ").join("+");

	return (
		<Link
			href={`https://www.youtube.com/results?search_query=${youtubeSearchQuery}`}
			target="_blank"
			className="flex gap-3 cursor-pointer">
			<img
				src={song.track.album.images[0].url}
				alt={song.track.name}
				className="w-12"
			/>
			<div className="flex flex-col justify-evenly items-start">
				<h2 className="text-sm font-normal">{song.track.name}</h2>
				<p className="text-xs font-normal">{song.track.artists[0].name}</p>
			</div>
		</Link>
	);
};

export default SongLink;
