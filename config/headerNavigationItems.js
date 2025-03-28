import { v4 as uuid } from "uuid";

export const headerNavigationItems = [
  {
    label: "About Me",
    href: "/about",
    iconName: "UserFocus",
    id: uuid(),
    isInactive: true,
  },
  {
    label: "Resume",
    href: "/resume",
    iconName: "ReadCvLogo",
    id: uuid(),
    isInactive: false,
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    iconName: "Briefcase",
    id: uuid(),
    isInactive: true,
  },
];
