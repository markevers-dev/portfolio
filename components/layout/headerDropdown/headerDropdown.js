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

export const HeaderDropdown = ({ lang }) => (
  <Menu as="div" className="flex items-center md:hidden">
    <MenuButton className="hover:text-primary-600 active:text-primary-500 dark:hover:text-primary-200 dark:active:text-primary-300 transition-colors duration-100">
      <Icon name="List" size={28} />
    </MenuButton>
    <MenuItems
      transition
      className="bg-primary-200 dark:bg-primary-800 fixed inset-0 left-0 top-0 z-50 flex h-max w-full flex-col shadow-sm transition-all duration-200 data-[closed]:-translate-y-24 data-[closed]:opacity-0 data-[open]:opacity-100"
    >
      <div className="flex w-full flex-col items-start justify-center gap-y-2 px-8 py-2">
        <MenuItem
          as="div"
          className="flex w-full flex-row items-center justify-between"
        >
          {({ close }) => (
            <>
              <Logo size="xl" lang={lang} />
              <Button
                onClick={close}
                className="hover:text-primary-700 active:text-primary-600 dark:hover:text-primary-200 dark:active:text-primary-300 transition-colors duration-75"
              >
                <Icon name="X" size={28} weight="regular" />
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
                  "pointer-events-none text-slate-500 line-through dark:text-slate-400":
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
