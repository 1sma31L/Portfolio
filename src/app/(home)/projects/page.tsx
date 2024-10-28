import AnimatedDiv from "@/components/AnimatedDiv";
import { CgSandClock } from "react-icons/cg";
import { FaTerminal } from "react-icons/fa";
import { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import React from "react";
import projects from "@/data/projects";
import upcomingProjects from "@/data/upcoming-projects";

export const metadata: Metadata = {
	title: "Projects",
	description:
		"Explore my completed web development projects and stay updated on upcoming ones. Featuring React, Next.js, And full-stack applications.",
};

function Projects() {
	return (
		<AnimatedDiv id={1}>
			<main className="container min-h-[85vh] py-6 px-4 md:px-0">
				<div className="flex gap-3 justify-start items-center px-2">
					<FaTerminal className="text-xl md:text-2xl" />
					<h1 className="text-[30px] md:text-[40px] font-bold">Projects</h1>
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
					<CgSandClock className="text-xl md:text-3xl mb-1" />
					<h1 className="text-[30px] md:text-[40px] font-bold">Working On</h1>
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
