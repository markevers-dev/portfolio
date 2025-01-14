"use client";

import { useEffect, useState } from "react";
import { Icon, Spinner } from "components";
import { Button, Transition } from "@headlessui/react";
import clsx from "clsx";
import { montserrat } from "public/fonts/fonts";

const iconSize = 24;

export const ThemeSelector = ({}) => {
  const [theme, setTheme] = useState();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    setTheme(currentTheme);
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);

    await fetch("/api/set-theme", {
      method: "POST",
      body: JSON.stringify({ theme: newTheme }),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <>
      {theme ? (
        <div
          className="relative flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Button onClick={toggleTheme}>
            <Icon
              name={theme === "dark" ? "Moon" : "Sun"}
              size={iconSize}
              weight="duotone"
              className="hover:text-primary-600 active:text-primary-500 dark:hover:text-primary-200 dark:active:text-primary-300 hover:motion-preset-seesaw-lg transition-colors duration-75"
            />
          </Button>
          <Transition
            show={isHovered}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <span
              className={clsx(
                "bg-primary-500 absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-nowrap rounded px-2 py-1 text-xs font-bold text-slate-100 shadow-lg",
                montserrat.className,
              )}
            >
              Switch theme
            </span>
          </Transition>
        </div>
      ) : (
        <Spinner size={iconSize} color="light" />
      )}
    </>
  );
};
