import React from "react";
import Link from "next/link";
// Components
import AnimatedDiv from "@/components/AnimatedDiv";
import TechStack from "@/components/TechStack";
// Data
import SocialMedia from "@/data/social-media";
import { stack, other } from "@/data/tech";
// Icons
import { FaExternalLinkAlt } from "react-icons/fa";
import timeLine from "@/data/time-line";

function Home() {
	return (
		<AnimatedDiv id={0}>
			<main className="container px-4 md:px-0 flex flex-col justify-center items-center gap-20 py-6 md:py-0">
				<section className="flex flex-col gap-5 min-h-[70vh] md:min-h-[80vh] justify-center items-center">
					<h1
						className={`text-[44px] sm:text-[68px] font-extrabold inline-block text-zinc-800 dark:text-zinc-100 text-left w-full`}>
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
									<p className="text-lg mb-1 ">{item.icon}</p>
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
				<section
					id="techstack"
					className="flex flex-col gap-10 justify-center w-full items-center">
					<div className="flex flex-col gap-1 justify-center  w-full items-start">
						<h1 className="text-3xl md:text-4xl font-bold">
							<a href={"#techstack"}>My Tech Stack</a>
						</h1>
						<p className="text-zinc-500">
							Technologies I use in the process of developing websites.
						</p>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full py-10 gap-1">
							{stack.map((item, index) => (
								<TechStack item={item} key={index} />
							))}
						</div>
					</div>
					<div
						className="flex flex-col gap-1 justify-center w-full items-start"
						id="otherskills">
						<h1 className="text-3xl md:text-4xl font-bold">
							<a href="#otherskills">Other Skills</a>
						</h1>
						<p className="text-zinc-500">Other skills, Tools and languages.</p>
						<div className="grid grid-cols-2 md:grid-cols-4 w-full py-10 gap-1">
							{other.map((item, index) => (
								<TechStack item={item} key={index} />
							))}
						</div>
					</div>
				</section>
				<section id="timeline" className="w-full flex flex-col">
					<h1 className="text-3xl md:text-4xl font-bold">
						<a href={"#timeline"}>My Timeline</a>
					</h1>
					<p className="text-zinc-500 mb-10">
						Here is a brief timeline of my journey in the field of web
						development.
					</p>
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
				<section id="more-about-me" className="w-full flex flex-col">
					<h1 className="text-3xl md:text-4xl font-bold">
						<a href={"#more-about-me"}>More About Me</a>
					</h1>
					<p className="text-zinc-500 mb-10">
						Get to know what I like to do outside of software development.
					</p>
					<div>
						<div className="text-sm sm:text-base leading-[1.8] md:leading-[2] indent-5">
							beside web development, i love to tinker with Linux (i use Arch
							Linux btw), my favorite movies are Interstellar (2014), Fallen
							Angels (1995), and Naked (1993). i simp for bergman and kubrick,
							my favorite tv shows are Mr. Robot and DAЯK. i play chess from
							time to time, 1600 Rapid rated. i read books in philosophy,
							psychology, and cybersecurity. i like classical music. and last
							but not least, dark rainy weather is the best.
						</div>
					</div>
				</section>
				<section
					id="client"
					className="flex flex-col w-full justify-center items-center gap-10 md:min-h-[40vh] my-24">
					<h1 className="text-4xl md:text-6xl font-extrabold text-center">
						Are You Interested in Hiring Me?
					</h1>
					<button className="text-sm md:text-base py-2 px-3 border bg-zinc-950 dark:bg-zinc-50 shadow rounded dark:text-zinc-950 text-zinc-50 w-auto hover:bg-zinc-700 transition-colors duration-500 dark:hover:bg-zinc-200 group">
						<Link
							href={"/contact"}
							className="flex gap-2 justify-center items-center group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all duration-500">
							<FaExternalLinkAlt className="mb-1" />
							<span className="font-bold">Contact Me</span>
						</Link>
					</button>
				</section>
			</main>
		</AnimatedDiv>
	);
}

export default Home;
