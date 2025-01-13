"use server";

import { ThemeSelector, Icon, Logo } from "components";
import { montserrat } from "public/fonts/fonts";
import Link from "next/link";
import clsx from "clsx";

import { headerNavigationItems } from "config/headerNavigationItems";

export const Header = async ({ lang }) => (
  <header className="flex w-full flex-col items-center justify-between p-4 md:p-6 lg:flex-row">
    <Logo lang={lang} />
    <nav className="flex flex-row space-x-16">
      {headerNavigationItems.map(({ label, href, iconName, id }) => (
        <Link
          key={id}
          href={`/${lang}/${href}`}
          className={clsx(
            montserrat.className,
            "flex flex-row items-center justify-center gap-x-2 font-bold transition-colors duration-75 hover:text-slate-200 active:text-slate-300",
          )}
        >
          <Icon name={iconName} size={24} weight="duotone" />
          {label}
        </Link>
      ))}
    </nav>
    <ThemeSelector />
  </header>
);
