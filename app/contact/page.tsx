"use client";
import { useState, useEffect, useRef } from "react";
import { assets } from "@/utils/assets";
import { texts, stack } from "@/utils/texts";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    console.log(isIntersecting);
    observer.observe(ref.current as Element);
    return () => observer.disconnect();
  }, [isIntersecting]);

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
          <ul className="list-disc pl-5">
            {stack.map((item) => (
              <li
                key={item}
                className="text-base mb-2 sm:text-xl text-blue-custom leading-8 sm:leading-relaxed text-justify transition-all duration-500"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="pr-5 sm:pr-10 pb-5 sm:pb-10 pl-5 sm:pl-10 border-b border-gray-200 last:border-b-0 w-full">
          <h1>Experience and education</h1>
        </section>
        <section className="pr-5 sm:pr-10 pb-5 sm:pb-10 pl-5 sm:pl-10 border-b border-gray-200 last:border-b-0 w-full">
          <h1>Links</h1>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
