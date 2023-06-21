import React from "react";
import { projects } from "@/utils/projects";
import ProjectPreviewCard from "../components/ProjectPreviewCard";

const ProjectPage = () => {
  return (
    <main className="flex flex-col gap-5">
      {projects.map((project) => (
        <ProjectPreviewCard
          key={project.id}
          image={project.image}
          title={project.title}
          summary={project.summary}
          pathName={project.pathName}
          id={project.id}
        />
      ))}
    </main>
  );
};

export default ProjectPage;
