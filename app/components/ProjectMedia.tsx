'use client';
import { ProjectMediaType } from '@/utils/types';
import Image from 'next/image';
import React from 'react';
import ReactPlayer from 'react-player';

const ProjectMedia: React.FC<ProjectMediaType> = ({ image, video, title }) => {
  return (
    <div className='md:w-1/2 flex flex-col gap-4 '>
      <Image
        src={image as string}
        width={650}
        height={365}
        alt={title as string}
      />
      {video ? <ReactPlayer url={video} width='100%' controls={true} /> : null}
    </div>
  );
};

export default ProjectMedia;
