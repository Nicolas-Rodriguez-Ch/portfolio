import React, { ReactNode } from "react";
interface AboutSectionProps {
  children: ReactNode;
  className?: string;
  bgClass?: string;
}
const AboutSection: React.FC<AboutSectionProps> = ({
  children,
  className = "",
  bgClass = "",
}) => {
  return (
    <section
      className={`pr-5 sm:pr-10 pb-5 sm:pb-10 pl-5 sm:pl-10 border-b border-gray-200 last:border-b-0 w-full ${bgClass} ${className}`}
    >
      {children}
    </section>
  );
};

export default AboutSection;
