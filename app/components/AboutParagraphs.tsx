'use server';
import React from 'react';
import { texts } from '@/utils/texts';
interface paragraph {
  text: string;
}

const AboutParagraphs: React.FC<paragraph> = async ({ text }) => {
  return (
    <p className='text-lg mb-2 sm:text-xl text-wheat leading-8 sm:leading-relaxed text-justify'>
      {texts[text]}
    </p>
  );
};

export default AboutParagraphs;
