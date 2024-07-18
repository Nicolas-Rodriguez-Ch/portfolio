'use server';
import { Links } from '@/utils/types';
import React from 'react';
const SocialsLinks: React.FC<Links> = ({ name, text, Icon }) => {
  return (
    <div className='p-4'>
      <a
        className='flex items-center gap-4 text-lg  text-eggshell'
        target='_blank'
        rel='noopener noreferrer'
        href={text}
      >
        <Icon className='w-6 h-6' />
        <span className='font-bold break-all'>{name}</span>
      </a>
    </div>
  );
};

export default SocialsLinks;
