/* eslint-disable @next/next/no-img-element */
import AnimatedDiv from "@/components/AnimatedDiv";
import { IoIosMusicalNotes } from "react-icons/io";
import { Item } from "@/types/types";
import Link from "next/link";
import React from "react";
import { getMyPlaylists } from "@/lib/spotify";
async function Music() {
	const playlists = await getMyPlaylists();
	return (
		<AnimatedDiv id={22}>
			<main className="container mx-auto min-h-[93vh] font-bold text-[24px] sm:text-[32px] py-6 px-4 sm:px-0">
				<div className="flex gap-3 justify-start items-center px-2">
					<IoIosMusicalNotes className="text-xl md:text-2xl" />
					<h1 className={`text-[26px] md:text-[40px] font-bold`}>Music</h1>
				</div>
				<div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 mt-10">
					{playlists.length > 0 &&
						playlists.map((playlist: Item, index: number) => (
							<Link
								href={`/more/music/${playlist.id}`}
								key={index}
								className="flex flex-col gap-2 cursor-pointer group">
								<img
									src={playlist.images[0].url}
									alt={playlist.name}
									className="rounded-xl"
								/>
								<h2 className="text-sm md:text-lg font-normal text-center group-hover:underline">
									{playlist.name}
								</h2>
								<p className="text-sm">{playlist.description}</p>
							</Link>
						))}
				</div>
			</main>
		</AnimatedDiv>
	);
}

export default Music;
