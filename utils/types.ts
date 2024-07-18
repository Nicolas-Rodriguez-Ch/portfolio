import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface ExperienceObj {
  title: string;
  subtitle: string;
  description: string;
  dates: string;
}
export interface EducationObj {
  title: string;
  institution: string;
  year: number;
}
export interface Project {
  id: number;
  title: string;
  summary: string;
  image: string;
  pathName: string;
}

export interface Links {
  name: string;
  text: string;
  Icon: IconType;
}

export interface ProjectMediaType {
  image: string;
  video?: string;
  title: string;
}
export interface LinkPropsInterface {
  href: string;
  text: string;
  toggleMenu: () => void;
  pathname: string;
}

export interface AboutSectionProps {
  children: ReactNode;
  className?: string;
  bgClass?: string;
}
export type TextsType = {
  [key: string]: string;
};