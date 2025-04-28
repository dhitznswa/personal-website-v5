import React from "react";
import Image from "next/image";
import { Eye } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ShineBorder } from "./magicui/shine-border";

interface ProjectType {
  name: string;
  description: string;
  image: string;
  url: string;
  repo: string;
  tech: string[];
}

const Projects: ProjectType[] = [
  {
    name: "Infolokerhub.com",
    description: "Job vacancy information media platform in Indonesia.",
    image: "/images/projects/infolokerhub.png",
    url: "https://www.infolokerhub.com",
    repo: "-",
    tech: ["NextJS", "TailwindCSS", "Typescript"],
  },
  {
    name: "Infolokerhub.com",
    description: "Job vacancy information media platform in Indonesia.",
    image: "/images/projects/infolokerhub.png",
    url: "https://www.infolokerhub.com",
    repo: "-",
    tech: ["NextJS", "TailwindCSS", "Typescript"],
  },
];

function DetailProject({
  children,
  project,
}: {
  children: React.ReactNode;
  project: ProjectType;
}) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="max-w-xl w-full text-sm font-poppins tracking-wide">
          <DialogHeader>
            <DialogTitle>Detail Project</DialogTitle>
            <DialogDescription>Project Name: {project.name}</DialogDescription>
          </DialogHeader>
          <div className="py-1">
            <Image
              src={project.image}
              alt={project.name}
              width={1000}
              height={1000}
              className="rounded-lg aspect-[16/9] object-cover"
            />
            <div className="flex flex-col gap-2 mt-4">
              <h4 className="font-semibold">Description</h4>
              <p>{project.description}</p>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <h4 className="font-semibold">Tech Stack</h4>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-hli/20 text-hli px-2 py-1 rounded-lg text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button asChild variant="outline">
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </Button>
            <Button asChild>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function ProjectSection() {
  return (
    <>
      <h5 className="font-semibold">My Projects</h5>
      <h3 className="font-bold text-lg text-hli leading-5 mt-2">
        Here are some projects i have worked on.
      </h3>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {Projects.map((project, i) => (
          <div
            className="col-span-1 group p-2 rounded-lg bg-background shadow-md relative overflow-hidden cursor-zoom-in"
            key={i}
          >
            <ShineBorder shineColor={["#008080", "#FE8FB5", "#FFBE7B"]} />
            <DetailProject project={project}>
              <div className="w-full h-full relative">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-foreground/70 text-background transition-opacity duration-300 group-hover:opacity-100 opacity-0 rounded-lg flex items-center justify-center gap-2">
                  <span>
                    <Eye />
                  </span>
                  <span>Detail Project</span>
                </div>
                <Image
                  src={project.image}
                  alt={project.name}
                  width={1000}
                  height={1000}
                  className="rounded-lg aspect-[16/9] object-cover"
                />
              </div>
            </DetailProject>
          </div>
        ))}
      </div>
    </>
  );
}
