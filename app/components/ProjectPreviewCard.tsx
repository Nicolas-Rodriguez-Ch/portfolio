'use client'
import { links } from "@/utils/links";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Project {
  id: number;
  title: string;
  summary: string;
  image: string;
  pathName: string;
}

const ProjectPreviewCard: React.FC<Project> = ({
  id,
  image,
  title,
  summary,
  pathName,
}) => {
  const isEven = id % 2 === 0;
  const bgClass = isEven ? "bg-eggshell" : "";
  const textClass = isEven ? "text-blue-custom-darken" : "text-eggshell";

  return (
    <main className="w-full overflow-hidden shadow-md">
      <div className={`p-4 ${bgClass}`}>
        <Link
          href={`${links[1].href}/${pathName}`}
          className={`flex flex-col md:flex-row items-center gap-4 p-4 transition-transform transform hover:scale-105`}
        >
          <div className="w-full md:w-1/2">
            <Image
              className="rounded-lg object-cover p-2 w-full h-auto"
              width={700}
              height={700}
              src={image}
              alt={title}
            />
          </div>
          <div>
            <h3 className={`text-lg font-bold ${textClass}`}>{title}</h3>
            <p className={`text-sm ${textClass}`}>{summary}</p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default ProjectPreviewCard;
