"use client";
import Image from "next/image";
import React from "react";
import styles from "./styles/page.module.scss";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return (
    <main className="flex flex-col sm:flex-row gap-5 bg-blue-custom text-gray-100">
      <Image
        src={
          "https://res.cloudinary.com/dhyu9pxjh/image/upload/v1685655295/gmccma8xxqg1vxg0okek.jpg"
        }
        alt="Nicolás Rodriguez"
        width={481}
        height={481}
        quality={100}
      />
      <div className="p-4 space-y-4">
        <h1 className="mt-10 sm:mt-20 text-4xl text-center font-bold text-eggshell">{`Hi! I'm Nicolás Rodríguez`}</h1>
        <p className="text-xl text-wheat leading-9">
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
        <p className="text-xl text-wheat leading-9">More Creative Text</p>
        <div className="text-center">
          <button
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push("/projects")}
          >
            Check out my projects!
          </button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
