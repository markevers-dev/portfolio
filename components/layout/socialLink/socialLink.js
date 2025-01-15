"use client";

import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { Icon } from "components";
import { montserrat } from "public/fonts/fonts";
import clsx from "clsx";
import { isMobile, BrowserView } from "react-device-detect";

export const SocialLink = ({
  label,
  href,
  iconName,
  id,
  ...socialLinkProperties
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovered(true);
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      {...socialLinkProperties}
    >
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
          className="hover:text-primary-600 active:text-primary-500 dark:hover:text-primary-200 dark:active:text-primary-300 hover:motion-preset-seesaw-lg transition-colors duration-200"
        />
      </Link>
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
              "bg-primary-500 absolute left-1/2 top-[-2rem] -translate-x-1/2 rounded px-2 py-1 text-xs font-bold text-slate-100 shadow-lg",
              montserrat.className,
            )}
          >
            {label}
          </span>
        </Transition>
      </BrowserView>
    </div>
  );
};
