"use client";
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
interface ProjectMedia {
  image: string;
  video?: string;
  title: string;
}

const ProjectMedia: React.FC<ProjectMedia> = ({ image, video, title }) => {
  return (
    <div className="md:w-1/2 flex flex-col gap-4 ">
      <Image
        src={image as string}
        width={650}
        height={365}
        alt={title as string}
      />
      {video ? <ReactPlayer url={video} width="100%" controls={true} /> : null}
    </div>
  );
};

export default ProjectMedia;
