/* eslint-disable @next/next/no-img-element */
import * as spotify from "@/lib/spotify";

import AnimatedDiv from "@/components/AnimatedDiv";
import BackButton from "@/components/BackButton";
import { FaSpotify } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import SongLink from "@/components/MusicCard";
import { TSong } from "@/types/types";

// Async function for server-side fetching
export default async function Page({ params }: { params: { id: string } }) {
	const songs = await spotify.getPlaylistItems(params.id);
	const playlistInfo = await spotify.getPlaylistInfo(params.id);

	const playlistName = playlistInfo.name;
	const playlistImage = playlistInfo.images[0].url;
	const playlistID = playlistInfo.id;

	return (
		<AnimatedDiv id={22}>
			<main className="container mx-auto min-h-[93vh] font-bold text-[24px] sm:text-[32px] py-6 px-4 sm:px-0">
				<BackButton />
				<img src={playlistImage} alt="" className="rounded-lg my-3" />
				<h1>{playlistName}</h1>
				<div className="text-lg md:text-xl flex justify-start items-center mb-5 font-normal gap-2 group">
					<Link
						href={`https://open.spotify.com/playlist/${playlistID}`}
						target="_blank"
						className="font-normal text-sm md:text-lg underline text-muted-foreground group-hover:text-green-500 transition-all duration-300">
						Listen in Spotify
					</Link>
					<FaSpotify className="group-hover:text-green-500 transition-all duration-300" />
				</div>

				<div className="flex flex-col gap-2">
					{songs.map((song: TSong, index: number) => (
						<SongLink key={index} song={song} />
					))}
				</div>
			</main>
		</AnimatedDiv>
	);
}
