import { CiLocationArrow1 } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa6';
import Icons from '@/data/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
function ProjectCard({
  title,
  description,
  techStack,
  previewLink,
  githubLink,
}: {
  title: string;
  description: string;
  techStack: string[];
  previewLink: string;
  githubLink?: string;
}) {
  return (
    <div className="flex flex-col gap-4 p-4 border border-l-accent border-l-2 rounded-r-lg bg-background">
      <div className="flex gap-2 text-[22px] md:text-[28px]">
        <h2 className="font-bold capitalize text-foreground">{title}</h2>
      </div>
      <p className="text-[14px] md:text-[18px] text-muted-foreground">
        {description}
      </p>
      <div className="flex gap-2 flex-wrap">
        {techStack.map((tech) => (
          <div
            key={tech}
            className="border border-border rounded-sm px-2 py-1 text-[10px] sm:text-[12px] md:text-[14px] bg-card text-card-foreground flex justify-start items-center gap-2">
            {tech in Icons ? (
              <Image
                width={50}
                height={50}
                priority
                src={Icons[tech]}
                alt={tech}
                className="w-4 h-4 rounded-sm"
              />
            ) : null}
            <p>{tech}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {previewLink && (
          <Link href={previewLink} target="_blank">
            <button className="group px-2 py-1 border border-primary bg-primary text-primary-foreground rounded-sm text-[14px] md:text-[18px] flex gap-2 items-center duration-300 transition-all hover:opacity-90">
              <p>Preview</p>
              <CiLocationArrow1 className="text-lg md:text-xl" />
            </button>
          </Link>
        )}
        {githubLink && (
          <Link href={githubLink} target="_blank">
            <button className="group px-2 py-1 border bg-card text-foreground rounded-sm text-[14px] md:text-[18px] flex gap-2 items-center duration-300 transition-all hover:opacity-90">
              <FaGithub className="text-md md:text-xl" />
              <p>Github</p>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
