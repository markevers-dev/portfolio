"use server";

import Link from "next/link";
import { Icon, Logo } from "components";
import { socialMediaLinks } from "config/footerNavigationItems";
import { montserrat } from "public/fonts/fonts";
import clsx from "clsx";

export const Footer = async ({ lang }) => {
  return (
    <footer className="flex flex-col items-center justify-between border-t-[1px] border-slate-100/10 px-8 py-4 md:flex-row md:px-32 md:py-6">
      <Logo lang={lang} />
      <div className="flex flex-col gap-y-2">
        <p
          className={clsx(
            "text-sm tracking-widest text-slate-100/75",
            montserrat.className,
          )}
        >
          Socials
        </p>
        <div className="flex flex-row gap-x-2">
          {socialMediaLinks.map(({ label, href, iconName, id }) => (
            <Link
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} Logo`}
            >
              <Icon
                name={iconName}
                size={28}
                weight="duotone"
                className="transition-colors duration-200 hover:text-sky-200 active:text-sky-300"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
