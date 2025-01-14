"use server";

import { ThemeSelector, Icon, Logo, HeaderDropdown } from "components";
import { montserrat } from "public/fonts/fonts";
import Link from "next/link";
import clsx from "clsx";

import { headerNavigationItems } from "config/headerNavigationItems";

const HeaderItem = async ({ headerItemData, ...headerItemProps }) => {
  const { label, href, iconName } = headerItemData;
  const isInactive = headerItemData.isInactive ? true : false;

  return (
    <Link
      href={href}
      className={clsx(
        montserrat.className,
        {
          "pointer-events-none text-slate-500 line-through dark:text-slate-400":
            isInactive,
        },
        "flex flex-row items-center justify-center gap-x-2 text-sm tracking-widest transition-all duration-75 hover:font-bold",
      )}
      aria-disabled={isInactive}
      tabIndex={isInactive ? -1 : undefined}
      {...headerItemProps}
    >
      <Icon name={iconName} size={16} weight="duotone" />
      {label}
    </Link>
  );
};

export const Header = async ({ lang }) => (
  <header className="mb-4 flex w-full flex-row items-center justify-between border-b-[1px] border-slate-900/10 px-8 py-2 md:mb-6 md:flex-col md:px-24 md:py-4 md:max-lg:space-y-4 lg:flex-row dark:border-slate-100/10">
    <Logo lang={lang} size="xl" />
    <nav className="flex flex-col space-x-12 max-md:hidden md:flex-row">
      {headerNavigationItems.map((headerItem) => (
        <HeaderItem headerItemData={headerItem} key={headerItem.id} />
      ))}
    </nav>
    <div className="flex flex-row items-center gap-x-4">
      <ThemeSelector />
      <Icon name="Translate" size={24} weight="duotone" />
      <HeaderDropdown lang={lang} />
    </div>
  </header>
);
