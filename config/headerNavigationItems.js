import { v4 as uuid } from "uuid";

export const headerNavigationItems = [
  {
    label: "Portfolio",
    href: "/portfolio",
    iconName: "Briefcase",
    id: uuid(),
  },
  {
    label: "About Me",
    href: "/about",
    iconName: "UserFocus",
    id: uuid(),
  },
  {
    label: "Contact",
    href: "/contact",
    iconName: "AddressBook",
    id: uuid(),
  },
  {
    label: "Resume",
    href: "/resume",
    iconName: "ReadCvLogo",
    id: uuid(),
  },
];
