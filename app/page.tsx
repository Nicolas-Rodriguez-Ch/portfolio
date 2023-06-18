"use client";
import Image from "next/image";
import React from "react";
import styles from "./styles/page.module.scss";
import { useRouter } from "next/navigation";
import { assets } from "@/utils/assets";

const HomePage = () => {
  const router = useRouter();

  return (
    <main className="flex flex-col sm:flex-row gap-5 bg-blue-custom text-gray-100">
      <Image
        src={assets.mainPhoto}
        alt="Nicolás Rodriguez"
        width={511}
        height={500}
        quality={100}
      />
      <div className="p-4 space-y-4 mx-auto sm:max-w-xl lg:max-w-3xl">
        <h1 className="mt-10 sm:mt-20 text-4xl text-center font-bold text-eggshell ">
          {`Hi! I'm Nicolás Rodríguez!`}
        </h1>
        <p className="text-base sm:text-xl text-wheat leading-8 sm:leading-relaxed text-justify">
          Professional{" "}
          <span className={styles.underlineHighlight}>
            Web Developer
            <svg
              className={styles.underline}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 20"
            >
              <path
                d="M0,10 Q60,10 120,15"
                stroke="#ef3f3f"
                strokeWidth="3"
                fill="transparent"
              />
            </svg>
          </span>{" "}
          and Psychologist with a passion for leveraging Full Stack technologies
          to drive software development and enhance user experiences.{" "}
          <span className={styles.underlineHighlight}>
            Proficient
            <svg
              className={styles.underline}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 20"
            >
              <path
                d="M0,10 Q60,10 120,15"
                stroke="#ef3f3f"
                strokeWidth="3"
                fill="transparent"
              />
            </svg>
          </span>{" "}
          in debugging, code review, and seamless code deployment across diverse
          environments. Track record of crafting sophisticated applications,
          prioritizing continuous development and improvement to deliver
          outstanding results.
        </p>
        <p className="text-l sm:text-xl text-wheat leading-9 sm:leading-normal text-justify">
          {`I'm a gamer, board game enthusiast, movie buff, and all-around nerd who speaks English and Spanish fluently. I love to laugh and have fun. Join me on this journey of growth, laughter, and nerdiness!`}
        </p>
        <div className="text-center">
          <button
            className="w-full sm:w-auto bg-baby-blue hover:bg-blue-700 text-eggshell font-bold py-4 px-4 rounded sm:mt-4"
            onClick={() => router.push("/contact")}
          >
            Get in touch with me!
          </button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
