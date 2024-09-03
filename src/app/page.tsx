/* eslint-disable @next/next/no-img-element */
import { GeistSans } from "geist/font/sans";
import React from "react";
import Link from "next/link";
import SocialMedia from "@/data/social-media";
function Home() {
	return (
		<main className="container pb-6 pt-10 min-h-[83vh] px-4 md:px-0">
			<div className="flex flex-col gap-2">
				<img src="me.png" alt="" className={`rounded-full w-[150px] `} />

				<div className="flex justify-start items-center gap-2 sm:gap-4 mb-4">
					<h1
						className={`${GeistSans.className} text-[27px] sm:text-[44px] font-bold inline-block`}>
						Ismail M. BOUSSEKINE
					</h1>
					<Link
						href={"https://linkedin.com/in/ismail-boussekine"}
						target="_blank">
						<p className="font-bold dark:bg-white dark:text-black bg-black text-white px-2 py-1 rounded-full text-[8px] sm:text-[14px] hidden sm:inline-block hover:scale-105 transition-all duration-300 shadow-md">
							Available
						</p>
					</Link>
				</div>

				<div className="text-[14px] sm:text-[18px] flex flex-col gap-5 leading-[1.6]">
					<blockquote className="border-l-4 border-gray-800 pl-4 italic text-gray-700 dark:text-gray-300">
						<p className="font-bold">
							&quot;An idiot admires complexity, a genius admires
							simplicity.&quot;
						</p>
						<footer className="mt-2 text-gray-600 dark:text-gray-400">
							— Albert Einstein
						</footer>
					</blockquote>
					<p className="indent-5">
						<span className="font-bold">Hey There! 👋🏻</span>, I am a stuedent at
						the National Higher School of Advance Technoloiges (ENSTA),
						Full-Stack Developer and Cybersecurity Enthusiast. Based in Algeria
						🇩🇿
					</p>

					<p className="indent-5">
						They say you can&apos;t steal a house if you don&apos;t own one.
						That&apos;s why I began learning web development (Back-End) seeking
						a deeper understanding of the web to get better at pentesting. Along
						the way, I discovered a passion for creating beautiful and simple
						websites. And here I am, a Full-Stack Developer.
					</p>
					<div className="flex flex-row gap-2 flex-wrap mt-8">
						{SocialMedia.map((item, index) => (
							<Link
								href={item.url}
								key={item.name}
								target="_blank"
								className="border border-zinc-100 dark:border-zinc-800 flex flex-row justify-between items-center gap-2 px-2 py-2  dark:hover:bg-zinc-800 hover:bg-zinc-200 rounded-md shadow-md transition-all duration-300">
								<p className="text-lg ">{item.icon}</p>
								<p className={`text-sm hidden sm:block ${GeistSans.className}`}>
									{item.name}
								</p>
							</Link>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;
