interface Education {
  title: string;
  institution: string;
  year: number;
}

import React from "react";
import { texts } from "../../utils/texts";

const EducationBlock: React.FC<Education> = ({ title, institution, year }) => {
  return (
    <main className="md:text-justify p-4 sm:p-8">
      <h3 className="pt-3 text-xl sm:text-2xl font-bold text-blue-custom">
        {title}
      </h3>
      <p className="pt-1 text-md sm:text-lg text-blue-custom-darken">
        {institution}
      </p>
      <p className="pt-1 text-md sm:text-lg text-blue-custom-darken">
        {texts.aboutGraduation}: {year}
      </p>
    </main>
  );
};

export default EducationBlock;
