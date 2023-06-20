interface paragraph {
  text: string;
}
import React from "react";
import { texts } from "@/utils/texts";

const AboutParagraphs: React.FC<paragraph> = ({ text }) => {
  return (
    <p className="text-base mb-2 sm:text-xl text-wheat leading-8 sm:leading-relaxed text-justify">
      {texts[text]}
    </p>
  );
};

export default AboutParagraphs;
