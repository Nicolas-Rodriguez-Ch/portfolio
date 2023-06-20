"use client";
import { assets } from "@/utils/assets";
import { texts, stack } from "@/utils/texts";
import { experiences, education } from "@/utils/experience";
import { socialsLinks } from "@/utils/socialLinks";
import Image from "next/image";
import React from "react";
import ExperienceBlock from "../components/ExperienceBlock";
import EducationBlock from "../components/EducationBlock";
import SocialsLinks from "../components/SocialsLinks";

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
        <section className="border-b border-gray-200 last:border-b-0 pt-5 sm:pt-10 pr-5 sm:pr-10 pb-5 sm:pb-10 pl-5 sm:pl-10">
          <p className="text-base mb-2 sm:text-xl text-wheat leading-8 sm:leading-relaxed text-justify">
            {texts.aboutIntro1}
          </p>
          <p className="text-base mb-2 sm:text-xl text-wheat leading-8 sm:leading-relaxed text-justify">
            {texts.aboutIntro2}
          </p>
          <p className="text-base mb-2 sm:text-xl text-wheat leading-8 sm:leading-relaxed text-justify">
            {texts.aboutIntro3}
          </p>
          <p className="text-base mb-2 sm:text-xl text-wheat leading-8 sm:leading-relaxed text-justify">
            {texts.aboutIntro4}
          </p>
        </section>
      </div>
      <div className="w-full">
        <section className="pr-5 sm:pr-10 pb-5 sm:pb-10 pl-5 sm:pl-10 border-b border-gray-200 last:border-b-0 w-full bg-eggshell">
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
        </section>
        <section className="pr-5 sm:pr-10 pb-5 sm:pb-10 pl-5 sm:pl-10 border-b border-gray-200 last:border-b-0 w-full bg-wheat">
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
        </section>
        <section className="pr-5 sm:pr-10 pb-5 sm:pb-10 pl-5 sm:pl-10 border-b border-gray-200 last:border-b-0 w-full">
          <h1 className="pt-5 sm:pt-5 text-4xl text-center font-bold text-eggshell">
            Links
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
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
