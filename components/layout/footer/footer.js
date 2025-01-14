"use server";

import Link from "next/link";
import { Icon, Logo } from "components";
import { socialMediaLinks, sitemap } from "config/footerNavigationItems";
import { montserrat } from "public/fonts/fonts";
import clsx from "clsx";

const Label = async ({ label }) => (
  <p
    className={clsx(
      "text-sm tracking-widest text-slate-100/75",
      montserrat.className,
    )}
  >
    {label}
  </p>
);

export const Footer = async ({ lang }) => {
  return (
    <footer className="flex flex-col border-t-[1px] border-slate-100/10">
      <div className="flex flex-col items-center justify-between px-8 py-2 md:flex-row md:px-24 md:py-4">
        <div className="flex flex-col gap-y-2">
          <Label label="Sitemap" />
          <div>
            {sitemap.map(({ label, href, id }) => (
              <Link
                key={id}
                href={`/${lang}/${href}`}
                className={clsx(
                  "hover:text-primary-200 active:text-primary-300 text-sm transition-colors duration-75",
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between border-t-[1px] border-slate-100/10 px-8 py-2 md:flex-row md:px-24 md:py-4">
        <div className="flex flex-col gap-y-2">
          <Label label="Copyright" />
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Mark Evers
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <Label label="Socials" />
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
                  size={24}
                  weight="duotone"
                  className="transition-colors duration-200 hover:text-sky-200 active:text-sky-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
