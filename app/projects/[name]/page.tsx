"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { projects } from "@/utils/projects";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import ProjectMedia from "@/app/components/ProjectMedia";
import ProjectDescription from "@/app/components/ProjectDescription";
import { texts } from "@/utils/texts";

const IndiividualProjectPage = () => {
  const pathname = usePathname();
  const pathName = pathname.split("/")[2];
  const project = projects.find((project) => {
    return project.pathName === pathName;
  });

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-wheat mt-4 mb-4 text-center">
          {texts.projectsErrorTitle}
        </h1>
        <p className="font-semibold text-xl mb-2">{texts.projectsErrorP}</p>
        <Link
          href="/projects"
          className="w-full sm:w-auto bg-baby-blue hover:bg-blue-700 text-eggshell font-bold py-2 px-4 rounded mt-4 text-center md:mb-5"
        >
          {texts.projectsButton}
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <main className="p-4 md:flex md:flex-row md:gap-8">
        <ProjectMedia
          title={project?.title as string}
          image={project?.image as string}
          video={project?.video}
        />
        <div className="md:w-1/2 mt-6 md:mt-0 text-eggshell text-center md:text-justify">
          <h1 className="text-3xl md:text-4xl font-bold text-wheat mt-4 mb-4 text-center">
            {project ? project.title : null}
          </h1>
          <p className="font-semibold text-xl mb-2">
            {texts.projectsDescription}
          </p>
          {project ? (
            <ProjectDescription description={project.description} />
          ) : null}
          <p className="font-semibold text-xl mb-2">
            {texts.projectsLinks}
            {project && project?.repos.length > 1 ? "s" : ""}.
          </p>
          <ul className="list-none flex flex-col gap-5 items-center md:items-start md:flex-row">
            {project
              ? project.repos.map((repo) => (
                  <li key={repo.name} className="flex items-center gap-2">
                    <FaGithub className="text-wheat" />
                    <a
                      href={repo.value}
                      target="_blank"
                      className="cursor-pointer text-wheat hover:text-eggshell"
                    >
                      {repo.name}
                    </a>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </main>
      <Link
        href="/projects"
        className="w-full sm:w-auto bg-baby-blue hover:bg-blue-700 text-eggshell font-bold py-2 px-4 rounded mt-4 text-center md:mb-5"
      >
        {texts.projectsButton}
      </Link>
    </div>
  );
};

export default IndiividualProjectPage;
