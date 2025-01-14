"use client";

import { useEffect, useState } from "react";
import { Icon, Spinner } from "components";
import { Button } from "@headlessui/react";

const iconSize = 24;

export const ThemeSelector = ({}) => {
  const [theme, setTheme] = useState();

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
        <Button onClick={toggleTheme}>
          <Icon
            name={theme === "dark" ? "Moon" : "Sun"}
            size={iconSize}
            weight="duotone"
            className="dark:hover:text-primary-200 dark:active:text-primary-300 hover:text-primary-700 active:text-primary-600 transition-colors duration-75"
          />
        </Button>
      ) : (
        <Spinner size={iconSize} color="light" />
      )}
    </>
  );
};
