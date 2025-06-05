import Age from '@/lib/calc-age';
import AnimatedDiv from '@/components/AnimatedDiv';
import { FaExternalLinkAlt } from 'react-icons/fa';
import InfiniteScroll from '@/components/InfiniteScroll';
import LatestBlogs from '@/components/sections/LatestBlogs';
import Link from 'next/link';
import React from 'react';
import SocialMedia from '@/data/social-media';
import stack from '@/data/tech';
function Home() {
  return (
    <AnimatedDiv id={0}>
      <main className="container px-4 md:px-0 flex flex-col justify-center items-center gap-28 py-6 md:py-0">
        <section className="flex flex-col gap-5 min-h-[70vh] md:min-h-[80vh] justify-center items-center w-full">
          <h1 className="text-[44px] sm:text-[68px] font-extrabold inline-block text-zinc-800 dark:text-zinc-100 text-left w-full">
            Ismail M. Boussekine
          </h1>
          <div className="text-sm sm:text-base flex flex-col gap-5 leading-[1.6]  dark:text-zinc-100 ">
            <div className="flex flex-row gap-1 flex-wrap justify-start items-center">
              {SocialMedia.map((item, index) => (
                <Link
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="flex flex-row justify-between items-center gap-2 px-2 py-1 dark:hover:bg-zinc-800 hover:bg-zinc-200 rounded-sm">
                  <p className="text-lg p-[0.1rem]">{item.icon}</p>
                  {item.name && (
                    <p className="text-sm hidden sm:block">{item.name}</p>
                  )}
                </Link>
              ))}
            </div>
            <blockquote className="border-l-4 border-zinc-800 dark:border-zinc-100 pl-4 italic text-gray-700 dark:text-gray-300">
              <p className="font-bold">
                &quot;Most good programmers do programming not because they
                expect to get paid or get adulation by the public, but because
                it is fun to program.&quot;
              </p>
              <footer className="mt-2 text-zinc-500 dark:text-gray-400">
                — Linus Torvalds
              </footer>
            </blockquote>
            <p className="indent-5">
              i&apos;m a <Age birthDate="2005-04-27" /> y/o cs undergrad student
              at ENSTA and a junior <strong>Web Developer</strong>. i love
              building things and solving problems. i enjoy system design,
              theoretical computer science and i live on the editor. if i&apos;m
              not coding, i&apos;m probably watching movies, tv shows or
              obsessing over <strong>mechanical keyboards</strong>.
            </p>
          </div>
        </section>
        <Link href={'#techstack'} className="-m-14">
          <h2
            className="text-center text-3xl md:text-4xl font-bold"
            id="techstack">
            My Tech Stack
          </h2>
        </Link>
        <div className="pb-10 w-full">
          <InfiniteScroll icons={stack} />
        </div>
        <LatestBlogs />
        <section className="w-full flex flex-col">
          <Link href={'#aboutme'}>
            <h2
              className="text-3xl md:text-4xl font-bold mb-10 text-center"
              id="aboutme">
              More About Me
            </h2>
          </Link>
          <div>
            <div className="text-sm sm:text-base leading-[1.8] md:leading-[2] indent-5">
              <div>
                beside web development, i love to tinker with Linux (i use Arch
                Linux btw), watch people building stuff on YouTube and seeing
                strendy javascript frameworks,{' '}
                <div className=" flex justify-center items-center py-4">
                  <blockquote className="border-l-4 border-zinc-800 dark:border-zinc-100 pl-2 italic text-gray-700 dark:text-gray-300">
                    <p className="">
                      &quot;New day, New JavaScript framework.&quot;
                    </p>
                  </blockquote>
                </div>
              </div>
              <p>
                i simp for bergman and kubrick and my fav{' '}
                <Link
                  href="/more/movies-tvshows"
                  className="font-bold hover:underline">
                  movies
                </Link>{' '}
                are Interstellar (2014), Fallen Angels (1995), and Naked (1993).
                my fav{' '}
                <Link
                  href="/more/movies-tvshows"
                  className="font-bold hover:underline">
                  tv shows
                </Link>{' '}
                are Mr. Robot and DAЯꓘ. i play chess from time to time, 1600
                rapid rated. i read books in philosophy, psychology, and
                cybersecurity. i like classical{' '}
                <Link href="/more/music" className="font-bold hover:underline">
                  music
                </Link>
                . and last but not least, dark rainy weather is the best.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col w-full justify-center items-center gap-10 md:min-h-[40vh] my-24">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center">
            Are You Interested in Hiring Me?
          </h2>
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="group relative text-sm md:text-base py-3 px-6 border-2 bg-zinc-950 dark:bg-zinc-50 rounded-lg dark:text-zinc-950 text-zinc-50 w-auto overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg dark:hover:shadow-zinc-200/20 hover:shadow-zinc-800/20">
              <Link
                href={'/contact'}
                className="flex gap-2 justify-center items-center relative z-10">
                <FaExternalLinkAlt className="mb-1 group-hover:rotate-45 transition-transform duration-300" />
                <span className="font-bold">Contact Me</span>
              </Link>
              <div className="absolute inset-0 bg-zinc-800 dark:bg-zinc-200 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out -z-0"></div>
            </button>
            <button className="group relative text-sm md:text-base py-3 px-6 border-2 border-zinc-950 dark:border-zinc-50 rounded-lg w-auto overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg dark:hover:shadow-zinc-200/20 hover:shadow-zinc-800/20">
              <Link
                href={'/projects'}
                className="flex gap-2 justify-center items-center relative z-10">
                <FaExternalLinkAlt className="mb-1 group-hover:rotate-45 transition-transform duration-300" />
                <span className="font-bold">See My Projects</span>
              </Link>
              <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out -z-0"></div>
            </button>
          </div>
        </section>
      </main>
    </AnimatedDiv>
  );
}

export default Home;
