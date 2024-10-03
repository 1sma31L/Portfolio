/* eslint-disable @next/next/no-img-element */
import {
	SupportedProjectsItems,
	SupportedYoutubeChannels,
} from "@/data/supported-projects";

import AnimatedDiv from "@/components/AnimatedDiv";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { Metadata } from "next";
import React from "react";
import SupportedProjectsCard from "@/components/ui/SupportedProjectsCard";

export const metadata: Metadata = {
	title: "Suppoted Projects",
	description:
		"Check out the projects that I support. These projects are doing great work and need your support.",
};
function SupportedProjects() {
	return (
		<AnimatedDiv id={44}>
			<main className="container mx-auto min-h-[93vh] font-bold text-[24px] sm:text-[32px] py-6 px-4 sm:px-0 flex flex-col gap-5">
				<section>
					<div className="flex gap-3 justify-start items-center px-2">
						<FaHandHoldingHeart className="text-xl md:text-2xl" />
						<h1 className={`text-[26px] md:text-[40px] font-bold`}>
							Supported Projects
						</h1>
					</div>
					<div className="mt-5 flex flex-col justify-center items-center gap-4">
						{SupportedProjectsItems.map(
							({ title, description, link, src }, index) => (
								<SupportedProjectsCard
									title={title}
									description={description}
									link={link}
									src={src}
									key={index}
								/>
							)
						)}
					</div>
				</section>
			</main>
		</AnimatedDiv>
	);
}

export default SupportedProjects;
