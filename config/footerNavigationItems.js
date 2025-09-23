import { v4 as uuid } from "uuid";

export const socialMediaLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mark-evers-dev/",
    iconName: "LinkedinLogo",
    id: uuid(),
  },
  {
    label: "GitHub",
    href: "https://github.com/markevers-dev",
    iconName: "GithubLogo",
    id: uuid(),
  },
  {
    label: "Email",
    href: "mailto:contact-markevers@proton.me",
    iconName: "Envelope",
    id: uuid(),
  },
];

export const sitemap = [
  {
    label: "Home",
    href: "",
    id: uuid(),
  },
  {
    label: "Resume",
    href: "/resume",
    id: uuid(),
  },
];
