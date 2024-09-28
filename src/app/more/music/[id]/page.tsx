/* eslint-disable @next/next/no-img-element */
import * as spotify from "@/lib/spotify";

import AnimatedDiv from "@/components/AnimatedDiv";
import BackButton from "@/components/BackButton";
import { FaSpotify } from "react-icons/fa";
import { IoIosMusicalNotes } from "react-icons/io";
import Link from "next/link";
import React from "react";

async function page({
	params,
}: {
	params: {
		id: string;
	};
}) {
	const songs = await spotify.getPlaylistItems(params.id);
	const playlistInfo = await spotify.getPlaylistInfo(params.id);
	const playlistName = playlistInfo.name;
	const playlistImage = playlistInfo.images[0].url;
	const playlistID = playlistInfo.id;
	return (
		<AnimatedDiv id={22}>
			<main className="container mx-auto min-h-[93vh] font-bold text-[24px] sm:text-[32px] py-6 px-4 sm:px-0 ">
				<BackButton />
				<img src={playlistImage} alt="" className="rounded-lg my-3" />
				<h1 className={``}>{playlistName}</h1>
				<div className="text-lg md:text-xl flex justify-start items-center mb-5 font-normal gap-2 group ">
					<Link
						href={`https://open.spotify.com/playlist/${playlistID}`}
						target="_blank"
						className="font-normal text-sm md:text-lg underline text-muted-foreground group-hover:text-green-500 transition-all duration-300">
						Listen in Spotify
					</Link>
					<FaSpotify className="group-hover:text-green-500 transition-all duration-300" />
				</div>

				<div className="flex flex-col gap-2">
					{songs.map((song: any, index: number) => (
						<Link
							href={`https://www.youtube.com/results?search_query=${song.track.name
								.split(" ")
								.join("+")}`}
							key={index}
							target="_blank"
							className="flex gap-3 cursor-pointer">
							<img
								src={song.track.album.images[0].url}
								alt={song.track.name}
								className="w-12"
							/>
							<div className="flex flex-col justify-evenly items-start ">
								<h2 className="text-sm font-noraml">{song.track.name}</h2>
								<p className="text-xs font-normal">
									{song.track.artists[0].name}
								</p>
							</div>
						</Link>
					))}
				</div>
			</main>
		</AnimatedDiv>
	);
}

export default page;
