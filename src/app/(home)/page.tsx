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
        <section className="flex flex-col gap-5 min-h-[72vh] md:min-h-[85vh] justify-center items-center w-full">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold inline-block text-foreground text-left w-full bg-clip-text leading-none bg-gradient-to-r from-primary to-secondary">
            <span>Ismail Mohamed</span>{' '}
            <span className="text-accent uppercase">Boussekine</span>
          </h1>
          <div className="text-sm sm:text-base flex flex-col gap-5 text-foreground/90">
            <div className="flex flex-row gap-1 flex-wrap justify-start items-center">
              {SocialMedia.map((item, index) => (
                <Link
                  href={item.url}
                  key={index}
                  target="_blank"
                  className="flex flex-row justify-between items-center gap-2 px-3 py-1.5 hover:bg-accent/10 rounded-sm  transition-all duration-300 ">
                  <p className="text-lg text-foreground/80 transition-colors hover:text-foreground">
                    {item.icon}
                  </p>
                  {item.name && (
                    <p className="text-sm hidden sm:block text-muted-foreground hover:text-foreground/90 transition-colors">
                      {item.name}
                    </p>
                  )}
                </Link>
              ))}
            </div>
            <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground text-sm sm:text-md md:text-xl">
              <p className="font-bold text-foreground/90">
                &quot;Most good programmers do programming not because they
                expect to get paid or get adulation by the public, but because
                it is fun to program.&quot;
              </p>
              <footer className="mt-2 text-muted-foreground">
                — Linus Torvalds
              </footer>
            </blockquote>
            <p className="indent-5 text-foreground/80 text-sm sm:text-md md:text-xl">
              I&apos;m a <Age birthDate="2005-04-27" /> years old computer
              science undergrad student at ENSTA and a junior{' '}
              <span className="text-foreground font-medium">
                web developer.
              </span>
              I love building things and solving problems. I enjoy system
              design, Theoretical computer science and I live on the editor. If
              I&apos;m not coding, i&apos;m probably watching movies, TV Shows
              or obsessing over{' '}
              <span className="text-foreground font-medium">
                mechanical keyboards.
              </span>
            </p>
          </div>
        </section>
        <Link href={'#techstack'} className="-m-14">
          <h2
            className="text-center text-4xl md:text-5xl font-bold"
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
              className="text-4xl md:text-5xl font-bold mb-10 text-center"
              id="aboutme">
              More About Me
            </h2>
          </Link>
          <div>
            <div className="text-sm sm:text-md md:text-xl leading-[1.8] md:leading-[2] indent-5">
              <div>
                Beside web development, I love to tinker with Linux (i use Arch
                Linux btw), watch people building stuff on YouTube and seeing
                trendy JavaScript frameworks,{' '}
                <div className="flex justify-center items-center py-4">
                  <blockquote className="border-l-4 border-accent pl-2 italic text-muted-foreground">
                    <p className="">
                      &quot;New day, New JavaScript framework.&quot;
                    </p>
                  </blockquote>
                </div>
              </div>
              <p>
                I simp for Bergman and Kubrick and my fav{' '}
                <Link
                  href="/more/movies-tvshows"
                  className="font-bold text-primary hover:underline transition-colors">
                  movies
                </Link>{' '}
                are Interstellar (2014), Naked (1993), Eyes Wide Shut (1999) And
                Fallen Angels (1995). My fav{' '}
                <Link
                  href="/more/movies-tvshows"
                  className="font-bold text-primary hover:underline transition-colors">
                  tv shows
                </Link>{' '}
                are Mr. Robot and DAЯꓘ. iIplay chess from time to time, I read
                books in philosophy, psychology, and cybersecurity. I like
                classical{' '}
                <Link
                  href="/more/music"
                  className="font-bold text-primary hover:underline transition-colors">
                  music.
                </Link>
                And last but not least, Dark rainy weather is the best.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col w-full justify-center items-center gap-10 md:min-h-[40vh] my-24">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center text-foreground">
            Are You Interested in Hiring Me?
          </h2>
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="group relative text-sm md:text-base py-3 px-6 border-2 border-primary bg-primary text-primary-foreground rounded-lg w-auto overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
              <Link
                href={'/contact'}
                className="flex gap-2 justify-center items-center relative z-10">
                <FaExternalLinkAlt className="mb-1 group-hover:rotate-45 transition-transform duration-300" />
                <span className="font-bold">Contact Me</span>
              </Link>
              <div className="absolute inset-0 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out -z-0"></div>
            </button>
            <button className="group relative text-sm md:text-base py-3 px-6 border-2 border-accent bg-background text-foreground hover:text-accent-foreground rounded-lg w-auto overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-accent/20">
              <Link
                href={'/projects'}
                className="flex gap-2 justify-center items-center relative z-10">
                <FaExternalLinkAlt className="mb-1 group-hover:rotate-45 transition-transform duration-300" />
                <span className="font-bold">See My Projects</span>
              </Link>
              <div className="absolute inset-0 bg-accent transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out -z-0"></div>
            </button>
          </div>
        </section>
      </main>
    </AnimatedDiv>
  );
}

export default Home;
