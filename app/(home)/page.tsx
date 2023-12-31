"use client";
import Image from "next/image";
import React from "react";
import styles from "../styles/page.module.scss";
import { useRouter } from "next/navigation";
import { assets } from "@/utils/assets";
import { texts } from "@/utils/texts";

const HomePage = () => {
  const router = useRouter();

  return (
    <main className="flex flex-col lg:flex-row md:items-center gap-5 bg-blue-custom text-gray-100">
      <Image
        src={assets.mainPhoto}
        alt="Nicolás Rodriguez"
        width={511}
        height={500}
        quality={100}
      />
      <div className="p-4 space-y-4 mx-auto sm:max-w-xl lg:max-w-3xl">
        <h1 className="mt-10 sm:mt-20 text-4xl text-center font-bold text-eggshell ">
          {texts.homeIntro}
        </h1>
        <p className="text-base sm:text-xl text-wheat leading-8 sm:leading-relaxed text-justify">
          {texts.homeProfessional + " "}
          <span className={styles.underlineHighlight}>
            {texts.homeWebDev}
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
          </span>
          {" " + texts.homeBio + " "}
          <span className={styles.underlineHighlight}>
            {texts.homeProficient}
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
          </span>
          {" " + texts.homeBioCont}
        </p>
        <p className="text-l sm:text-xl text-wheat leading-9 sm:leading-normal text-justify">
          {texts.homeBio2}
        </p>
        <div className="text-center">
          <button
            className="w-full sm:w-auto bg-baby-blue hover:bg-blue-700 text-eggshell font-bold py-4 px-4 rounded sm:mt-4"
            onClick={() => router.push("/contact")}
          >
            {texts.homeButton}
          </button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
