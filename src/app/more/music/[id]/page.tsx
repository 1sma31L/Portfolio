/* eslint-disable @next/next/no-img-element */
import * as spotify from "@/lib/spotify";

import AnimatedDiv from "@/components/AnimatedDiv";
import BackButton from "@/components/BackButton";
import { FaSpotify } from "react-icons/fa";
import Link from "next/link";
import { Metadata } from "next";
import React from "react";
import SongLink from "@/components/MusicCard";
import { TSong } from "@/types/types";

export async function generateMetadata({
	params,
}: {
	params: { id: string };
}): Promise<Metadata> {
	const playlistInfo = await spotify.getPlaylistInfo(params.id);
	return {
		title: playlistInfo.name + " | Music",
		description: playlistInfo.description,
	};
}

export default async function Page({ params }: { params: { id: string } }) {
	const songs = await spotify.getPlaylistItems(params.id);
	const playlistInfo = await spotify.getPlaylistInfo(params.id);

	const playlistName = playlistInfo.name;
	const playlistImages = await spotify.getPlaylistCoverImage(params.id);

	const playlistID = playlistInfo.id;

	return (
		<AnimatedDiv id={22}>
			<main className="container mx-auto min-h-[93vh] font-bold text-[24px] sm:text-[32px] py-6 px-4 sm:px-0">
				<div className="grid grid-col-1 lg:grid-cols-8 gap-4 lg:gap-10 my-4">
					<div className="col-span-1 lg:col-span-3">
						<div className="lg:sticky top-20 flex flex-col gap-2">
							<BackButton />
							{playlistImages && (
								<img
									src={playlistImages[0].url}
									alt=""
									className="rounded-md shadow-xl max-w-52 lg:max-w-full"
								/>
							)}
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
							<div className="hidden lg:block">
								{playlistInfo.description && (
									<p className="text-muted-foreground text-sm md:text-md">
										{playlistInfo.description}
									</p>
								)}
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-2 col-span-1 lg:col-span-5 mt-0 lg:mt-14">
						{songs.map((song: TSong, index: number) => (
							<SongLink key={index} song={song} />
						))}
					</div>
				</div>
			</main>
		</AnimatedDiv>
	);
}
