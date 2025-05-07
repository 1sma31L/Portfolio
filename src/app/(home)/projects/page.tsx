import AnimatedDiv from '@/components/AnimatedDiv';
import { CgSandClock } from 'react-icons/cg';
import { FaTerminal } from 'react-icons/fa';
import { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import React, { ReactNode } from 'react';
import projectsData from '@/data/projects';
import upcomingProjectsData from '@/data/upcoming-projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my completed web development projects and stay updated on upcoming ones. Featuring React, Next.js, And full-stack applications.',
};

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  previewLink?: string;
  githubLink?: string;
}

interface ProjectListProps {
  title: string;
  projects: Project[];
  icon: ReactNode;
}

const ProjectList: React.FC<ProjectListProps> = ({ title, projects, icon }) => (
  <>
    <div className="flex gap-3 items-center px-2">
      {icon}
      <h1 className="text-[30px] md:text-[40px] font-bold">{title}</h1>
    </div>
    <div className="flex flex-col gap-4 py-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
          previewLink={project.previewLink || ''}
          githubLink={project.githubLink || ''}
        />
      ))}
    </div>
  </>
);

function Projects() {
  return (
    <AnimatedDiv id={1}>
      <main className="container min-h-[85vh] py-6 px-4 md:px-0">
        <ProjectList
          title="Projects"
          projects={projectsData}
          icon={<FaTerminal className="text-xl md:text-2xl" />}
        />
        {upcomingProjectsData.length > 0 && (
          <>
            <hr className="my-10" />
            <ProjectList
              title="Working On"
              projects={upcomingProjectsData}
              icon={<CgSandClock className="text-xl md:text-3xl mb-1" />}
            />
          </>
        )}
      </main>
    </AnimatedDiv>
  );
}

export default Projects;
