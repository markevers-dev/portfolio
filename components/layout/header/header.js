"use server";

import { ThemeSelector, Icon, Logo } from "components";
import { montserrat } from "public/fonts/fonts";
import Link from "next/link";
import clsx from "clsx";
import { checkRouteStatus } from "utils/checkRouteStatus";

import { headerNavigationItems } from "config/headerNavigationItems";

const HeaderItem = async ({ label, href, iconName, ...headerItemProps }) => {
  const isInactive = await checkRouteStatus(href);

  return (
    <Link
      href={href}
      className={clsx(
        montserrat.className,
        { "pointer-events-none text-slate-400 line-through": isInactive },
        "flex flex-row items-center justify-center gap-x-2 tracking-widest transition-all duration-75 hover:font-bold",
      )}
      aria-disabled={isInactive}
      tabIndex={isInactive ? -1 : undefined}
      {...headerItemProps}
    >
      <Icon name={iconName} size={24} weight="duotone" />
      {label}
    </Link>
  );
};

export const Header = async ({ lang }) => (
  <header className="mb-4 flex w-full flex-col items-center justify-between p-4 md:mb-6 md:p-6 lg:flex-row">
    <Logo lang={lang} size="xl" />
    <nav className="flex flex-row space-x-16">
      {headerNavigationItems.map(({ label, href, iconName, id }) => (
        <HeaderItem
          key={id}
          label={label}
          href={`/${lang}/${href}`}
          iconName={iconName}
        />
      ))}
    </nav>
  </header>
);
