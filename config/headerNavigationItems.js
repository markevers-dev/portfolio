import { v4 as uuid } from "uuid";

export const headerNavigationItems = [
  {
    label: "Portfolio",
    href: "/portfolio",
    iconName: "Briefcase",
    id: uuid(),
    isInactive: false,
  },
  {
    label: "Resume",
    href: "/resume",
    iconName: "ReadCvLogo",
    id: uuid(),
    isInactive: false,
  },
];
