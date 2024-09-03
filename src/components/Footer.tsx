import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import React from "react";

function Footer() {
	return (
		<footer
			className={`container mx-auto py-3 h-[10vh] rounded-lg bg-transparent text-[12px] md:text-[18px] flex justify-between items-center ${GeistSans.className}`}>
			<div className="flex flex-col lg:flex-row gap-2 relative justify-between items-center w-full ">
				<div className="dark:border-white relative no-underline duration-300 ease-in ">
					<p className=" text-center">
						&copy; {new Date().getFullYear()} Ismail M. BOUSSEKINE | All Rights
						Reserved
					</p>
				</div>
				<div className="flex gap-2 ">
					<Link href="/" className="hover:underline">
						About
					</Link>
					<span>|</span>
					<Link href="/projects" className="hover:underline">
						Projects
					</Link>
					<span>|</span>
					<Link href="/blog" className="hover:underline">
						Blog
					</Link>
					<span>|</span>
					<Link href="/contact" className="hover:underline">
						Contact
					</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
