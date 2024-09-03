import Link from "next/link";
import React from "react";

function Footer() {
	return (
		<footer
			className={`container mx-auto py-5 h-[15vh] rounded-lg text-xs md:text-sm flex justify-between items-center px-4 md:px-0`}>
			<div className="flex flex-col sm:flex-row gap-2 justify-between items-center w-full ">
				<div className="dark:border-white no-underline duration-300 ease-in ">
					<p className=" text-center">
						Contact me at{" "}
						<Link href={"mailto:im.boussekine@gmail.com"} className="font-bold">
							im.boussekine@gmail.com
						</Link>
					</p>
				</div>
				<div className="flex gap-2 ">
					<Link href="/" className="hover:underline">
						About
					</Link>
					<Link href="/projects" className="hover:underline">
						Projects
					</Link>
					<Link href="/blog" className="hover:underline">
						Blog
					</Link>
					<Link href="/contact" className="hover:underline">
						Contact
					</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
