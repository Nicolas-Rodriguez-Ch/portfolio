import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          introduction: `Hi! I'm Nicolás Rodríguez`,
          bio: `Professional{" "}
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
          and Psychologist with a passion for leveraging Full Stack
          technologies to drive software development and enhance user
          experiences.{" "}
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
          in debugging, code review, and seamless code deployment across
          diverse environments. Track record of crafting sophisticated
          applications, prioritizing continuous development and improvement to
          deliver outstanding results.`,
        },
      },
      es: {
        translation: {
          introduction: `¡Hola! Soy Nicolás Rodríguez.`
        }
      }
    },
  });

export default i18n;
