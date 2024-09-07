import Link from "next/link";
import React from "react";

function Footer() {
	const links = [
		{ name: "About", href: "/" },
		{ name: "Projects", href: "/projects" },
		{ name: "Blog", href: "/blog/#header" },
		{ name: "Contact", href: "/contact/#header" },
	];
	return (
		<footer
			className={`container mx-auto h-[10vh] mb-5  rounded-lg text-xs md:text-sm flex justify-center items-center p-4 md:px-0 flex-col `}>
			<div className="flex flex-col sm:flex-row gap-2 justify-between items-center w-full border rounded sm:rounded-sm p-4">
				<p className=" text-center">
					Contact me at{" "}
					<Link
						href={"mailto:im.boussekine@gmail.com"}
						className="font-bold hover:underline">
						im.boussekine@gmail.com
					</Link>
				</p>
				<div className="flex gap-2 ">
					{links.map((link) => {
						return (
							<Link
								key={link.name}
								href={link.href}
								className="hover:underline">
								{link.name}
							</Link>
						);
					})}
				</div>
			</div>
		</footer>
	);
}

export default Footer;
