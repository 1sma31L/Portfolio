import {
  getMyPlaylists,
  getPlaylistCoverImage,
  getProfileData,
} from '@/lib/spotify';

/* eslint-disable @next/next/no-img-element */
import AnimatedDiv from '@/components/AnimatedDiv';
import { IoIosMusicalNotes } from 'react-icons/io';
import Link from 'next/link';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Music',
  description:
    'Listen to my favorite music playlists on Spotify. Follow me on Spotify to get updates on my latest playlists.',
};

async function Music() {
  const playlists = await getMyPlaylists();
  const profile = await getProfileData();
  return (
    <AnimatedDiv id={22}>
      <main className="container mx-auto min-h-[93vh] font-bold text-[24px] sm:text-[32px] py-6 px-4 sm:px-0">
        <div className="flex gap-3 justify-start items-center px-2">
          <IoIosMusicalNotes className="text-xl md:text-2xl" />
          <h1 className={`text-[26px] md:text-[40px] font-bold`}>Music</h1>
        </div>
        <Link
          href="https://open.spotify.com/user/3157qxpgggxxkcgfhn4zj2cppanm"
          target="_blank"
          className="flex gap-4 my-3 w-full mx-auto">
          {profile?.images?.length > 0 && (
            <img
              src={profile?.images[1].url}
              alt="Profile"
              className="rounded-full w-16 h-16"
            />
          )}
          <div className="flex flex-col justify-center">
            <h2 className="text-lg md:text-xl font-bold">
              {profile?.display_name || profile.id}
            </h2>
            <p className="text-sm md:text-md text-muted-foreground">
              {profile?.followers?.total} followers
            </p>
          </div>
        </Link>
        <hr />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 mt-5">
          {playlists.length > 0 &&
            playlists.map(async (playlist, index: number) => {
              const coverImage = await getPlaylistCoverImage(playlist.id);
              return (
                <Link
                  href={`/more/music/${playlist?.id}`}
                  key={index}
                  className="flex flex-col gap-2 cursor-pointer group">
                  {playlist?.images?.length > 0 && (
                    <div className="aspect-square w-full overflow-hidden rounded-xl">
                      <img
                        src={coverImage?.[0]?.url}
                        alt={playlist.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <h2 className="text-sm md:text-lg font-normal text-center group-hover:underline">
                    {playlist?.name}
                  </h2>
                </Link>
              );
            })}
        </div>
      </main>
    </AnimatedDiv>
  );
}

export default Music;
