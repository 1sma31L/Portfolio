/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import SocialMedia from "@/data/social-media";
import { stack, other } from "@/data/tech";
import TechStack from "@/components/TechStack";
import timeLine from "@/data/time-line";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PiHandPeace } from "react-icons/pi";
import { BsStack, BsCalendar3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Tag from "@/components/Tag";
import { FaChessKnight } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";

import { SiArchlinux } from "react-icons/si";
import AnimatedDiv from "@/components/AnimatedDiv";

function Home() {
	return (
		<AnimatedDiv id={0}>
			<main className="container px-4 md:px-0 flex flex-col justify-center items-center gap-32	">
				<section className="flex flex-col gap-5 min-h-[93vh] justify-center items-center">
					<div className="text-xs w-full text-zinc-500 flex flex-col justify-center items-start gap-2 pt-2">
						<p>
							This website is currently{" "}
							<span className="font-bold">under development</span>, If you find
							any <span className="text-red-500">bug</span> please contact me
							and repport it. <PiHandPeace className="inline-block mb-1" />
						</p>
						<p className="">Last edited: {new Date().toLocaleString()} </p>
					</div>
					<h1
						className={`text-[44px] sm:text-[68px] font-extrabold inline-block text-zinc-800 dark:text-zinc-100 text-left w-full`}>
						Ismail M. Boussekine
					</h1>
					<div className="text-sm sm:text-base flex flex-col gap-5 leading-[1.6]  dark:text-zinc-100">
						<blockquote className="border-l-4 border-zinc-800 dark:border-zinc-100 pl-4 italic text-gray-700 dark:text-gray-300">
							<p className="font-bold">
								&quot;An idiot admires complexity, a genius admires
								simplicity.&quot;
							</p>
							<footer className="mt-2 text-zinc-500 dark:text-gray-400">
								— Albert Einstein
							</footer>
						</blockquote>
						<p className="indent-5">
							<span className="font-bold">Hey There!</span>, I am a stuedent at
							the National Higher School of Advance Technoloiges (ENSTA),
							Full-Stack Developer and Cybersecurity Enthusiast. Based in
							Algeria 🇩🇿.
						</p>

						<p className="indent-5 ">
							They say you can&apos;t steal a house if you don&apos;t own one.
							That&apos;s why I began learning web development (Back-End)
							seeking a deeper understanding of the web to get better at
							pentesting. Along the way, I discovered a passion for creating
							beautiful and simple websites. And here I am, a Full-Stack
							Developer.
						</p>
						<div className="flex flex-row gap-2 flex-wrap mt-8">
							{SocialMedia.map((item, index) => (
								<Link
									href={item.url}
									key={index}
									target="_blank"
									className="border border-zinc-200	rounded shadow-sm dark:border-zinc-700 flex flex-row justify-between items-center gap-2 px-2 py-1  dark:hover:bg-zinc-800 hover:bg-zinc-200  transition-colors duration-300">
									<p className="text-lg ">{item.icon}</p>
									<p className={`text-sm hidden sm:block`}>{item.name}</p>
								</Link>
							))}
						</div>
					</div>
				</section>
				<section
					id="techstack"
					className="flex flex-col gap-20 justify-center  w-full items-center">
					<div className="flex flex-col gap-1 justify-center  w-full items-start">
						<h1 className="text-[35px] md:text-[40px] font-bold">
							<a href={"#techstack"}>
								<BsStack className="inline-block" /> My Tech Stack
							</a>
						</h1>
						<p className="text-zinc-500">
							Thechnology i use in the process of developing web sites.
						</p>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full py-10 gap-2">
							{stack.map((item, index) => (
								<TechStack item={item} key={index} />
							))}
						</div>
					</div>
					<div
						className="flex flex-col gap-1 justify-center w-full items-start"
						id="otherskills">
						<h1 className="text-[30px] font-bold">
							<a href="#otherskills">Other Skills</a>
						</h1>
						<p className="text-zinc-500">Other skills and languages.</p>
						<div className="grid grid-cols-2 md:grid-cols-4 w-full py-10 gap-2">
							{other.map((item, index) => (
								<TechStack item={item} key={index} />
							))}
						</div>
					</div>
				</section>
				{/* My Time line */}
				<section id="timeline" className="w-full flex flex-col">
					<h1 className="text-[35px] md:text-[40px] font-bold">
						<a href={"#timeline"}>
							<BsCalendar3 className="inline-block text-3xl mb-2 mr-2" />
							My Timeline
						</a>
					</h1>
					<p className="text-zinc-500 mb-10">
						Here is a brief timeline of my journey in the field of web
						development.
					</p>
					<div className="w-full py-2 px-0">
						<div className="border-l-2 border-zinc-500 pl-3 md:pl-4">
							{timeLine.map((item, index) => (
								<>
									<div className="mb-10">
										<div
											className="text-2xl font-bold text-zinc-950 dark:text-zinc-50"
											id={`${item.year}`}>
											<a href={`#${item.year}`}>{item.year}</a>
										</div>
										{item.month.map((month, index) => (
											<>
												<div className="mt-4 ml-4">
													<div className="flex items-center">
														<div className="w-2 h-2 bg-zinc-500 rounded-full mr-2"></div>
														<div className="font-semibold text-sm md:text-xl">
															{month.monthName}
														</div>
													</div>
													<ul className="ml-6 mt-2 text-zinc-600 dark:text-zinc-400">
														{month.achievements.map((achievement, index) => (
															<>
																<li className="text-xs md:text-base">
																	• {achievement}.
																</li>
															</>
														))}
													</ul>
												</div>
											</>
										))}
									</div>
								</>
							))}
						</div>
					</div>
				</section>
				<section id="more-about-me" className="w-full flex flex-col">
					<h1 className="text-[35px] md:text-[40px] font-bold">
						<a href={"#more-about-me"}>
							<CgProfile className="inline-block text-3xl mb-2 mr-2" />
							More About Me
						</a>
					</h1>
					<p className="text-zinc-500 mb-10">
						Get to know what I like to do outside of software development.
					</p>
					<div>
						<div className="text-sm sm:text-base leading-[1.6] md:leading-[1.8]">
							Beside web development, I Love to tinker with Linux (i use{" "}
							<Tag text="Arch Linux" icon={<SiArchlinux />} />
							), I also like watching movies and tv Shows, My favorite movies
							are <Tag text="Interstellar (2014)" />,
							<Tag text="Fallen Angels (1995)" /> and {""}
							<Tag text="Naked (1993)" />, My fav TV Shows are{" "}
							<Tag text="Mr. Robot" /> (you guessed it right 😅 ) and{" "}
							<Tag text="DARK" />. I Play{" "}
							<Tag text="Chess" icon={<FaChessKnight />} /> from time to time,{" "}
							<Tag text="1600 Rapid" /> Rated. I read{" "}
							<Tag text="Books" icon={<FaBookOpen />} /> in{" "}
							<Tag text="Philosophy" />, <Tag text="Psychologie" /> and{" "}
							<Tag text="Cybersecurity" />. I like classical Music, And last but
							not least, Dark rainy weather is the best (Change My Mind).
						</div>
					</div>
				</section>
				<section
					id="client"
					className="flex flex-col w-full justify-center items-center gap-10 md:min-h-[60vh] min-h-[50vh]">
					<h1 className="text-4xl md:text-6xl font-extrabold text-center">
						Are You Interested in Hiring Me?{" "}
					</h1>
					<button className="py-2 px-3 border bg-zinc-950 dark:bg-zinc-50 shadow rounded dark:text-zinc-950 text-zinc-50 w-auto hover:bg-zinc-700 transition-colors duration-150 dark:hover:bg-zinc-200">
						<Link
							href={"/contact"}
							className="flex gap-2 justify-center items-center">
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
