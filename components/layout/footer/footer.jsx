"use server";

import Link from "next/link";
import { Icon } from "components";
import { socialMediaLinks } from "config/footerNavigationItems";

export const Footer = async ({ lang }) => {
  return (
    <footer className="flex flex-col items-center justify-between border-t-[1px] border-slate-100/10 p-4 md:flex-row md:p-6">
      <p>Footer</p>
      <div className="flex flex-row space-x-2">
        {socialMediaLinks.map(({ label, href, iconName, id }) => (
          <Link key={id} href={href} target="_blank" rel="noopener noreferrer">
            <Icon
              name={iconName}
              size={28}
              weight="duotone"
              className="transition-colors duration-200 hover:text-primary-200 dark:hover:text-primary-200"
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};
