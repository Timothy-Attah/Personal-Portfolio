import { INavItem } from "@/utils/interface";

export const navbarData: INavItem[] = [
  {
    linkName: "About",
    linkPath: "/about",
  },
  {
    linkName: "Services",
    linkPath: "/services",
  },
  {
    linkName: "Projects",
    linkPath: "/projects",
  },
  {
    linkName: "Contact",
    linkPath: "/contact",
  },
] as const;

// type INavItem = typeof navbarData[number]
