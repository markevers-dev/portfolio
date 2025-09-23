"use client";

import { Icon } from "components";
import { Button, Transition } from "@headlessui/react";
import { isMobile, BrowserView } from "react-device-detect";
import { translations } from "config/translations";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { montserrat } from "public/fonts/fonts";

export const LangSelector = ({ currentLang }) => {
  const [isHovered, setIsHovered] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const newLang = currentLang === "en" ? "nl" : "en";
  const switchLangText = translations.header.language_button[currentLang];

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovered(true);
  };

  const handleSwitchLang = () => {
    if (!pathname) return;

    const newPath = pathname.replace(/^\/(en|nl)/, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button onClick={handleSwitchLang}>
        <Icon
          name="Translate"
          size={24}
          weight="duotone"
          className="transition-colors duration-75 hover:motion-preset-seesaw-lg hover:text-primary-600 active:text-primary-500 dark:hover:text-primary-200 dark:active:text-primary-300"
        />
      </Button>
      <BrowserView>
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
              "absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-nowrap rounded bg-primary-500 px-2 py-1 text-xs font-bold text-slate-100 shadow-lg",
              montserrat.className,
            )}
          >
            {switchLangText} ({newLang.toUpperCase()})
          </span>
        </Transition>
      </BrowserView>
    </div>
  );
};
