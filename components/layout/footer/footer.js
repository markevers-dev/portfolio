"use server";

import Link from "next/link";
import { Icon, SocialLink } from "components";
import { socialMediaLinks, sitemap } from "config/footerNavigationItems";
import { montserrat } from "public/fonts/fonts";
import clsx from "clsx";

const Label = async ({ label }) => (
  <p
    className={clsx(
      "text-sm tracking-widest text-slate-900/75 dark:text-slate-100/75",
      montserrat.className,
    )}
  >
    {label}
  </p>
);

export const Footer = async ({ lang }) => (
  <footer className="flex flex-col border-t-[1px] border-slate-900/10 dark:border-slate-100/10">
    <div className="flex flex-col items-start justify-between px-8 py-2 md:flex-row md:items-center md:px-24">
      <div className="flex flex-col gap-y-2">
        <Label label="Sitemap" />
        <div>
          {sitemap.map(({ label, href, id }) => (
            <Link
              key={id}
              href={`/${lang}/${href}`}
              className={clsx(
                "text-sm transition-colors duration-75 hover:text-primary-600 active:text-primary-400 dark:hover:text-primary-200 dark:active:text-primary-300",
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
    <div className="flex flex-col-reverse items-start justify-between gap-y-4 border-t-[1px] border-slate-900/10 px-8 py-2 sm:flex-row sm:items-center md:px-24 dark:border-slate-100/10">
      <div className="flex flex-col gap-y-2">
        <Label label="Copyright" />
        <p className="text-sm">&copy; {new Date().getFullYear()} Mark Evers</p>
      </div>

      <div className="flex flex-col gap-y-2">
        <Label label="Socials" />
        <div className="flex flex-row gap-x-2">
          {socialMediaLinks.map(({ label, href, iconName, id }) => (
            <SocialLink
              key={id}
              label={label}
              href={href}
              iconName={iconName}
              id={id}
            />
          ))}
        </div>
      </div>
    </div>
  </footer>
);
