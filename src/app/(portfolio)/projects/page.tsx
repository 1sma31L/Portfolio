import { Metadata } from "next";
import React from "react";
import upcomingProjects from "@/data/upcoming-projects";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import AnimatedDiv from "@/components/AnimatedDiv";
import { FaTerminal } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";

export const generateMetadata = async (): Promise<Metadata> => ({
	title: "Projects",
	description:
		"Explore my completed web development projects and stay updated on upcoming ones. Featuring React, Next.js, and full-stack applications.",
	icons: {
		icon: "/favicon.ico",
	},
});

export const generateStaticParams = async () => {
	return [{}]; // Return an array with an empty object for static pages
};

function Projects() {
	return (
		<AnimatedDiv id={1}>
			<main className="container min-h-[85vh] py-6 px-4 md:px-0">
				<div className="flex gap-3 justify-start items-center px-2">
					<FaTerminal className="text-xl md:text-2xl" />
					<h1 className={`text-[30px] md:text-[40px] font-bold`}>Projects</h1>
				</div>
				<div className="flex flex-col gap-4 py-4">
					{projects.map((project) => (
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							techStack={project.techStack}
							previewLink={project.previewLink}
							githubLink={project.githubLink}
						/>
					))}
				</div>
				<hr className="my-10" />
				<div className="flex gap-3 items-center px-2">
					<CgSandClock className="text-xl md:text-3xl" />
					<h1 className={`text-[30px] md:text-[40px] font-bold `}>
						Upcoming Projects
					</h1>
				</div>
				<div className="flex flex-col gap-2 py-4">
					{upcomingProjects.map((project) => (
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							techStack={project.techStack}
							previewLink={project.previewLink}
							githubLink={project.githubLink}
						/>
					))}
				</div>
			</main>
		</AnimatedDiv>
	);
}

export default Projects;
