import { assets } from "@/utils/assets";
import { texts, stack, ABOUT_PARAGRAPHS } from "@/utils/texts";
import { experiences, education } from "@/utils/experience";
import { socialsLinks } from "@/utils/links";
import Image from "next/image";
import React from "react";
import ExperienceBlock from "../components/ExperienceBlock";
import EducationBlock from "../components/EducationBlock";
import SocialsLinks from "../components/SocialsLinks";
import AboutParagraphs from "../components/AboutParagraphs";
import AboutSection from "../components/AboutSection";

const ContactPage = () => {
  return (
    <main className="flex-col">
      <div className="flex flex-col lg:flex-row items-end sm:items-center">
        <picture className="flex-shrink-0">
          <Image
            alt="Nicolás Rodríguez"
            src={assets.mainPhoto}
            quality={100}
            width={500}
            height={450}
            className="p-5 sm:p-10"
          />
        </picture>
        <AboutSection className="border-b border-gray-200 last:border-b-0">
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <AboutParagraphs key={paragraph} text={paragraph} />
          ))}
        </AboutSection>
      </div>
      <div className="w-full">
        <AboutSection bgClass="bg-eggshell">
          <h1 className="pt-5 sm:pt-5 text-4xl text-center font-bold text-blue-custom-darken">
            {texts.aboutTechSkills}
          </h1>
          <ul className="list-disc pl-5 md:flex md:gap-4 md:justify-between md:flex-wrap lg:justify-evenly lg:gap-6">
            {stack.map((item) => (
              <li
                key={item}
                className="text-base mb-2 sm:text-xl text-blue-custom leading-8 sm:leading-relaxed text-justify transition-all duration-500 md:pt-6"
              >
                {item}
              </li>
            ))}
          </ul>
        </AboutSection>
        <AboutSection className="bg-wheat">
          <h1 className="pt-5 sm:pt-5 text-4xl text-center font-bold text-blue-custom">
            {texts.aboutExp}
          </h1>
          {experiences.map((experience) => (
            <ExperienceBlock
              key={experience.title}
              title={experience.title}
              subtitle={experience.subtitle}
              description={experience.description}
              dates={experience.dates}
            />
          ))}
          <h1 className="pt-5 sm:pt-5 text-4xl text-center font-bold text-blue-custom">
            {texts.aboutEdu}
          </h1>
          <div className="md:flex justify-between">
            {education.map((education) => (
              <EducationBlock
                key={education.title}
                title={education.title}
                institution={education.institution}
                year={education.year}
              />
            ))}
          </div>
        </AboutSection>
        <AboutSection>
          <h1 className="pt-5 sm:pt-5 text-4xl text-center font-bold text-eggshell">
            {texts.aboutLinks}
          </h1>
          <div className="md:flex gap-10 md:flex-wrap">
            {socialsLinks.map((link) => (
              <SocialsLinks
                key={link.name}
                name={link.name}
                text={link.text}
                Icon={link.Icon}
              />
            ))}
          </div>
        </AboutSection>
      </div>
    </main>
  );
};

export default ContactPage;
