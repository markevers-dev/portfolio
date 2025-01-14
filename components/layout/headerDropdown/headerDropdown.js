"use client";

import { Icon, Logo } from "components";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Button,
} from "@headlessui/react";
import { headerNavigationItems } from "config/headerNavigationItems";
import clsx from "clsx";

export const HeaderDropdown = ({ lang }) => {
  console.log(lang);
  return (
    <Menu as="div" className="md:hidden">
      <MenuButton className="hover:text-primary-200 active:text-primary-300 transition-colors duration-100">
        <Icon name="List" size={24} />
      </MenuButton>
      <MenuItems
        transition
        className="bg-primary-800 fixed inset-0 left-0 top-0 z-50 flex h-max w-full flex-col shadow-sm"
      >
        <div className="flex w-full flex-col items-start justify-center gap-y-4 p-4 sm:gap-y-8 md:p-6">
          <MenuItem
            as="div"
            className="flex w-full flex-row items-center justify-between"
          >
            {({ close }) => (
              <>
                <Logo size="xl" lang={lang} />
                <Button
                  onClick={close}
                  className="hover:text-primary-200 active:text-primary-300 transition-colors duration-75"
                >
                  <Icon name="X" size={24} />
                </Button>
              </>
            )}
          </MenuItem>
          {headerNavigationItems.map((headerItem, index) => {
            const { label, href, iconName } = headerItem;
            const isInactive = headerItem.isInactive ? true : false;

            return (
              <MenuItem
                as={Link}
                href={`/${lang}/${href}`}
                key={`${label}-${index}`}
                className={clsx(
                  {
                    "pointer-events-none text-slate-400 line-through":
                      isInactive,
                  },
                  "flex flex-row items-center justify-center space-x-2 rounded-xl p-2 transition-colors duration-200 hover:bg-slate-700/10 hover:shadow-sm active:bg-slate-700/20",
                )}
                aria-disabled={isInactive}
                tabIndex={isInactive ? -1 : undefined}
              >
                <Icon name={iconName} size={18} weight="duotone" />
                {label}
              </MenuItem>
            );
          })}
        </div>
      </MenuItems>
    </Menu>
  );
};
