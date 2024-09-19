import AnimatedDiv from "@/components/AnimatedDiv";
import { FaExternalLinkAlt } from "react-icons/fa";
import InfiniteScroll from "@/components/InfiniteScroll";
import LatestBlogs from "@/components/sections/LatestBlogs";
import Link from "next/link";
import React from "react";
import SocialMedia from "@/data/social-media";
import { TItem } from "@/types/types";
import stack from "@/data/tech";
import timeLine from "@/data/time-line";

function Home() {
	return (
		<AnimatedDiv id={0}>
			<main className="container px-4 md:px-0 flex flex-col justify-center items-center gap-28 py-6 md:py-0">
				<section className="flex flex-col gap-5 min-h-[70vh] md:min-h-[80vh] justify-center items-center w-full">
					<h1 className="text-[44px] sm:text-[68px] font-extrabold inline-block text-zinc-800 dark:text-zinc-100 text-left w-full">
						Ismail M. Bossekine
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
							i&apos;m a 19 y/o cs undergrad student. i love building things and
							solving problems. i enjoy system design, theoretical computer
							science and i live on the terminal. if i&apos;m not coding,
							i&apos;m probably watching movies or obsessing over mechanical
							keyboards.
						</p>
					</div>
				</section>
				<h2 className="text-center text-3xl md:text-4xl  font-bold">
					My Tech Stack
				</h2>
				<div className="pb-10 w-full">
					<InfiniteScroll icons={stack} />
				</div>
				<section className="w-full flex flex-col">
					<h1 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">
						My Timeline
					</h1>
					<div className="w-full py-2 px-0">
						<div className="border-l-2 border-zinc-500 pl-3 md:pl-4">
							{timeLine.map((item, index) => (
								<div className="mb-10" key={index}>
									<div
										className="text-2xl font-bold text-zinc-950 dark:text-zinc-50"
										id={`${item.year}`}>
										<a href={`#${item.year}`}>{item.year}</a>
									</div>
									{item.month.map((month, index) => (
										<div className="mt-4 ml-4" key={index}>
											<div className="flex items-center">
												<div className="w-2 h-2 bg-zinc-500 rounded-full mr-2"></div>
												<div className="font-semibold text-sm md:text-xl">
													{month.monthName}
												</div>
											</div>
											<ul className="ml-6 mt-2 text-zinc-600 dark:text-zinc-400">
												{month.achievements.map((achievement, index) => (
													<li className="text-xs md:text-base py-1" key={index}>
														• {achievement}.
													</li>
												))}
											</ul>
										</div>
									))}
								</div>
							))}
						</div>
					</div>
				</section>
				<LatestBlogs />
				<section className="w-full flex flex-col">
					<h1 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">
						More About Me
					</h1>
					<div>
						<div className="text-sm sm:text-base leading-[1.8] md:leading-[2] indent-5">
							<div>
								beside web development, i love to tinker with Linux (i use Arch
								Linux btw), watch people building stuff on YouTube and seeing
								trendy javascript frameworks,{" "}
								<div className=" flex justify-center items-center py-4">
									<blockquote className="border-l-4 border-zinc-800 dark:border-zinc-100 pl-2 italic text-gray-700 dark:text-gray-300">
										<p className="">
											&quot;New day, New JavaScript framework.&quot;
										</p>
									</blockquote>
								</div>
							</div>
							<p>
								i simp for bergman and kubrick and my fav movies are
								Interstellar (2014), Fallen Angels (1995), and Naked (1993). my
								fav tv shows are Mr. Robot and DAЯꓘ. i play chess from time to
								time, 1600 Rapid rated. i read books in philosophy, psychology,
								and cybersecurity. i like classical music. and last but not
								least, dark rainy weather is the best.
							</p>
						</div>
					</div>
				</section>
				<section className="flex flex-col w-full justify-center items-center gap-10 md:min-h-[40vh] my-24">
					<h1 className="text-4xl md:text-6xl font-extrabold text-center">
						Are You Interested in Hiring Me?
					</h1>
					<div className="flex flex-col sm:flex-row gap-5">
						<button className="text-sm md:text-base py-2 px-3 border bg-zinc-950 dark:bg-zinc-50 rounded dark:text-zinc-950 text-zinc-50 w-auto hover:bg-zinc-700 transition-colors duration-500 dark:hover:bg-zinc-300">
							<Link
								href={"/contact"}
								className="flex gap-2 justify-center items-center ">
								<FaExternalLinkAlt className="mb-1" />
								<span className="font-bold">Contact Me</span>
							</Link>
						</button>
						<button className="text-sm md:text-base py-2 px-3 border rounded  w-auto transition-colors duration-500 hover:bg-zinc-200 dark:hover:bg-zinc-800">
							<Link
								href={"/projects"}
								className="flex gap-2 justify-center items-center ">
								<FaExternalLinkAlt className="mb-1" />
								<span className="font-bold">See My Projects</span>
							</Link>
						</button>
					</div>
				</section>
			</main>
		</AnimatedDiv>
	);
}

export default Home;
