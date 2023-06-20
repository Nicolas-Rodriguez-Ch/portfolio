import React from "react";

interface Experience {
  title: string;
  subtitle: string;
  description: string;
  dates: string;
}

const ExperienceBlock: React.FC<Experience> = ({
  title,
  subtitle,
  description,
  dates,
}) => {
  return (
    <main className="md:text-justify p-4 sm:p-8">
      <h3 className="pt-3 text-xl sm:text-2xl font-bold text-blue-custom">{title}</h3>
      <h4 className="pt-1 text-lg sm:text-xl text-blue-custom-darken">{subtitle}</h4>
      <p className="pt-1 text-md sm:text-lg text-blue-custom">{dates}</p>
      <p className="pt-1 text-md sm:text-lg text-blue-custom-darken">{description}</p>
    </main>
  );
};

export default ExperienceBlock;