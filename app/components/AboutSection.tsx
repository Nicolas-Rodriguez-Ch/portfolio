'use client';
import React, { useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import useOnScreen from '../hooks/useOnScreen';
import { AboutSectionProps } from '@/utils/types';

const AboutSection: React.FC<AboutSectionProps> = ({
  children,
  className = '',
  bgClass = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen({ ref: ref, options: { rootMargin: '0px' } });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 15 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{
        type: 'spring',
        mass: 0.85,
        stiffness: 65,
        ease: [0.17, 0.67, 0.83, 0.67],
      }}
    >
      <section
        className={`pr-5 sm:pr-10 pb-5 sm:pb-10 pl-5 sm:pl-10 border-b border-gray-200 last:border-b-0 w-full ${bgClass} ${className}`}
      >
        {children}
      </section>
    </motion.div>
  );
};

export default AboutSection;
