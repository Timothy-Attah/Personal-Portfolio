import { StaticImageData } from "next/image";

export interface INavItem {
  linkName: string;
  linkPath: string;
}

export interface ISkillsItem {
  imageUrl: string;
  name: string;
  type: string;
}

interface IProcessItem {
  step: string;
  title: string;
  text?: string;
}

export interface IRoadmapItem {
  title: string;
  desc: string;
  process: IProcessItem[];
}

export interface IFAQItem {
  question: string;
  answer: string;
}

export interface IFaqsProps {
  faqsData: IFAQItem[];
  faqPix: string | StaticImageData;
}

export interface IServicesItem {
  title: string;
  desc: string;
  lists: string[];
  size: "big" | "small";
  image: string;
}

// export interface IProjectsItem {
//   image: StaticImageData | string;
//   name: string;
//   category?: string;
//   description: string;
//   githubLink: string | null;
//   livePreview: string;
//   stacks: string[];
//   role: string;
//   privateProject: boolean;
//   highlights: string[];
//   color?: string;
//   colorRGB?: string;
// }

export interface IProjectsItem {
  image: string;
  name: string;
  category: string;
  description: string;
  stacks: string[];
  role: string;
  githubLink: string | null;
  privateProject?: boolean;
  livePreview?: string;
  highlights: string[];
  featured?: boolean;
}

export interface IAlertProps {
  text: string;
  type: string;
  show?: boolean
}
