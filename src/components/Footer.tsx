import Link from "next/link";
import React from "react";

function Footer() {
	const links = [
		{ name: "About", href: "/" },
		{ name: "Projects", href: "/projects" },
		{ name: "Contact", href: "/contact" },
		{ name: "Blog", href: "/blog" },
	];
	return (
		<footer className="bg-transparent h-14">
			<div className="sm:flex-row gap-2 justify-between items-center container mx-auto text-[12px] md:text-[14px] flex py-6 px-4 md:px-0 flex-col">
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
