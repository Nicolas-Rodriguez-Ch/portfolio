import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaBriefcase,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { texts } from "./texts";

export const links = [
  { href: "/", text: texts.homeLink },
  { href: "/projects", text: texts.projectsLink },
  { href: "/contact", text: texts.contactLink },
];


export const socialsLinks = [
  {
    text: "https://github.com/Nicolas-Rodriguez-Ch",
    name: texts.linksGitHub,
    Icon: FaGithub,
  },
  {
    text: "https://www.linkedin.com/in/nicolas-rodriguezc/",
    name: texts.linksLinkedIn,
    Icon: FaLinkedin,
  },
  {
    text: "https://drive.google.com/file/d/1gUTM8mbC_CCuZ2OUObj8uSx0mIIEoLKt/view?usp=sharing",
    name: texts.linksResume,
    Icon: FaBriefcase,
  },
  {
    text: "mailto:nicolasrodriguezch@hotmail.com",
    name: texts.linksEmailHotmail,
    Icon: FaEnvelope,
  },
  {
    text: "mailto:nicolasrodriguezch@gmail.com",
    name: texts.linksEmailGmail,
    Icon: FaEnvelope,
  },
  {
    text: "https://wa.me/573002643270",
    name: texts.linksPhoneNumber,
    Icon: FaWhatsapp,
  },
  { text: "", name: texts.linksLocation, Icon: FaMapMarkerAlt },
];
